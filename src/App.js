import './App.css';
import Video from './Video.js';

function App(){
  return <div className='app'>
    <h1 Hello Wrld></h1>
    <div className='app__videos'>
      <Video/>
      <Video/>
      <Video/>
      <Video/>
      <Video/>
    </div>
  </div>;
}
export default App;