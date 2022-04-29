import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import Task from './components/Task/Task'
import Calendar from './components/Calendar/Calendar'
import Hierarchy from './components/Hierarchy/Hierarchy'


function App() {
  return (
    <div className={styles.App}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={styles.topRow}>
          <Task />
          <Calendar />
        </div>
        <div className={styles.bottomRow}>
          <Hierarchy />
        </div>
      </div>
    </div>
  );
}

export default App;
