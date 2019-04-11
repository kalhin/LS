import React from 'react';   

export default class Block_1 extends React.Component {
    render() {
        return (  
            <section className = "block">
                <div className = "row-2">
                <p className = "text-1">Where do you want to go?</p>
                <div className = "line"></div>
                <p>{`We recommend you the next destinations with`}
                <br/>
                 {`a sweet discounted price`}
                </p>
                </div>   
            </section>               
        );
    }
}