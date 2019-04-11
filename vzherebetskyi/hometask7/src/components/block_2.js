import React from 'react';   

export default class Block_2 extends React.Component {
    render() {
        return(
            <section className = "block">
                <div className = "block-5">
                    {
                        ['pic-1', 'pic-1', 'pic-1'].map((option, i) => (
                                <div key = {i} className = {option}>
                                     <div className = "rectangle-1">
                                     </div> 
                                     <p className = "text-3">Barcelona from 27&#8364;</p>
                                </div>
                            ))
                    }
                </div>
            </section>
        );
    }
}