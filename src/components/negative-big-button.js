import React from 'react'

import PropTypes from 'prop-types'

import './negative-big-button.css'

const NegativeBigButton = (props) => {
  return (
    <div className={`negative-big-button-container ${props.rootClassName} `}>
      <span className="negative-big-button-text">{props.text}</span>
      <span className="negative-big-button-text1">{props.text1}</span>
      <svg viewBox="0 0 1024 1024" className="negative-big-button-icon">
        <path
          d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

NegativeBigButton.defaultProps = {
  text1: '+xx%',
  rootClassName: '',
  text: 'energy',
}

NegativeBigButton.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NegativeBigButton
