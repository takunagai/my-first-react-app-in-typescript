import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 自作のモジュール(コンポーネント)

// ReactDOM.render(<App message="Hello, React!" name="Ham" />, document.getElementById('root')); // 許可していない属性はエラー
ReactDOM.render(<App message="Hello, React!" />, document.getElementById('root'));
