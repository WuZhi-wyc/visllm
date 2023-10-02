import React, { Component } from "react";
import DrawDot from "./DrawDot";
import '../css/grid.css';

class MySvg extends Component {
    render() {
        const xDot = 50, yDot = 50, xLine = 40, yLine = 10;
        const svgHeight = xDot * xLine + 50;
        const svgWidth = yDot * yLine + 50;

        // 生成多个 <DrawDot> 组件
        const dots = [];
        for (let yline = 1; yline <= yLine; yline++) {
            for (let xline = 1; xline <= xLine; xline++) {
                dots.push(
                    <DrawDot
                        key={`${xline}-${yline}`}
                        x={xDot * xline}
                        y={yDot * yline}
                        radius={10}
                        fillColor='blue'
                    />
                );
            }
        }

        return (
            <div>
                <h1>Draw Dot</h1>
                <div className="svg-container">
                    <svg
                        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {dots} {/* 渲染生成的 <DrawDot> 组件 */}
                    </svg>
                </div>
            </div>
        );
    }
}

export default MySvg;