import React, { Component } from "react";
import '../assets/style.css';

export class Horloge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
        this.timer = null
    }

    componentDidMount() {
        this.timer = window.setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    render() {
        return <>
            <h4>Mapremière application React</h4>
            <div className="horloge">
                {this.state.date.toLocaleString()}
            </div>
        </>
    }
}