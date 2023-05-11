import React from 'react'

import PropTypes from 'prop-types'

import './boring-button.css'

const BoringButton = (props) => {
  return (
    <div className={`boring-button-container ${props.rootClassName} `}>
      <span className="boring-button-text">{props.text}</span>
    </div>
  )
}

BoringButton.defaultProps = {
  text: 'stuff',
  text1: '+xx%',
  rootClassName: '',
}

BoringButton.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BoringButton
