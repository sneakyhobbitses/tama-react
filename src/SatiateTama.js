import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import TamaStats from './TamaStats';

class SatiateTama extends React.Component {
    handleClickStats(key) {
        const satiatedStats = this.state.tamaStats.map(curStats => ({
            ...curStats,
            currentValue: this.props.key === 'bio' ? 0 : curStats.currentValue
        }));
        this.setState({
            tamaStats: updatedHunger
        })
        alert('u fed it');
    };
    render() {
        return (
            <button onClick={() => this.handleClickStats(satiatedStats.key)}>
                play
            </button >
        )
    }
}

export default SatiateTama;