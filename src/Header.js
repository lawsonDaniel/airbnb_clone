import React from 'react'
import logo from './images/logo.svg'
import './header.css'
import places from './stays.json'


function Header() {    
    const getDistinctLocations = (locs) => { 
        const visited = new Set();
        return places.filter(place => {
            if (visited.has(place.city + place.country)) {
                return false
            }
            
            visited.add(place.city + place.country);
            return true
        }).map(place => (
            <>
                <option value={place.city}>{place.city}, {place.country}</option>

            </>
        ))
    }
    const getMaxGuest = (guest) => {
            const visted = new Set();
               return places.filter(place =>{
                if(visted.has(place.maxGuests)){
                    return false
                }
                visted.add(place.maxGuests)
                return true
            }).map(place=>(
                <>
                     <option value={place.maxGuests}>{place.maxGuests}</option>
                </>
            ))
    }

    return (
        <div className='d-flex flex-column flex-lg-row p-3 justify-content-between con'>
            <div className='select-logo'>
                <img src={logo} />
            </div>
            <div>
                    <form method='get'>
                <div className='d-flex shadow-sm selectmain'>
                    <div>
                        <select className=' firstselect select text-muted' >
                            {getDistinctLocations(places)}
                        </select>
                    </div>
                    {/* /**end of select */}

                    <div>
                        <select className='secondselect select text-muted'>
                            <option selected>Max guest</option>
                            {
                                getMaxGuest(places.maxGuests)
                            }


                        </select>
                    </div>
                    {/* /**end of select */}


                    {/* end */}
                    <div>
                        <button type='search' className=' thirdSelect select' >
                            <span className="material-icons"> search</span>
                        </button>
                    </div>
                </div>
            </form>

            </div>


        </div>
    )
}

export default Header