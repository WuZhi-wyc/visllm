import React, { Component } from "react";
// import * as d3 from 'd3';

class MySvg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMouseInside: false, //鼠标是否进入绘制区域
            drawing: false,  // 是否正在绘制
            lines: [],       // 存储绘制的线条
        };

        this.svgRef = React.createRef();
    }

    //组件挂载后，确保正确引用到SVG元素
    componentDidMount() {
        this.svgElement = this.svgRef.current;
    }

    // 检测鼠标进入
    handleMouseEnter = () => {
        this.setState({ isMouseInside: true });
    }
    // 检测鼠标移出
    handleMouseLeave = () => {
        this.setState({ isMouseInside: false });
    }

    // 获取SVG画布的位置信息
    getSvgCoordinates = (e) => {
        if (!this.svgElement) {
            return { x: 0, y: 0 };
        }
        const svgRect = this.svgElement.getBoundingClientRect();
        return {
            x: e.clientX - svgRect.left,
            y: e.clientY - svgRect.top,
            // x: svgRect.left,
            // y: svgRect.top,
        };
    };

    // 处理鼠标按下事件
    handleMouseDown = (e) => {
        if (e.button !== 0) return; // 只在鼠标左键按下时绘制

        // const { svgX, svgY} = this.getSvgCoordinates(e);
        // console.log("svgX: ", svgX," + ", "svgY: ", svgY)
        const { clientX, clientY } = this.getSvgCoordinates(e);
        // const { clientX, clientY } = e;
        console.log("clientX: ", clientX, " + ", "clientY: ", clientY)
        const { lines } = this.state;

        this.setState({
            drawing: true,
            lines: [...lines, { x: clientX, y: clientY }],
        });
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    };

    // 处理鼠标移动事件
    handleMouseMove = (e) => {
        if (!this.state.drawing) return;

        // const { svgX, svgY} = this.getSvgCoordinates(e);
        // console.log("svgX: ", svgX," + ", "svgY: ", svgY)
        const { clientX, clientY } = this.getSvgCoordinates(e);
        // const { clientX, clientY } = e; 
        console.log("clientX: ", clientX, " + ", "clientY: ", clientY)
        const { lines } = this.state;
        const updatedLines = [...lines, { x: clientX, y: clientY }];

        this.setState({
            lines: updatedLines,
        });
    };

    // 处理鼠标释放事件
    handleMouseUp = () => {
        this.setState({
            drawing: false,
        });
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    };

    render() {
        const { lines } = this.state;
        const { isMouseInside } = this.state;

        return (
            <div
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={{ position: 'relative', height: '800px', width: '800px', border: '2px solid black' }}
            >
                {isMouseInside ? '鼠标在范围内' : '鼠标不在范围内'}
                <svg
                    ref={this.svgRef}
                    width="100%"
                    height="100%"
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                >
                    {lines.map((line, index) => (
                        <line
                            key={index}
                            x1={line.x}
                            y1={line.y}
                            x2={lines[index + 1]?.x || line.x}
                            y2={lines[index + 1]?.y || line.y}
                            stroke="black"
                            strokeWidth="2"
                        />
                    ))}
                </svg>
            </div>
        );
    }
}

export default MySvg;