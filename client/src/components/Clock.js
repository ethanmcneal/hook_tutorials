import React, { useEffect, useState } from "react"
import CardContainer from "../style_components/CardContainer";

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state={date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }
    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>YEPCLOCK</h1>
            <CardContainer>
            <h1>{this.state.date.toLocaleTimeString()}</h1>
            </CardContainer>
        </div>
    )
}
}

export default Clock