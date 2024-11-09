
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register.jsx';
import Category from './pages/Category.jsx'
import Home from './pages/Home.jsx';
import Browse from './pages/Browse.jsx';



function App() {
  return (
   <>
<Routes>
  <Route path="/" exact element={<Register/>} />
  <Route path="/home" exact element={<Home/>} />
  <Route path="/browse" exact element={<Browse/>} />
  <Route path="/categories" element={<Category/>} />
</Routes>
   </>
  );
}

export default App;
