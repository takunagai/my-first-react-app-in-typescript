import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 自作のモジュール(コンポーネント)

// ReactDOM.render(<App message={true} />, document.getElementById('root')); // 文字列しか許可しないのでエラー ok
ReactDOM.render(<App message="Hello, React!" />, document.getElementById('root'));
