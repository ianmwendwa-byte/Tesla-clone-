import React from 'react'
import Fade from 'react-reveal/Fade';
function Section(props) {
  console.log(props.backgroundImg)
  return (
    <Fade bottom>
    <div className='Wrap' style={{backgroundImage:`url(${props.backgroundImg})`}}>
      <Fade clear>
       <div className='Item-text'>
          <h1>{props.title}</h1>
          {props.description &&<p>{props.description}</p>}
       </div>
       </Fade> 
       <div className='button-img'>
         <Fade clear>
          <div className='Button-group'>
          <div className='left-button'>{props.leftBtnText}</div>
          {props.rightBtnText &&<div className='right-button'>{props.rightBtnText}</div>}

          </div>
          </Fade>
          {props.src&&<img src={props.src} alt='down arrow' className='down-arrow'/>}
      </div>
    </div>
    </Fade>
  )
}
export default Section