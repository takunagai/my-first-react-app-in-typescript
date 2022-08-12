import React, { useState } from 'react';

const Counter: React.FC<{}> = () => {

    const initialValue: any = 0; // 前回の説明のため、意図的に any になってる
    const [value, setValue] = useState<number>(initialValue); // 型引数の型制約、コールバック関数の prevState に影響する(A)

    // Counter コンポーネントが管理する value をアップデートする関数を定義
    // setValue は、引数にコールバック関数を受け取ることもできる
    const increment = () => {
        setValue(prevState => prevState + 1); // (A) prevState にカーソルオンすると、useState で指定した number 型
    };
    const decrement = () => {
        setValue(prevState => prevState - 1);
    };

    return (
        <div>
            <div>value: {value}</div> {/*状態。ロード時レンダリングから、変化起きない*/}
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    );
}

export default Counter;
