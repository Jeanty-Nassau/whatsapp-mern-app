import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className='app__body'>

        {/* Sidebar component */}
        <Sidebar />
        
        {/* Chat component */}
        <Chat/>
      </div>

      
      {/* Login component */}
    </div>
  );
}

export default App;
