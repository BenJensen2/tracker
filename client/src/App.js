// import './App.css';

import styles from './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Task from './components/Task/Task'
import Calendar from './components/Calendar/Calendar'
import Hierarchy from './components/Hierarchy/Hierarchy'


function App() {
  return (
    <div className={styles.App}>
      <Sidebar/>
      <Task/>
      <Calendar/>
      <Hierarchy/>
    </div>
  );
}

export default App;
