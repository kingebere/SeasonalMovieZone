import React,{useContext} from 'react'
import {UserContext} from '../App'
import {Spinner} from '../layout/Spinner'
 

interface Episode{
    id: number,
  url: string,
  name: string,
  season: number,
  number: number,
  airdate: string,
  airtime: string
  airstamp: string,
  runtime: number
  image: {
  medium: string,
  original: string},
  summary: string,
  }

export const Searchbar: React.FC<{}> = () => {
    const yes = useContext(UserContext)
    console.log(yes)
    const you = yes.state.track
    if (you === undefined || you === null || you.length === 0 || you.length ===[]){
        return <Spinner />
    }else
    return (
        
        <React.Fragment>
     
             <h3 className='text-center mb-4'>EPISODES</h3>
             <section className="row ">
             {you.map((episode:Episode)=>(
                <section key={episode.id} className="col-md-3 mb-2 p-4">
                <img src={episode.image.medium} alt="yes"/>
                Season:{episode.season} <br/> Number:{episode.number}
                <br/>Summary:{episode.summary}<br/>
                Aired :{episode.airdate}
                  </section>))}
                  </section>
            
            
             </React.Fragment>
    )
}