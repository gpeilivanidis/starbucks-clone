import React from 'react';

const Section = (props) => {
  return (
    <section className={props.sectionClass}>
        <div className="section--container flex my5">

            <div
             className={`img-banner flex justify-center align-center
              ${props.swapOrder ? 'order-2' : ''}`}>
                <img src={props.img.url} alt={props.img.alt} />
            </div>
            
            <div
             className={`info ${props.infoClass}
              ${props.swapOrder ? 'order-1' : ''}`}>

                <div
                 className={`info--container ${props.infoContainerClass}`}>

                    {props.children}
                    
                </div>
                
            </div>
            
        </div>
    </section>
  )
}

export default Section