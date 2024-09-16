import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Leftbar from './components/Leftbar/Leftbar.jsx'
import Blog from './components/blog/blog.jsx'
// import { BarraNavegacionSuperior } from './components/barra-navegacion-superior/barra-navegacion-superior.jsx';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Leftbar />
      <Blog />
    </div>
  );
}

export default App;
