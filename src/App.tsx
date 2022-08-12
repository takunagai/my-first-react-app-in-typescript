import React from 'react';

interface AppProps {
  message?: string; // name props がない場合のために、オプショナルに
}

// React から提供された、コンポーネントという型を持つ関数を使う
// const App = ({ message }: AppProps ) => {
const App: React.FunctionComponent<AppProps> = ({ message }) => { // コメントアウトしている上の行なら、↓ の A の場合にエラーが出ない
  return <div>{message}</div>; // カーソルオンで string 型なのを確認
};

// デフォルト値を設定してみる
App.defaultProps = {
  message: 'Hello, defaultProps!',
  // message: 123, // 型が異なるのでエラー(A)
  // description: 'This is App component.' // 不要なデータが混入してエラー(A)
};

export default App;
