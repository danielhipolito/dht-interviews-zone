import RootRouters from './utils/rootRouters';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
        <Router  history={history}>
            <RootRouters />
        </Router>
    </div>
  );
}

export default App;
