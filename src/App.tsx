import React from 'react';

// interface で外に切り離す。再利用も可能に
interface AppProps {
  message: string;
}

const App = ({ message }: AppProps ) => { // interface で指定
  return <div>{message}</div>; // カーソルオンで string 型なのを確認
};

export default App;
