import React, { useEffect, useRef, useState } from 'react';
// useRef 追加、カーソルオン > クリックで型に移動し見る
// `function useRef<T>(initialValue: T): MutableRefObject<T>;` 型引数を伴う関数型
// 返り値の MutableRefObject にカーソルオン > 移動で確認すると
// `interface MutableRefObject<T> {current: T;}`

// useEffect 追加、カーソルオン > クリックで型に移動し見る
// `function useEffect(effect: EffectCallback, deps?: DependencyList): void;` 型引数なし、引数に effect, deps? 戻り値なし
// 第１引数 effect の型 EffectCallback にカーソルオン > 移動で確認すると
// `type EffectCallback = () => (void | Destructor);` 関数型、引数なし、返り値はなしか Destructor
// Destructor にカーソルオン > 移動で確認すると
// `type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never };`
// 第２引数 deps の型 EffectCallback にカーソルオン > 移動で確認すると
// `type DependencyList = ReadonlyArray<unknown>;`
// interface の ReadonlyArray にカーソルオン > 移動で確認すると、膨大な定義。
// → DependencyList は、型引数に与えた型で構成される readonly な配列
// → useEffect の第２引数 deps には、readonly な配列をセットできることがわかる

// // ReadonlyArray の説明コード
// const array: Array<number> = [1, 2, 3];
// const readonlyarray: ReadonlyArray<number> = [1, 2, 3]; // 読み取り専用の配列
// array[0] = 11; // 上書きできる
// readonlyarray[0] = 11; // エラー、上書きできない


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
     * useRef で、何回レンダリングしているかを計測する機能を実装していく
     * (= 再レンダリングごとに、値が増える)
     * 
     * UseEffect: コンポーネントがレンダーされたら必ず実行される処理を書く
     */
    const renderTimes = useRef<number>(0); // renderTimes に 0 を保持させている。型引数で型制約
    // ↑ の型定義で見た通り、値の取り出しは、current で取り出せる → (B)

    useEffect(() => {
        // ブラウザのコンソールを確認
        // +1/-1 ボタンをクリック(再レンダリング)するたびに、この命令が実行される！
        renderTimes.current = renderTimes.current + 1;
    });

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
