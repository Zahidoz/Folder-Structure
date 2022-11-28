import './App.scss';
import {Route,Routes} from 'react-router-dom'
import MainPage from './Pages/Main/MainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
