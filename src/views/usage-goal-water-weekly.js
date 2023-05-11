import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './usage-goal-water-weekly.css'

const UsageGoalWaterWeekly = (props) => {
  return (
    <div className="usage-goal-water-weekly-container">
      <Helmet>
        <title>UsageGoalWaterWeekly - UseMetrs</title>
        <meta property="og:title" content="UsageGoalWaterWeekly - UseMetrs" />
      </Helmet>
      <div className="usage-goal-water-weekly-weekly-water-goal">
        <div className="usage-goal-water-weekly-header">
          <span className="usage-goal-water-weekly-text">
            <span>water goal</span>
          </span>
          <Link
            to="/usage-goals-new-goal"
            className="usage-goal-water-weekly-navlink"
          >
            <img
              alt="tablerarrowback4761"
              src="/playground_assets/tablerarrowback4761-p7.svg"
              className="usage-goal-water-weekly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="usage-goal-water-weekly-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="usage-goal-water-weekly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="usage-goal-water-weekly-tabs">
          <Link
            to="/usage-goal-water-monthly"
            className="usage-goal-water-weekly-navlink2"
          >
            <div className="usage-goal-water-weekly-monthly">
              <span className="usage-goal-water-weekly-text02">
                <span>monthly</span>
              </span>
            </div>
          </Link>
          <div className="usage-goal-water-weekly-weekly">
            <div className="usage-goal-water-weekly-selected">
              <img
                alt="Line14772"
                src="/playground_assets/line14772-sh8j.svg"
                className="usage-goal-water-weekly-line1"
              />
              <span className="usage-goal-water-weekly-text04">
                <span>weekly</span>
              </span>
            </div>
          </div>
          <Link
            to="/usage-goal-water-daily"
            className="usage-goal-water-weekly-navlink3"
          >
            <div className="usage-goal-water-weekly-daily">
              <span className="usage-goal-water-weekly-text06">
                <span>daily</span>
              </span>
            </div>
          </Link>
        </div>
        <span className="usage-goal-water-weekly-text08">
          <span>enter goal</span>
        </span>
        <span className="usage-goal-water-weekly-text10">
          <span>repeat goal?</span>
        </span>
        <div className="usage-goal-water-weekly-input">
          <div className="usage-goal-water-weekly-textfield">
            <span className="usage-goal-water-weekly-text12">
              <span>enter your goal</span>
            </span>
          </div>
        </div>
        <Link to="/usage-goals" className="usage-goal-water-weekly-navlink4">
          <div className="usage-goal-water-weekly-button">
            <span className="usage-goal-water-weekly-text14">
              <span>save goal</span>
            </span>
          </div>
        </Link>
        <div className="usage-goal-water-weekly-toggle">
          <img
            alt="RectangleI465"
            src="/playground_assets/rectanglei465-hmz-200h.png"
            className="usage-goal-water-weekly-rectangle"
          />
          <img
            alt="EllipseI465"
            src="/playground_assets/ellipsei465-3jm-200w.png"
            className="usage-goal-water-weekly-ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default UsageGoalWaterWeekly
