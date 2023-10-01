import { Component } from 'react';

class DrawDot extends Component {
    
    render() {
        const { x, y, radius, fillColor } = this.props; // 从属性中获取圆点的位置和样式

        return (
            <svg width="100" height="100">
                <circle cx={x} cy={y} r={radius} fill={fillColor} />
            </svg>
        );
    }
}

export default DrawDot;