import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import TamaStats from './TamaStats';
import TamaStatBox from './TamaStatBox';
import './SatiateTama.css';

class SatiateTama extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='SatiateButtons'>
                <button className="SatiateTamaButton" onClick={() => {this.props.buttonClicker()}}>{this.props.addressNeed}</button>
            </div>
        )
    }
}

export default SatiateTama;