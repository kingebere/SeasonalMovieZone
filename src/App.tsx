import React,{useEffect,useState,useReducer} from 'react'
import axios from 'axios'
// import  {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import { Searchbar } from './components/Searchbar';
import { Searchz } from './components/Searchz';
import { Navbar } from './layout/Navbar';


type Actions = | {type:"SEARCH_TRACKS";
payload:[]
}| {type:"GET_TRACKS";
payload:[]
}


// const []:Array<Todo> =[
//   {text:"walking",completed:true},
//   { text:"walked",completed:false},
//   { text:"walkes",completed:true}
//     ];

//    interface Took{
//  text:string;
//  complete:Boolean;
//    }
    

type track_list={
  track:[];
}


 const Tracks:track_list ={
   track:[]
 }
 export const  UserContext = React.createContext<track_list|any>(Tracks)

 const reducer = (state :track_list, action:Actions):track_list => {
  switch (action.type) {
      case 'SEARCH_TRACKS':
          return {...state,track:action.payload}
          case 'GET_TRACKS':
          return {...state,track:action.payload}
          
              default:
          return state
  }
}

 const App: React.FC<{}> = () => {
 const [data, setdata] = useState(Tracks)
 const [state, dispatch] = useReducer(reducer, Tracks)



    
useEffect(() => {
        axios
        .get(
          `https://api.tvmaze.com/singlesearch/shows?q=rick-&morty&embed=episodes`)
            
          .then(res =>{
          return  dispatch(
       {type:"SEARCH_TRACKS",
          payload: res.data._embedded.episodes
               
          }  )
         })
          .catch(err => console.error(err))}, [])
  
    return (
        
          <div>
         <UserContext.Provider value={{state,dispatch}}>
         <div className="container">
         
        <Navbar/>
         <Searchz/>
         <Searchbar/>
         </div>
         
         </UserContext.Provider>
          </div>
      
    )
}

export default App;