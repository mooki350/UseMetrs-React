import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './usage-goal-energy-monthly.css'

const UsageGoalEnergyMonthly = (props) => {
  return (
    <div className="usage-goal-energy-monthly-container">
      <Helmet>
        <title>UsageGoalEnergyMonthly - UseMetrs</title>
        <meta property="og:title" content="UsageGoalEnergyMonthly - UseMetrs" />
      </Helmet>
      <div className="usage-goal-energy-monthly-weekly-energy-goal">
        <div className="usage-goal-energy-monthly-header">
          <span className="usage-goal-energy-monthly-text">
            <span>energy goal</span>
          </span>
          <Link
            to="/usage-goals-new-goal"
            className="usage-goal-energy-monthly-navlink"
          >
            <img
              alt="tablerarrowback4502"
              src="/playground_assets/tablerarrowback4502-8d5n.svg"
              className="usage-goal-energy-monthly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="usage-goal-energy-monthly-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="usage-goal-energy-monthly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="usage-goal-energy-monthly-tabs">
          <div className="usage-goal-energy-monthly-tabs1">
            <div className="usage-goal-energy-monthly-monthly">
              <div className="usage-goal-energy-monthly-selected">
                <img
                  alt="Line14722"
                  src="/playground_assets/line14722-lzf9.svg"
                  className="usage-goal-energy-monthly-line1"
                />
                <span className="usage-goal-energy-monthly-text02">
                  <span>monthly</span>
                </span>
              </div>
            </div>
            <Link
              to="/usage-goal-energy-weekly"
              className="usage-goal-energy-monthly-navlink2"
            >
              <div className="usage-goal-energy-monthly-weekly">
                <span className="usage-goal-energy-monthly-text04">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/usage-goal-energy-daily"
              className="usage-goal-energy-monthly-navlink3"
            >
              <div className="usage-goal-energy-monthly-daily">
                <span className="usage-goal-energy-monthly-text06">
                  <span>daily</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <span className="usage-goal-energy-monthly-text08">
          <span>enter goal</span>
        </span>
        <span className="usage-goal-energy-monthly-text10">
          <span>repeat goal?</span>
        </span>
        <div className="usage-goal-energy-monthly-input">
          <div className="usage-goal-energy-monthly-textfield">
            <span className="usage-goal-energy-monthly-text12">
              <span>enter your goal</span>
            </span>
          </div>
        </div>
        <div className="usage-goal-energy-monthly-toggle">
          <img
            alt="RectangleI465"
            src="/playground_assets/rectanglei465-hmz-200h.png"
            className="usage-goal-energy-monthly-rectangle"
          />
          <img
            alt="EllipseI465"
            src="/playground_assets/ellipsei465-3jm-200w.png"
            className="usage-goal-energy-monthly-ellipse"
          />
        </div>
        <Link to="/usage-goals" className="usage-goal-energy-monthly-navlink4">
          <div className="usage-goal-energy-monthly-button">
            <span className="usage-goal-energy-monthly-text14">
              <span>save goal</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UsageGoalEnergyMonthly
