import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './usage-goal-water-daily.css'

const UsageGoalWaterDaily = (props) => {
  return (
    <div className="usage-goal-water-daily-container">
      <Helmet>
        <title>UsageGoalWaterDaily - UseMetrs</title>
        <meta property="og:title" content="UsageGoalWaterDaily - UseMetrs" />
      </Helmet>
      <div className="usage-goal-water-daily-weekly-water-goal">
        <div className="usage-goal-water-daily-header">
          <span className="usage-goal-water-daily-text">
            <span>water goal</span>
          </span>
          <Link
            to="/usage-goals-new-goal"
            className="usage-goal-water-daily-navlink"
          >
            <img
              alt="tablerarrowback4761"
              src="/playground_assets/tablerarrowback4761-p7.svg"
              className="usage-goal-water-daily-tablerarrowback"
            />
          </Link>
          <Link to="/" className="usage-goal-water-daily-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="usage-goal-water-daily-icbaselinehome"
            />
          </Link>
        </div>
        <div className="usage-goal-water-daily-tabs">
          <div className="usage-goal-water-daily-tabs1">
            <Link
              to="/usage-goal-water-monthly"
              className="usage-goal-water-daily-navlink2"
            >
              <div className="usage-goal-water-daily-monthly">
                <span className="usage-goal-water-daily-text02">
                  <span>monthly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/usage-goal-water-weekly"
              className="usage-goal-water-daily-navlink3"
            >
              <div className="usage-goal-water-daily-weekly">
                <span className="usage-goal-water-daily-text04">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <div className="usage-goal-water-daily-daily">
              <div className="usage-goal-water-daily-selected">
                <img
                  alt="Line14809"
                  src="/playground_assets/line14809-0905.svg"
                  className="usage-goal-water-daily-line1"
                />
                <span className="usage-goal-water-daily-text06">
                  <span>daily</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="usage-goal-water-daily-text08">
          <span>enter goal</span>
        </span>
        <span className="usage-goal-water-daily-text10">
          <span>repeat goal?</span>
        </span>
        <div className="usage-goal-water-daily-input">
          <div className="usage-goal-water-daily-textfield">
            <span className="usage-goal-water-daily-text12">
              <span>enter your goal</span>
            </span>
          </div>
        </div>
        <Link to="/usage-goals" className="usage-goal-water-daily-navlink4">
          <div className="usage-goal-water-daily-button">
            <span className="usage-goal-water-daily-text14">
              <span>save goal</span>
            </span>
          </div>
        </Link>
        <div className="usage-goal-water-daily-toggle">
          <img
            alt="RectangleI465"
            src="/playground_assets/rectanglei465-hmz-200h.png"
            className="usage-goal-water-daily-rectangle"
          />
          <img
            alt="EllipseI465"
            src="/playground_assets/ellipsei465-3jm-200w.png"
            className="usage-goal-water-daily-ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default UsageGoalWaterDaily
