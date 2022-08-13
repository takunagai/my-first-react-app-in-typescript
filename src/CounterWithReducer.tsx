import React, { useReducer } from 'react'; // useReducer を読み込む

// useReducer の型。複雑、定義の上では5つある
// function useReducer<R extends ReducerWithoutAction<any>, I>(
//     reducer: R, initializerArg: I, initializer: (arg: I) => ReducerStateWithoutAction<R>
// ): [ReducerStateWithoutAction<R>, DispatchWithoutAction] (+4 overloads)

// A 確認すると、右に５つ出てくる
//   今回使用のコードで引数が2つなので、5つの中で引数が 2,5番目の引数が２つのもの(3つで1つがオプショナルなら該当)が候補
//   A の dispach の型が Dispatch<ReducerAction<R>>、２つ目の返り値が適応する5つめが今回使う型となる

// ５つめの型
// function useReducer<R extends Reducer<any, any>>(
//     reducer: R,
//     initialState: ReducerState<R>,
//     initializer?: undefined // 今回は使わない
// ): [ReducerState<R>, Dispatch<ReducerAction<R>>];

// 上の ReducerState の型
// type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
// 説明：R (関数である) は Reducer と互換性がなければならない。真になるので、S となる

// 上の Reducer の型
// type Reducer<S, A> = (prevState: S, action: A) => S;

// → Reducer ステートは、状態の型である


// state は、プロパティ count が存在するオブジェクト。counter は、number 型
type StateType = { count: number };

const initialState: StateType = { count: 0 }; // initialState にも型を適用

// reducer の第二引数 action は、action type で increment か decrement という文字列を拾いたい
type AcrionType = { type: 'decrement' | 'increment' | 'reset' }; // 文字列リテラル型

function reducer(state: StateType, action: AcrionType): StateType | never { // reducer の返り値にも型を適用、エラーの場合のための never
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset': // 【メリット】ActionType 型を指定してるので、cate ' と打った時点でエディタが3つの候補を提案してくれる
            return initialState;
        default:
            throw new Error();
        }
    }

function CounterWithReducer() {
    const [state, dispatch] = useReducer(reducer, initialState); // 引数２つ。配列を返す。 → A
    // dispatch は、React.Dispatch<any> 型
    return (
        <>
            Count: {state.count}{/* 【メリット】StateType 型を指定してるので、state と打った時点でエディタが count を補完してくれる */}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </>
    );
}

export default CounterWithReducer;