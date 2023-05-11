import React from 'react'

import PropTypes from 'prop-types'

import './positive-big-button.css'

const PositiveBigButton = (props) => {
  return (
    <div className={`positive-big-button-container ${props.rootClassName} `}>
      <span className="positive-big-button-text">{props.text}</span>
      <span className="positive-big-button-text1">{props.text1}</span>
      <svg viewBox="0 0 1024 1024" className="positive-big-button-icon">
        <path
          d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

PositiveBigButton.defaultProps = {
  text1: '-xx%',
  rootClassName: '',
  text: 'energy',
}

PositiveBigButton.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default PositiveBigButton
