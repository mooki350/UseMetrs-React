import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './usage-goal-water-monthly.css'

const UsageGoalWaterMonthly = (props) => {
  return (
    <div className="usage-goal-water-monthly-container">
      <Helmet>
        <title>UsageGoalWaterMonthly - UseMetrs</title>
        <meta property="og:title" content="UsageGoalWaterMonthly - UseMetrs" />
      </Helmet>
      <div className="usage-goal-water-monthly-weekly-water-goal">
        <div className="usage-goal-water-monthly-header">
          <span className="usage-goal-water-monthly-text">
            <span>water goal</span>
          </span>
          <Link
            to="/usage-goals-new-goal"
            className="usage-goal-water-monthly-navlink"
          >
            <img
              alt="tablerarrowback4761"
              src="/playground_assets/tablerarrowback4761-p7.svg"
              className="usage-goal-water-monthly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="usage-goal-water-monthly-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="usage-goal-water-monthly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="usage-goal-water-monthly-tabs">
          <div className="usage-goal-water-monthly-tabs1">
            <div className="usage-goal-water-monthly-monthly">
              <div className="usage-goal-water-monthly-selected">
                <img
                  alt="Line14831"
                  src="/playground_assets/line14831-m8dt.svg"
                  className="usage-goal-water-monthly-line1"
                />
                <span className="usage-goal-water-monthly-text02">
                  <span>monthly</span>
                </span>
              </div>
            </div>
            <Link
              to="/usage-goal-water-weekly"
              className="usage-goal-water-monthly-navlink2"
            >
              <div className="usage-goal-water-monthly-weekly">
                <span className="usage-goal-water-monthly-text04">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/usage-goal-water-daily"
              className="usage-goal-water-monthly-navlink3"
            >
              <div className="usage-goal-water-monthly-daily">
                <span className="usage-goal-water-monthly-text06">
                  <span>daily</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <span className="usage-goal-water-monthly-text08">
          <span>enter goal</span>
        </span>
        <span className="usage-goal-water-monthly-text10">
          <span>repeat goal?</span>
        </span>
        <div className="usage-goal-water-monthly-input">
          <div className="usage-goal-water-monthly-textfield">
            <span className="usage-goal-water-monthly-text12">
              <span>enter your goal</span>
            </span>
          </div>
        </div>
        <Link to="/usage-goals" className="usage-goal-water-monthly-navlink4">
          <div className="usage-goal-water-monthly-button">
            <span className="usage-goal-water-monthly-text14">
              <span>save goal</span>
            </span>
          </div>
        </Link>
        <div className="usage-goal-water-monthly-toggle">
          <img
            alt="RectangleI465"
            src="/playground_assets/rectanglei465-hmz-200h.png"
            className="usage-goal-water-monthly-rectangle"
          />
          <img
            alt="EllipseI465"
            src="/playground_assets/ellipsei465-3jm-200w.png"
            className="usage-goal-water-monthly-ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default UsageGoalWaterMonthly
