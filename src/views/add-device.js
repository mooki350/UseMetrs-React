import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './add-device.css'

const AddDevice = (props) => {
  return (
    <div className="add-device-container">
      <Helmet>
        <title>AddDevice - UseMetrs</title>
        <meta property="og:title" content="AddDevice - UseMetrs" />
      </Helmet>
      <div className="add-device-add-new-device">
        <div className="add-device-header">
          <span className="add-device-text">
            <span>energy goal</span>
          </span>
          <Link to="/devices" className="add-device-navlink">
            <img
              alt="tablerarrowback4174"
              src="/playground_assets/tablerarrowback4174-maet.svg"
              className="add-device-tablerarrowback"
            />
          </Link>
          <Link to="/" className="add-device-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="add-device-icbaselinehome"
            />
          </Link>
        </div>
        <span className="add-device-text02">
          <span>device name</span>
        </span>
        <span className="add-device-text04">
          <span>room of device</span>
        </span>
        <div className="add-device-dropdownmenu">
          <span className="add-device-text06">
            <span>select option</span>
          </span>
          <img
            alt="Vector1I274"
            src="/playground_assets/vector1i274-cqqk.svg"
            className="add-device-vector1"
          />
        </div>
        <div className="add-device-dropdownmenu1">
          <span className="add-device-text08">enter device name</span>
        </div>
      </div>
      <Link to="/devices" className="add-device-navlink2">
        <div className="add-device-button">
          <span className="add-device-text09">connect device</span>
        </div>
      </Link>
    </div>
  )
}

export default AddDevice
