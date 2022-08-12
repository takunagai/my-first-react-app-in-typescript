import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
