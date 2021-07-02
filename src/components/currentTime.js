import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div>
                <br/>
                <h2>{this.state.date.toLocaleDateString()}</h2>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock
