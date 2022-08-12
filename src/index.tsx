import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 自作のモジュール(コンポーネント)

// name props を渡さない場合、デフォルト値が適用されるように
// ReactDOM.render(<App message="Hello, React!" />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root')); // name props を渡さないので、オプショナルにする必要がある
