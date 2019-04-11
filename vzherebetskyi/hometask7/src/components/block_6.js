import React from 'react';   

export default class Block_6 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            options: ['About us', 'Legal disclaimer', 'Cities', 'Countries', 'Blog']
        };
    }
    
    render() {
        return (
    <section className = "block"> 
    <div className = "block-7">
            <div className = "row" style = {{margin: 'auto'}}>
                <div className = "col column-1">
                <p style = {{color: '#109fc4'}}><img src = ".././img/shape-arrow.png" className = "smallarrow" /> Contact</p>
                {
                    this.state.options.map((option, i) => 
                    (
                        <p key = {i}><img src = ".././img/shape-arrow.png" className = "smallarrow" />{option}</p>
                    ))
                }
                </div>
                <div className = "col column-2">
                  <p style = {{color: '#109fc4'}}>Contact phone numbers</p>
                  <div>
                   <p className = "comments-1">Customer Services:</p> 
                   <p className = "comments-2">02035143971</p>
                   <p className = "comments-3">0-24 h every day. Customised service: 9-21 h. Local call. Spanish time.</p>     
                  </div> 
                  <div>
                   <p className = "comments-1">Ticket Sales:</p> 
                   <p className = "comments-2">+4409050781000</p>
                   <p className = "comments-3">8-24 h every day. Calls cost 0.80 ppm per minute plus your phone company's access charge.</p>     
                  </div> 
                   </div>
                   <div className = "col column-2">
                        <p style = {{color: '#109fc4'}}>Subscribe to our newsletter</p>
                        <input className = "letter" placeholder = "e-mail" />
                        <div className = "baseText button-6">Subscribe</div> 
                        <div className = "block badges">
                                <div className = "badge"><p></p></div>
                                <div className = "badge-2"><p></p></div>
                        </div> 
                   </div>
            </div>        
        </div>
    </section>
        );
    }
}