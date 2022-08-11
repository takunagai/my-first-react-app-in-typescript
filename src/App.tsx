import React from 'react';

// 関数コンポーネント。最終的に HTML として出力
const App = (props: any) => { // コンポーネントから渡された属性を props にセット。ここで使用し、型指定も必要。とりあえず any 指定で消えた
  console.log(props);
  const { message } = props; // オブジェクトから、メッセージというメンバーだけ取り出す
  return <div>{message}</div>;
};

export default App;
