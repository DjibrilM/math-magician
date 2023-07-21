import React from 'react';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';
import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Suspense fallback={<h1>....loading</h1>}>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <React.Fragment>
              <Route path='/quotes'
                Component={() =>
                  <Suspense fallback={<h4>...Loading</h4>}>
                    <Quotes />
                  </Suspense>} />
              <Route path='calculator' Component={() => <Calculator />} />
              <Route path='/' Component={() => (
                <div className='home-container'>
                  <h1 className=''>
                    welcome to our page
                  </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro veniam excepturi voluptates, voluptate ab exercitationem itaque, cum qui, illo maxime recusandae doloremque. Deserunt, laboriosam, reiciendis quasi natus in dolor rerum, ea maxime architecto quae incidunt assumenda! Consequatur architecto quo dolorem aliquam ducimus, neque enim illum sapiente ullam alias error. Facilis reiciendis atque aut minima eum? Quam doloremque repellat recusandae nisi vel enim voluptatum sequi adipisci reprehenderit consequatur laboriosam, ducimus labore molestiae ad eius rerum aspernatur esse corrupti culpa. Reiciendis ratione at dicta excepturi earum. Explicabo architecto temporibus iure quos odio, sint ex magnam numquam repellendus obcaecati consequuntur, ratione voluptas?</p>
                </div>
              )} />
            </React.Fragment>
          </Routes>
        </main>
      </div>
    </Suspense>

  );
}

export default App;
