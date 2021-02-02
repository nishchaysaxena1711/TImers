import React, { Component } from "react";
import styled from 'styled-components';

const StyledWatch = styled.div`
    width: 200px;

    > div {
        display: flex;
        align-items: center;
        width: 100px;
        height: 100px;
        padding: 10px;
        border-radius: 50%;
        border: 1px solid #000;
        margin-bottom: 10px; 
    }

    button {
        margin-right: 5px;
    }
`;

const StyledWatches = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border: 1px solid #000;
`;

class StopWatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            initial : props && props.initial || 0,
            time : props && props.initial || 0,
            interval : props && props.interval || 1,
            pause: false,
            start: false,
        }
    }

    componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 1000);
	}

    tick() {
        const { pause, start, time, interval } = this.state;
		if(start && !pause) {
            this.setState({
                time: time + interval
            })
        }
	}

    componentWillUnmount() {
		clearInterval(this.intervalID);
    }
    
    getVisibleTime = (time) => {
        const hour = parseInt(time / 3600);
        const mins = parseInt( time / 60 );
        const seconds = (time % 60 % 60);

        return `${hour} : ${mins} : ${seconds}`;
    }

    render() {
        const { initial, time, pause, start } = this.state;
        
        return (
            <StyledWatch>
                <div>{this.getVisibleTime(time)}</div>
                {pause && <button onClick={() => this.setState({ pause: false })}>Resume</button>}
                {!start && <button onClick={() => this.setState({ start: true })}>Start</button>}
                {start && !pause && <button onClick={() => this.setState({ pause: true })}>Pause</button>}
                <button onClick={() => this.setState({ start: false, time: initial })}>Stop</button>
            </StyledWatch>
        )
    }
}

class StopWatches extends Component {
    render() {
        return (
            <StyledWatches>
                <StopWatch initial={50} interval={3}/>
                <StopWatch />
                <StopWatch />
            </StyledWatches>
        )
    }
}

export default StopWatches;