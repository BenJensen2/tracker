import React from 'react'
import './projectDetail.scss'

const ProjectDetail = ({closePopUpWrapper}) => {

  return (
    <div className="project-detail-form">
      <div className="form-field">
        <input type="text" name="title" placeholder="Project 1" />
      </div>
      <div className="form-field">
        <label htmlFor="description">Description</label>
        <input type="text" name="description" />
      </div>
      <div className="form-field">
        <label htmlFor="projected_start_date">Projected Start Date</label>
        <input type="text" name="projected_start_date" />
      </div>
      <div className="form-field">
        <label htmlFor="projected_end_date">Projected End Date</label>
        <input type="text" name="projected_end_date" />
      </div>
      <div className="form-field">
        <label htmlFor="actual_start_date">Actual Start Date</label>
        <input type="text" name="projected_start_date" />
      </div>
      <div className="form-field">
        <label htmlFor="actual_end_date">Actual End Date</label>
        <input type="text" name="projected_end_date" />
      </div>
      <div className="form-field">
        <div className="project-events">
          <div className="project-events-left">
            <div className="project-event-info">
              <label htmlFor="created_at">Created</label>
              <p>Yesterday at 3:41 PM</p>
            </div>
            <button className="danger-button" onClick={closePopUpWrapper}>Cancel</button>
          </div>
          <div className="project-events-right">
            <div className="project-event-info">
              <label htmlFor="updated_at">Updated</label>
              <p>Today at 6PM</p>
            </div>
            <button className="submission-button" >Add Project</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProjectDetail