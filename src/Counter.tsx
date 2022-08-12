import React, { useState } from 'react'; // useState もインポート

// const Counter: React.FunctionComponent<{}> = () => { // コンポーネント関数に型を指定。空オブジェクトで良い
const Counter: React.FC<{}> = () => { // 等価の処理、短く書ける TODO: React 18 の書き方に変更

    // setValue の説明：下の AA と BB を自前実装してみる
    // type MySetStateAction<S> = S | ((prevState: S) => S);
    type MySetStateAction = number | ((prevState: number) => number); // S を number と直書き
    // type MyDispatch<A> = (value: A) => void;
    // type MyDispatch = (value: MySetStateAction) => void; // setValue の型は、これそのもの
    type MyDispatch = (value: number | ((prevState: number) => number)) => void; // MySetStateAction を埋め込んだ

    // const initialValue: any = 0; // any 型だと…
    // const [value, setValue] = useState(initialValue); // value も any 型に。良くない。number 型に制約したい

    const initialValue: any = 0; // 
    const [value, setValue] = useState<number>(initialValue); // useState にカーソルオン > 定義に移動で型を見ると…
    // function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]; // 型引数が設定できることを確認
    //  ↑ useState の型引数に指定した型を受け取り、→ `useState<number>` で、value が any でなく number 型になる

    // setValue にカーソルオンしてみると、すでに : React.Dispatch<React.SetStateAction<number>> と設定されてる
    //   setValue の型は、React.Dispatch で型引数を持つ。その型引数の中の SetStateAction で型引数が指定されている
    //   型は決まっていて、実装者が変更する余地はない。useState の型引数に与える型で自動で決まる
    //   <number> を <string> に変えると、 : React.Dispatch<React.SetStateAction<string>> と自動で変更される

    // React.Dispatch を分解して理解する
    //   setValue にカーソルオン > 型定義へ移動(定義に移動ではない) し見てみる
    //   `type Dispatch<A> = (value: A) => void;` // BB
    //   A にあたる SetStateAction は、その上の行に
    //   `type SetStateAction<S> = S | ((prevState: S) => S);` // AA
    //    型引数で指定した型のデータ、もしくは、型引数として指定した型のデータを引数として、かつその型と同じ型のデータを返す関数のいずれかを型として持つ

    return (
        <div>
            <div>value: {value}</div> {/*状態。ロード時レンダリングから、変化起きない*/}
            <button>+1</button>
            <button>-1</button>
        </div>
    );
}

export default Counter;
