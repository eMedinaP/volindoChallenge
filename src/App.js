import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import routes from './routes'
import { Suspense } from 'react'
import { createBrowserHistory } from 'history'
import "./lang/i18n";
export const history = createBrowserHistory()

const App = () => {
  return(
    <Router history={history}>
      <Suspense fallback={null}>
        {routes.map(route => {
          const { path} = route
          return (
            <Routes key={path}>
              <Route path={path} key={path} element={<route.component/>} />
            </Routes>
          )
        })}
      </Suspense>
    </Router>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
