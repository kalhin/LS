import React from 'react';   

export default class Block_4 extends React.Component {
    render() {
        return (
            <section className = "block"> 
                    <div className = "block-6">
                    {
                        ["pic2", "pic2"].map((option, i) =>
                        (
                        <figure key = {i} style = {{ margin: "auto" }}>
                        <div className = "backdrop pic2">
                        <div className = "rectangle-2"></div>
                        <p className = "hotels">Hotels:</p>
                        <p className = "pros">&#10003; Save 33% in our hotels <br/> &#10003; Free tour guide <br/> &#10003; Bonus discount for families <br/> &#10003; Free insurance</p>
                        <p className = "from-3">From</p>
                        <p className = "price">38&#8364;</p>
                        </div>
                        <button className = "button-4">Book now!</button>
                        </figure>
                        ))
                    }
                    </div>
            </section>
        );
    }
}