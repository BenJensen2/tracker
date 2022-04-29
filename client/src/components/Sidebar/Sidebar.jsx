import React,{useState} from 'react'
import './sidebar.scss'

// Shows Hierarchy of Projects, Sprints and Tasks
const Sidebar = ({setShowPopUp}) => {

  const newProjectFormHandler = (e) => {
    setShowPopUp(true)
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-title'>
        <h3>Projects</h3>
        <button className='submission-button' onClick={newProjectFormHandler}>New Project</button>
      </div>
      <div className='sidebar-projects'>
        <ul>
          <li>
            <div className="project-title">
              <h4>Project 1</h4>
              <button className='submission-button' type='button'>New Sprint</button>
            </div>
            <div className="project-sprints">
              <ul>
                <li>
                  <h5 className="sprint-title">Sprint 1</h5>
                  <div className="sprint-tasks">
                    <ul>
                      <li>
                        <h6 className="task-title">Task 1</h6>
                      </li>
                    </ul>
                  </div>
                </li>
                <li><h5 className="sprint-title">Sprint 2</h5></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar