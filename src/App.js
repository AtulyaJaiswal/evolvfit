import './App.css';
import Home from './Home';
import Workout from './Workout';
import Nutrition from './Nutrition';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId/workout" element={<Workout/>} />
        <Route path="/:userId/nutrition" element={<Nutrition />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
