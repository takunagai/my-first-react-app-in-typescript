import React, { useState } from 'react';

const Counter: React.FC<{}> = () => {

    const initialValue: any = 0; // 前回の説明のため、意図的に any になってる
    const [value, setValue] = useState<number>(initialValue);

    // Counter コンポーネントが管理する value をアップデートする関数を定義
    const increment = () => {
        setValue(value + 1); // value を更新
    };
    const decrement = () => {
        setValue(value - 1);
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
