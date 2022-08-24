import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  HashRouter
} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={<Navigate to={`documents/${uuidv4()}`} />}
        />
        <Route
          path='/documents/:id'
          element={<TextEditor />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
