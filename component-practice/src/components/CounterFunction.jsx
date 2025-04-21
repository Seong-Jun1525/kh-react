import React, { useEffect, useState } from 'react'

const CounterFunction = () => {
    const [count, setCount] = useState(0);

    // 값 증가
    const increaseCount = () => {
        setCount(count + 1); // count++는 const 상수 타입의 변수이므로 값을 재할당할 수 없다.
    }

    // 값 감소
    const decreaseCount = () => {
        setCount(count - 1);
    }

    // 생명주기
    useEffect(() => {
        console.log("count : " + count);
    }, [count]);

    return (
        <div style={{backgroundColor: "red"}}>
            <h2>함수형 컴포넌트</h2>
            <h1>Count : {count}</h1>
            <button onClick={() => {increaseCount()}}>+</button>
            <button onClick={() => {decreaseCount()}}>-</button>
        </div>
    );
}

export default CounterFunction;