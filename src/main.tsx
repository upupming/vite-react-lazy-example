import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import './index.css';

const Page1 = React.lazy(() => import('./Page1'));
const Page2 = React.lazy(() => import('./Page2'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/Page1">Page1</Link>
        </li>
        <li>
          <Link to="/Page2">Page2</Link>
        </li>
      </ul>
      <Routes>
        <Route
          key={'/Page1'}
          path={'/Page1'}
          element={
            <Suspense fallback={null}>
              {' '}
              <Page1 />
            </Suspense>
          }
        ></Route>
        <Route
          key={'/Page2'}
          path={'/Page2'}
          element={
            <Suspense fallback={null}>
              {' '}
              <Page2 />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
