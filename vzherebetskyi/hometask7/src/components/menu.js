import React from 'react';

export default class Menu extends React.Component {
    render () {
        return (
            <section className = "block">
            <div className = "background">
                <nav className = "row row-1">
                    <div className = "col pl-5">
                            <img src = ".././img/logo.svg" alt = "plane-pic-1"/>       
                    </div>
                    <div className = "col">
                            <p>Travel</p>
                            <img src = ".././img/arrow-1.png" alt = "arrow"/>
                    </div>
                    <div className = "col"> 
                            <p>Flying Info</p>
                            <img src = ".././img/arrow-1.png" alt = "arrow"/>
                    </div>
                    <div className = "col"> 
                            <div className = "button-1">Register</div>
                    </div>
                    <div className = "col"> 
                            <div className = "button-2">Flying Club</div>
                    </div>
                </nav>
                <div className = "whitebox">
                <ul>
                  <li><img src = ".././img/shape.png"  srcSet=".././img/shape@2x.png 2x,
                        .././img/shape@3x.png 3x" className = "shape" alt = "plane-pic-2" /></li>
                  <li className = "departures">Departures</li>
                  <li><div className = "separator"></div></li>
                  <li><img src = ".././img/bed.png" className = "shape" alt = "bed" /></li>
                  <li className = "hotel">Hotels</li>
                  <li><div className = "separator"></div></li>
                  <li><img src = ".././img/cheers.png" className = "shape-2" alt = "glasses"/></li>
                  <li className = "hotel">Experiences</li>
                </ul>                
        </div>
        <div className = "block-2">
        <div className = "whitebox-2">
                <ul>
                   <li><p className = "from">From:</p>
                        <p className = "from-2">Spain - Sevilla (SVQ)</p>
                  </li>
                  <li>
                        <div className = "separator-2"></div>
                        <img src = ".././img/reverse.png" className = "shape-3" alt = "tw-arrows"/>
                        <div className = "separator-3"></div>
                  </li>
                  <li><p className = "from">To:</p>
                      <p className = "from-2">Spain - Barcelona (BCN)</p>
                  </li>
                  <li> 
                        <div className = "separator"></div>   
                  </li>
                  <li><img src = ".././img/calendar.png" className = "shape-4" alt = "calendar" /></li>
                </ul>
        </div>
        <div className = "button-5">
               <p style = {{paddingTop : "10px"}}> Continue </p>
        </div>
        </div>

        <div className = "block text-6">
                <div className = "srectangle"> </div>
                <p>One Way Ticket</p>
        </div>
        <div>
                <img className = "arrow-2" src = ".././img/arrow-1@3x.png" alt = "arrow-2" />     
        </div>
            </div>
        </section>
        );
    }
}