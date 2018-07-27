import React from 'react'

export default function ProgressBar(props) {
  return(
    <div>
      <div className="progress">
        <div className="progress-bar" id="progress-bar" role="progressbar" style={{ width: props.progress + '%' }}></div>
      </div>
      <div id="message-completed"></div>
    </div>
  )
}
