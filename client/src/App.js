import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import Task from './components/Task/Task'
import Calendar from './components/Calendar/Calendar'
import Hierarchy from './components/Hierarchy/Hierarchy'


function App() {
  return (
    <div className='App'>
      <Sidebar />
      <div className='main-content'>
        <div className='top-row'>
          <Task />
          <Calendar />
        </div>
        <div className='bottom-row'>
          <Hierarchy />
        </div>
      </div>
    </div>
  );
}

export default App;
