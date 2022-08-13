import React, { useEffect, useRef, useState } from 'react';

const Counter: React.FC<{}> = () => {

    const initialValue: any = 0;
    const [value, setValue] = useState<number>(initialValue);

    const increment = () => {
        setValue(prevState => prevState + 1);
    };
    const decrement = () => {
        setValue(prevState => prevState - 1);
    };

    const renderTimes = useRef<number>(0);

    useEffect(() => {
        renderTimes.current = renderTimes.current + 1;
    });

    // useRef、null で初期化したオブジェクトを作成
    const ref = useRef<HTMLInputElement>(null); // B、input 要素の ref で受け取る型 <HTMLInputElement> を型引数にすることで、変数 ref の方が React.RefObject<HTMLInputElement> とできる
    /* useRef にカーソルオンで型を確認 */
    /* useRef<null>(initialValue: null): React.MutableRefObject<null>、型引数が null、A で RefObject<T> としたい */

    // ボタンを押すとフォーカスする処理の関数
    const focusInput = () => {
        const current = ref.current;
        if (current != null) current.focus(); // ref.current で input の値を参照できる。初期値 null の場合には処理させないよう分岐処理しないとエラー
    };

    return (
        <div>
            <div>value: {value}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <div>This component was re-renderd {renderTimes.current} times.</div>
            <input ref={ref} type="text" /> {/* 型を一致させた {ref} */}
            {/* ref にカーソルオンで確認 → React.ClassAttributes<HTMLInputElement>.ref?: React.LegacyRef<HTMLInputElement> | undefined → HTMLInputElement で初期化 → B */}
            {/* ref にカーソルオン > 定義に移動で確認 */}
            {/* `ref?: LegacyRef<T> | undefined;` */}
            {/* LegacyRef にカーソルオン > 定義に移動で確認 */}
            {/* `type LegacyRef<T> = string | Ref<T>;` */}
            {/* 【注意】string も許容されてるが今は非推奨なので、Ref に設定できるのは Ref<T> だけ */}
            {/* 1行上に Ref 型の定義があるので確認 */}
            {/* `type Ref<T> = RefCallback<T> | RefObject<T> | null;`、 今回は RefObject<T> */}{/* A */}
            {/* RefObject にカーソルオン > 定義に移動で確認 */}
            {/* `interface RefObject<T> {readonly current: T | null;}` */}

            <button onClick={focusInput}>Click Me!</button>
        </div>
    );
}

export default Counter;
