import React from 'react'

export default function ProgressBar(props) {
  return(
    <div className="progress">
      <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  )
}
