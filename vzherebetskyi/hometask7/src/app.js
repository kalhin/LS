import React from 'react';   
import ReactDOM from 'react-dom';
import Menu from './components/menu';
import Block_1 from './components/block_1';
import Block_2 from './components/block_2';
import Block_3 from './components/block_3';
import Block_4 from './components/block_4';
import Block_5 from './components/block_5';
import Block_6 from './components/block_6';
import Footer from './components/footer';
import '../sass/styles.scss';
import 'bootstrap';

class App extends React.Component{

    render() {
        return(
            <div>
                <Menu />
                <Block_1 />
                <Block_2 />
                <Block_3 />
                <Block_4 />
                <Block_5 />
                <Block_6 />
                <Footer />
            </div>
        ); 
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<App />, appRoot);

console.log("app is running");