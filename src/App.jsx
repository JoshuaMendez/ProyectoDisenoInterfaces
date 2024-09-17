import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Leftbar from './components/Leftbar/Leftbar.jsx'
import Blog from './components/blog/blog.jsx'
import Share from './components/Share/Share.jsx'
import Post from './components/Post/Post.jsx'
import Feed from './components/Feed/Feed.jsx'

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
          <div className='seccion'>
            <h1 className='activity-feed-title'>Activity Feed</h1>
          </div>
          <Feed />
        </div>
        <div className='column'>
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default App;