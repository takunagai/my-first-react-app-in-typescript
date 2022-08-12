import React, { useRef, useState } from 'react';
// useRef 追加、カーソルオン > クリックで型に移動し見る
// `function useRef<T>(initialValue: T): MutableRefObject<T>;` 型引数を伴う関数型
// 返り値の MutableRefObject にカーソルオン > 移動で確認すると
// `interface MutableRefObject<T> {current: T;}`

const Counter: React.FC<{}> = () => {

    const initialValue: any = 0;
    const [value, setValue] = useState<number>(initialValue);

    const increment = () => {
        setValue(prevState => prevState + 1);
    };
    const decrement = () => {
        setValue(prevState => prevState - 1);
    };

    /**
     * 何回レンダリングしているかを計測する機能を実装していく
     * (レンダリングされるごとに、値が増える)
     */
    const renderTimes = useRef(0); // renderTimes に 0 を保持させている
    // ↑ の型定義で見た通り、値の取り出しは、current で取り出せる → (B)

    return (
        <div>
            <div>value: {value}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <div>This component was re-renderd {renderTimes.current} times.</div>{/*(B)*/}
        </div>
    );
}

export default Counter;
