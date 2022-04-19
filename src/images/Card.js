import React from 'react'

function Card(props) {
  return (
    <>
    <div>
        <div className="d-flex flex-column mt-4 p-3" style={{width: '25rem'}}>
            <div className='card_image'>
                <img className='img cover'  src={props.photo}/>
            </div>
            <div>
                <div className='d-flex justify-content-between align-items-center my-3'>
                    {props.superhost ? <><div className='superhost primary-color'>superHost</div></>: null}
                    <div className='text-muted'>{props.type}</div>
                    <div>
                        <div className='d-flex content-end'>
                            <div><span className="material-icons">
                                star
                                </span>
                                </div>
                            <div className='py-2 primary-color' >{props.rating}</div>
                        </div>
                    </div>
                    
                </div>
                <div className='font-weight-bold'>{props.title}</div>
            </div>
            
        </div>
        </div>
    </>
  )
}

export default Card