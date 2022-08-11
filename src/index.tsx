import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 自作のモジュール(コンポーネント)

(() => {
    /**
     * TypeScript で発生するエラーと、Intrinsic な属性の実体を確認
     */
    // // ../public/index.html の #root を <App /> で置き換えてレンダー
    // ReactDOM.render(<App message="Hello, React!" key="1" />, document.getElementById('root'));
    // // エラー：型 '{ message: string; }' を型 'IntrinsicAttributes(本来備わっている)' に割り当てることはできません。
    // // エラーにならない Intrinsic な属性(特別扱い)： key="1"

    // // key の実体を確認してみる
    // type Foo = JSX.IntrinsicAttributes;
    // // IntrinsicAttributes を右クリック > 定義に移動 で実体を見る
    // // → React.Attributes を継承しているのが確認できる、さらに同様にしてその Attributes の実体を見る
    // // → `key?: Key | null | undefined;` と確認できる → 登録されている！
    // // `message?: string;` と追記すると、上記のエラーが消えることを確認 → Interface Attribute がキモ (このファイルを変更したらダメなので戻す)

    // // ↑ のエラーはのちに解説
})();


// コンポーネントの使用先で props をセットすると、↑ のエラーは消える
ReactDOM.render(<App message="Hello, React!" />, document.getElementById('root'));
