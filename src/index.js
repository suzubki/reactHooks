import React from 'react';
import ReactDOM from 'react-dom';

// import { SimpleForm } from './Components/02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './Components/01-useState/CounterWithCustomHook';
// import HooksApp from './HooksApp';
// import { MultipleCustomHooks } from './Components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './Components/04-useRef/FocusScreen';
// import { RealExampleRef } from './Components/04-useRef/RealExampleRef';
// import { Layout } from './Components/05-useLayoutEffect/Layout';
// import { Memorize } from './Components/06-memos/Memorize';
import { MemoHook } from './Components/06-memos/MemoHook';

ReactDOM.render(
  <React.StrictMode>
    <MemoHook />
  </React.StrictMode>,
  document.getElementById('root')
);
