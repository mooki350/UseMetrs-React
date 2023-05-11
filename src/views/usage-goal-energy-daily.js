import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './usage-goal-energy-daily.css'

const UsageGoalEnergyDaily = (props) => {
  return (
    <div className="usage-goal-energy-daily-container">
      <Helmet>
        <title>UsageGoalEnergyDaily - UseMetrs</title>
        <meta property="og:title" content="UsageGoalEnergyDaily - UseMetrs" />
      </Helmet>
      <div className="usage-goal-energy-daily-weekly-energy-goal">
        <div className="usage-goal-energy-daily-header">
          <span className="usage-goal-energy-daily-text">
            <span>energy goal</span>
          </span>
          <Link
            to="/usage-goals-new-goal"
            className="usage-goal-energy-daily-navlink"
          >
            <img
              alt="tablerarrowback4502"
              src="/playground_assets/tablerarrowback4502-8d5n.svg"
              className="usage-goal-energy-daily-tablerarrowback"
            />
          </Link>
          <Link to="/" className="usage-goal-energy-daily-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="usage-goal-energy-daily-icbaselinehome"
            />
          </Link>
        </div>
        <div className="usage-goal-energy-daily-tabs">
          <div className="usage-goal-energy-daily-tabs1">
            <Link
              to="/usage-goal-energy-monthly"
              className="usage-goal-energy-daily-navlink2"
            >
              <div className="usage-goal-energy-daily-monthly">
                <span className="usage-goal-energy-daily-text02">
                  <span>monthly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/usage-goal-energy-weekly"
              className="usage-goal-energy-daily-navlink3"
            >
              <div className="usage-goal-energy-daily-weekly">
                <span className="usage-goal-energy-daily-text04">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <div className="usage-goal-energy-daily-daily">
              <div className="usage-goal-energy-daily-selected">
                <img
                  alt="Line14688"
                  src="/playground_assets/line14688-9cii.svg"
                  className="usage-goal-energy-daily-line1"
                />
                <span className="usage-goal-energy-daily-text06">
                  <span>daily</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="usage-goal-energy-daily-text08">
          <span>enter goal</span>
        </span>
        <span className="usage-goal-energy-daily-text10">
          <span>repeat goal?</span>
        </span>
        <div className="usage-goal-energy-daily-input">
          <div className="usage-goal-energy-daily-textfield">
            <span className="usage-goal-energy-daily-text12">
              <span>enter your goal</span>
            </span>
          </div>
        </div>
        <div className="usage-goal-energy-daily-toggle">
          <img
            alt="RectangleI465"
            src="/playground_assets/rectanglei465-hmz-200h.png"
            className="usage-goal-energy-daily-rectangle"
          />
          <img
            alt="EllipseI465"
            src="/playground_assets/ellipsei465-3jm-200w.png"
            className="usage-goal-energy-daily-ellipse"
          />
        </div>
        <Link to="/usage-goals" className="usage-goal-energy-daily-navlink4">
          <div className="usage-goal-energy-daily-button">
            <span className="usage-goal-energy-daily-text14">
              <span>save goal</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UsageGoalEnergyDaily
