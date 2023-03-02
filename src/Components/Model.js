import React from 'react'

 function Model(props) {
  return (
    <div>
    <div className='model' style={{backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 5), rgba(0, 0, 0, 0)),url(${props.image})`}}>
   <div className='title'>
    <h1 style={{fontSize:"50px",fontWeight:"500",color:"black"}}>{props.title}</h1>
   {props.description &&
   <p style={{color:"black",fontSize:"20px"}}>{props.description}</p>}
    
   </div>

    <div className='description'>
        <div className='top-description'>
            <div className='text-data'>
                <h2>{props.head}</h2>
                <p>{props.text}</p>
            </div>
            <div className='text-data'>
                <h2>{props.head1}</h2>
                <p>{props.text1}</p>
            </div>
            <div className='text-data'>
                <h2>{props.head2}</h2>
                <p>{props.text2}</p>
            </div>
            {props.head3&&
            <div className='text-data'>
                <h2>{props.head3}</h2>
                <p>{props.text3}</p>
            </div>}
        </div>
      <button className='order-now'>{props.button}</button>
    </div>
    
    </div>
    {props.interior &&<div className='section-two' style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 100)),url("images/game.jpg")'}}>
       <div className='interior'>
         <div className='interior-text'>{props.interior}</div>
       </div>
    
    </div>}
    </div>
  )
}
export default Model