import React, { useReducer } from 'react'; // useReducer を読み込む

// useReducer の型。複雑、定義の上では5つある
// function useReducer<R extends ReducerWithoutAction<any>, I>(
//     reducer: R, initializerArg: I, initializer: (arg: I) => ReducerStateWithoutAction<R>
// ): [ReducerStateWithoutAction<R>, DispatchWithoutAction] (+4 overloads)

// A 確認すると、右に５つ出てくる
//   今回使用のコードで引数が2つなので、5つの中で引数が 2,5番目の引数が２つのもの(3つで1つがオプショナルなら該当)が候補
//   A の dispach の型が Dispatch<ReducerAction<R>>、２つ目の返り値が適応する5つめが今回使う型となる

const initialState = {count: 0};

function reducer(state: any, action: any) { // 一旦 any にしてエラーをなくしている。きちんと型制約効かせたい
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
        }
    }

function CounterWithReducer() {
    const [state, dispatch] = useReducer(reducer, initialState); // 引数２つ。配列を返す。 → A
    // dispatch は、React.Dispatch<any> 型
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}

export default CounterWithReducer;