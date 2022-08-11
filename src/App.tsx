import React from 'react';

const App = ({message}: { message: string } ) => { // message 以外は許容しないように。実際は interface を使うことがほとんど
  return <div>{message}</div>;
};

export default App;
