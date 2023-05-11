import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './settings.css'

const Settings = (props) => {
  return (
    <div className="settings-container">
      <Helmet>
        <title>Settings - UseMetrs</title>
        <meta property="og:title" content="Settings - UseMetrs" />
      </Helmet>
      <div className="settings-settings">
        <div className="settings-header">
          <span className="settings-text">
            <span>settings</span>
          </span>
          <Link to="/" className="settings-navlink">
            <img
              alt="tablerarrowback3715"
              src="/playground_assets/tablerarrowback3715-pg35.svg"
              className="settings-tablerarrowback"
            />
          </Link>
          <Link to="/" className="settings-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="settings-icbaselinehome"
            />
          </Link>
        </div>
        <div className="settings-group5">
          <span className="settings-text02">
            <span>household settings</span>
          </span>
        </div>
        <div className="settings-group4">
          <span className="settings-text04">
            <span>rooms</span>
          </span>
        </div>
        <div className="settings-group3">
          <span className="settings-text06">
            <span>reminders</span>
          </span>
        </div>
        <div className="settings-group2">
          <span className="settings-text08">
            <span>dashboard settings</span>
          </span>
        </div>
        <Link to="/devices" className="settings-navlink2">
          <div className="settings-button">
            <span className="settings-text10">reset settings</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Settings
