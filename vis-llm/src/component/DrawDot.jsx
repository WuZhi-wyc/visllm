import { Component } from 'react';

class DrawDot extends Component {
    
    render() {
        const { x, y, radius, fillColor } = this.props; // 从属性中获取圆点的位置和样式

        return (
            <circle cx={x} cy={y} r={radius} fill={fillColor} />
        );
    }
}

export default DrawDot;