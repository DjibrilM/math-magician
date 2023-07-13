import React from 'react';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';
import { Suspense } from 'react';


function App() {
  return (
    <Suspense fallback={<h1>....loading</h1>}>
      <div className="App">
        <main>
          <Suspense fallback={<h4>...Loading</h4>}>
            <Quotes />
          </Suspense>
          <Calculator />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
