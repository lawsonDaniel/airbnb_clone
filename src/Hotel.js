
import React from 'react'
import './hotel.css'
import Card from './images/Card'
import hoteldata from './stays.json'


function Hotel(props) {

  return (
    <div>
        
        <div class="d-flex flex-column flex-wrap flex-lg-row screen">
                
        {
            props.hotelList.map(places =>{
                return( 
                    <Card  photo={places.photo} 
                    type={places.type}
                     rating={places.rating}
                     superhost ={places.superHost}
                     title = {places.title}/>
                   
                )
            })
        }


</div>
<n/>
        </div>

    
  )
}


export default Hotel
