import { Component } from "react";

export class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    // 생명 주기

    // 처음 렌더링된 시점
    componentDidMount() {
        console.log("처음 렌더링된 시점");
    }

    // 상태가 변경되었을 때
    componentDidUpdate() {
        console.log("상태가 변경되었을 때");
    }

    // 해당 컴포넌트가 소멸될 때
    componentWillUnmount() {
        console.log("해당 컴포넌트가 소멸될 때");
    }

    // 값 증가
    increase = () => {
        this.setState((prev) => ({count: prev.count + 1}));
    }

    // 값 감소
    decrease = () => {
        this.setState((prev) => ({count: prev.count - 1}));
    }

    // 클래스형 컴포넌트일 경우 꼭 필요한 메서드다!
    render() {
        return (
            <div style={{backgroundColor: "yellow"}}>
                <h2>클래스형 컴포넌트</h2>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }   
}