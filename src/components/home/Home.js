import React from 'react'
import HomeData from './HomeData'
import './Home.css'
import Footer from '../UI/footer/Footer'
const data = [
    {date:'July 16' , name: 'DETROIT, MI' , activity:'DTE ENERGY MUSIC THEATRE'},
    {date:'July 18' , name: 'TORONTO,ON' , activity:'BUDWEISER STAGE'},
    {date:'July 28' , name: 'BRISTOW, VA' , activity:'JIGGY LUBE LIVE'},
    {date:'July 30' , name: 'PHOENIX, AZ' , activity:'AK-CHIN PAVILION'},
    {date:'Aug 6' , name: 'LAS VEGAS, NV' , activity:'T-MOBILE ARENA'},
    {date:'Aug 10' , name: 'CONCORD, CA' , activity:'CONCORD PAVILION'}
]

const Home = () => {
  return (
    <>
        
            <div className='d-flex flex-column align-items-center head'>
            <div className="head1 d-flex flex-column align-items-center"> 
                <h2>Get our Latest Album</h2>
                <i className="fa-regular fa-circle-play"></i>
            </div>
            <br/>
            <br/>
            <div>
                <h1>TOURS</h1>
            </div>
            <br/>
            <div>
                {data.map((data)=>(<HomeData date={data.date} name={data.name} activity={data.activity} />))}
            </div>
           
            </div>
{/*            
 <div className='footer'>
    <Footer/>
 </div> */}
       
    </>
    
  )
}

export default Home
