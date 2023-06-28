import React from 'react'
import './HomeData.css'
import { Button } from 'react-bootstrap'


const HomeData = (props) => {
  return (
    <>
<div className='container d-flex justify-content-center'>
<div className='d-flex items col-lg-10'>
    <div className='col-lg-2'>
        <p>{props.date}</p>
    </div>
   <div className='col-lg-3' >
    <p>{props.name}</p>
   </div>
   <div className='col-lg-4'>
    <p>{props.activity}</p>
   </div>
   <div className='col-lg-3'>
    <Button variant='primary'>Buy Tickets</Button>
   </div>
</div>
</div>

    </>
  )
}

export default HomeData
