import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Leftbar from './components/Leftbar/Leftbar.jsx'
import Blog from './components/blog/blog.jsx'
// import Share from './components/Share/Share.jsx'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Leftbar />
      <div className='columns'>
        <div className='column'>
          <Blog />
        </div>
        <div className='column'>
          {/* <Share /> */}
        </div>
        <div className='column'>
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default App;