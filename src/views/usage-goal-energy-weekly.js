import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './usage-goal-energy-weekly.css'

const UsageGoalEnergyWeekly = (props) => {
  return (
    <div className="usage-goal-energy-weekly-container">
      <Helmet>
        <title>UsageGoalEnergyWeekly - UseMetrs</title>
        <meta property="og:title" content="UsageGoalEnergyWeekly - UseMetrs" />
      </Helmet>
      <div className="usage-goal-energy-weekly-weekly-energy-goal">
        <div className="usage-goal-energy-weekly-header">
          <span className="usage-goal-energy-weekly-text">
            <span>energy goal</span>
          </span>
          <Link
            to="/usage-goals-new-goal"
            className="usage-goal-energy-weekly-navlink"
          >
            <img
              alt="tablerarrowback4502"
              src="/playground_assets/tablerarrowback4502-8d5n.svg"
              className="usage-goal-energy-weekly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="usage-goal-energy-weekly-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="usage-goal-energy-weekly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="usage-goal-energy-weekly-tabs">
          <Link
            to="/usage-goal-energy-monthly"
            className="usage-goal-energy-weekly-navlink2"
          >
            <div className="usage-goal-energy-weekly-monthly">
              <span className="usage-goal-energy-weekly-text02">
                <span>monthly</span>
              </span>
            </div>
          </Link>
          <div className="usage-goal-energy-weekly-weekly">
            <div className="usage-goal-energy-weekly-selected">
              <img
                alt="Line14530"
                src="/playground_assets/line14530-ukvv.svg"
                className="usage-goal-energy-weekly-line1"
              />
              <span className="usage-goal-energy-weekly-text04">
                <span>weekly</span>
              </span>
            </div>
          </div>
          <Link
            to="/usage-goal-energy-daily"
            className="usage-goal-energy-weekly-navlink3"
          >
            <div className="usage-goal-energy-weekly-daily">
              <span className="usage-goal-energy-weekly-text06">
                <span>daily</span>
              </span>
            </div>
          </Link>
        </div>
        <span className="usage-goal-energy-weekly-text08">
          <span>enter goal</span>
        </span>
        <span className="usage-goal-energy-weekly-text10">
          <span>repeat goal?</span>
        </span>
        <div className="usage-goal-energy-weekly-input">
          <div className="usage-goal-energy-weekly-textfield">
            <span className="usage-goal-energy-weekly-text12">
              <span>enter your goal</span>
            </span>
          </div>
        </div>
        <div className="usage-goal-energy-weekly-toggle">
          <img
            alt="RectangleI465"
            src="/playground_assets/rectanglei465-hmz-200h.png"
            className="usage-goal-energy-weekly-rectangle"
          />
          <img
            alt="EllipseI465"
            src="/playground_assets/ellipsei465-3jm-200w.png"
            className="usage-goal-energy-weekly-ellipse"
          />
        </div>
        <Link to="/usage-goals" className="usage-goal-energy-weekly-navlink4">
          <div className="usage-goal-energy-weekly-button">
            <span className="usage-goal-energy-weekly-text14">
              <span>save goal</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UsageGoalEnergyWeekly
