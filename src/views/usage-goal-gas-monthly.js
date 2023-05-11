import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './usage-goal-gas-monthly.css'

const UsageGoalGasMonthly = (props) => {
  return (
    <div className="usage-goal-gas-monthly-container">
      <Helmet>
        <title>UsageGoalGasMonthly - UseMetrs</title>
        <meta property="og:title" content="UsageGoalGasMonthly - UseMetrs" />
      </Helmet>
      <div className="usage-goal-gas-monthly-weekly-gas-goal">
        <div className="usage-goal-gas-monthly-header">
          <span className="usage-goal-gas-monthly-text">
            <span>gas goal</span>
          </span>
          <Link
            to="/usage-goals-new-goal"
            className="usage-goal-gas-monthly-navlink"
          >
            <img
              alt="tablerarrowback4885"
              src="/playground_assets/tablerarrowback4885-hrsf.svg"
              className="usage-goal-gas-monthly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="usage-goal-gas-monthly-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="usage-goal-gas-monthly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="usage-goal-gas-monthly-tabs">
          <div className="usage-goal-gas-monthly-tabs1">
            <div className="usage-goal-gas-monthly-monthly">
              <div className="usage-goal-gas-monthly-selected">
                <img
                  alt="Line14955"
                  src="/playground_assets/line14955-foz9.svg"
                  className="usage-goal-gas-monthly-line1"
                />
                <span className="usage-goal-gas-monthly-text02">
                  <span>monthly</span>
                </span>
              </div>
            </div>
            <Link
              to="/usage-goal-gas-weekly"
              className="usage-goal-gas-monthly-navlink2"
            >
              <div className="usage-goal-gas-monthly-weekly">
                <span className="usage-goal-gas-monthly-text04">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/usage-goal-gas-daily"
              className="usage-goal-gas-monthly-navlink3"
            >
              <div className="usage-goal-gas-monthly-daily">
                <span className="usage-goal-gas-monthly-text06">
                  <span>daily</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <span className="usage-goal-gas-monthly-text08">
          <span>enter goal</span>
        </span>
        <span className="usage-goal-gas-monthly-text10">
          <span>repeat goal?</span>
        </span>
        <div className="usage-goal-gas-monthly-input">
          <div className="usage-goal-gas-monthly-textfield">
            <span className="usage-goal-gas-monthly-text12">
              <span>enter your goal</span>
            </span>
          </div>
        </div>
        <Link to="/usage-goals" className="usage-goal-gas-monthly-navlink4">
          <div className="usage-goal-gas-monthly-button">
            <span className="usage-goal-gas-monthly-text14">
              <span>save goal</span>
            </span>
          </div>
        </Link>
        <div className="usage-goal-gas-monthly-toggle">
          <img
            alt="RectangleI465"
            src="/playground_assets/rectanglei465-hmz-200h.png"
            className="usage-goal-gas-monthly-rectangle"
          />
          <img
            alt="EllipseI465"
            src="/playground_assets/ellipsei465-3jm-200w.png"
            className="usage-goal-gas-monthly-ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default UsageGoalGasMonthly
