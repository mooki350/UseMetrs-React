import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './usage-goal-gas-weekly.css'

const UsageGoalGasWeekly = (props) => {
  return (
    <div className="usage-goal-gas-weekly-container">
      <Helmet>
        <title>UsageGoalGasWeekly - UseMetrs</title>
        <meta property="og:title" content="UsageGoalGasWeekly - UseMetrs" />
      </Helmet>
      <div className="usage-goal-gas-weekly-weekly-gas-goal">
        <div className="usage-goal-gas-weekly-header">
          <span className="usage-goal-gas-weekly-text">
            <span>gas goal</span>
          </span>
          <Link
            to="/usage-goals-new-goal"
            className="usage-goal-gas-weekly-navlink"
          >
            <img
              alt="tablerarrowback4885"
              src="/playground_assets/tablerarrowback4885-hrsf.svg"
              className="usage-goal-gas-weekly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="usage-goal-gas-weekly-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="usage-goal-gas-weekly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="usage-goal-gas-weekly-tabs">
          <Link
            to="/usage-goal-gas-monthly"
            className="usage-goal-gas-weekly-navlink2"
          >
            <div className="usage-goal-gas-weekly-monthly">
              <span className="usage-goal-gas-weekly-text02">
                <span>monthly</span>
              </span>
            </div>
          </Link>
          <div className="usage-goal-gas-weekly-weekly">
            <div className="usage-goal-gas-weekly-selected">
              <img
                alt="Line14896"
                src="/playground_assets/line14896-ang.svg"
                className="usage-goal-gas-weekly-line1"
              />
              <span className="usage-goal-gas-weekly-text04">
                <span>weekly</span>
              </span>
            </div>
          </div>
          <Link
            to="/usage-goal-gas-daily"
            className="usage-goal-gas-weekly-navlink3"
          >
            <div className="usage-goal-gas-weekly-daily">
              <span className="usage-goal-gas-weekly-text06">
                <span>daily</span>
              </span>
            </div>
          </Link>
        </div>
        <span className="usage-goal-gas-weekly-text08">
          <span>enter goal</span>
        </span>
        <span className="usage-goal-gas-weekly-text10">
          <span>repeat goal?</span>
        </span>
        <div className="usage-goal-gas-weekly-input">
          <div className="usage-goal-gas-weekly-textfield">
            <span className="usage-goal-gas-weekly-text12">
              <span>enter your goal</span>
            </span>
          </div>
        </div>
        <Link to="/usage-goals" className="usage-goal-gas-weekly-navlink4">
          <div className="usage-goal-gas-weekly-button">
            <span className="usage-goal-gas-weekly-text14">
              <span>save goal</span>
            </span>
          </div>
        </Link>
        <div className="usage-goal-gas-weekly-toggle">
          <img
            alt="RectangleI465"
            src="/playground_assets/rectanglei465-hmz-200h.png"
            className="usage-goal-gas-weekly-rectangle"
          />
          <img
            alt="EllipseI465"
            src="/playground_assets/ellipsei465-3jm-200w.png"
            className="usage-goal-gas-weekly-ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default UsageGoalGasWeekly
