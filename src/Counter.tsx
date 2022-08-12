import React from 'react';

// const Counter: React.FunctionComponent<{}> = () => { // コンポーネント関数に型を指定。空オブジェクトで良い
const Counter: React.FC<{}> = () => { // 等価の処理、短く書ける TODO: React 18 の書き方に変更
    const value = 0;
    return (
        <div>
            <div>value: {value}</div> {/*状態。ロード時レンダリングから、変化起きない*/}
            <button>+1</button>
            <button>-1</button>
        </div>
    );
}

export default Counter;
