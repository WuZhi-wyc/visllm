import { Component } from "react";
import DrawDot from "./DrawDot";
import '../css/grid.css';

class MySvg extends Component {
    render(){
        return (
            <div>
                <h1>Draw Dot</h1>
                <DrawDot x={50} y = {50} radius={10} fillColor='bluw' />
            </div>
        )
    }
}

export default MySvg;