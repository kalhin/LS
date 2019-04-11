import React from 'react';   

export default class Block_5 extends React.Component {
    render() {
        return (
            <section className = "block">
                <div className = "background-3">
                    <div className = "container mw-100">
                        <div className = "row">
                                <div className = "col line-Copy-3"></div>
                                <div className = "col"><p className = "text-7">Trust us</p></div>
                                <div className = "col line-Copy-3"></div>
                        </div>
                        <div className = "row"> 
                        {
                                [1,2,3,4].map((option, i) => (
                                        <div key = {i} className = "col text-5">
                                        <img src = ".././img/worldwide.png"/>
                                        <p>+ 87 countries</p>
                                        </div>     
                                ))
                        }
                        </div>
                        </div>
                </div>
            </section>
        );
    }
}