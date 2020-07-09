import React,{useState,useEffect,useContext} from 'react'
import axios from"axios"
import {UserContext} from '../App'

type Actions = | {type:"SEARCH_TRACKS";
payload:[]
}| {type:"GET_TRACKS";
payload:[]
}
type track_list={
  track:[];
}


 const Tracks:track_list ={
   track:[]
 }

const reducer = (state :track_list, action:Actions):track_list => {
  switch (action.type) {
          case 'GET_TRACKS':
          return {...state,track:action.payload}
              default:
          return state
  }
}
export const Searchz: React.FC<{}> = () => {
    const [text, setText] = useState<string>('')
    const [textsSat, setTexts] = useState<string>('')
    
 const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     
  setText(e.target.value)
      }

    const findTrack =(e: React.FormEvent<HTMLButtonElement>)=>{
  e.preventDefault();
  setTexts(text)
}

  const {state,dispatch} = useContext(UserContext)
  
  
 

    useEffect(() => {
        axios
        .get(
          `https://api.tvmaze.com/singlesearch/shows?q=${textsSat}&embed=episodes`)
            
          .then(res =>{
          return  dispatch(
       {type:"GET_TRACKS",
          payload: res.data._embedded.episodes
               
          }  )
         })
          .catch(err => console.error(err))},[textsSat])
  

   
    return (
        <div className="mb-2 p-3">
        <input type="text" className='form-control 
        form-control-lg mb-2'  placeholder='Type In Your Favourite Seasonal Movie' value ={text} onChange={onChange}/>
        <button type="button"className='btn btn-primary btn-lg btn-block mb-5'
         onClick={findTrack}>submit</button>
     </div>
    )
    
}
