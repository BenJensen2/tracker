import React from 'react'
import './popUpWrapper.scss'
import ProjectDetail from './ProjectDetail'

const PopUpWrapper = ({ showPopUp, setShowPopUp }) => {
  const closePopUpWrapper = (e) => {
    if (e.target.className == "pop-up-wrapper" || e.target.className == "danger-button") {
      setShowPopUp(false)
    }
  }

  return (
    <div className='pop-up-wrapper' onClick={closePopUpWrapper}>
      <div className="pop-up-form">
        <ProjectDetail
          closePopUpWrapper={closePopUpWrapper}
        />
      </div>
    </div>
  )
}

export default PopUpWrapper