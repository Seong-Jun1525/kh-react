import React, { useEffect, useState } from 'react'
import CounterFunction from './components/CounterFunction';
import { CounterClass } from './components/CounterClass';

const App = () => {
  
    const [kind, setKind] = useState();

    useEffect(() => {
      console.log(kind);
    }, [kind]);

    return (
        <div>
              <h1>컴포넌트 : 리액트 앱의 구성 단위</h1>
              <button onClick={() => setKind("Func")}>함수형 컴포넌트</button>
              <button onClick={() => setKind("Class")}>클래스형 컴포넌트</button>

              {
                  kind === "Func" ? (
                    <CounterFunction />
                  ) : (
                    <CounterClass />
                  )
              }
        </div>
    )
}

export default App