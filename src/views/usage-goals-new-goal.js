import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './usage-goals-new-goal.css'

const UsageGoalsNewGoal = (props) => {
  return (
    <div className="usage-goals-new-goal-container">
      <Helmet>
        <title>UsageGoalsNewGoal - UseMetrs</title>
        <meta property="og:title" content="UsageGoalsNewGoal - UseMetrs" />
      </Helmet>
      <div className="usage-goals-new-goal-add-new-goal">
        <Link
          to="/usage-goal-energy-weekly"
          className="usage-goals-new-goal-navlink"
        >
          <div className="usage-goals-new-goal-energy">
            <img
              alt="energyrectangle4303"
              src="/playground_assets/energyrectangle4303-knxc-400h.png"
              className="usage-goals-new-goal-energyrectangle"
            />
            <span className="usage-goals-new-goal-text">
              <span>energy</span>
            </span>
          </div>
        </Link>
        <Link
          to="/usage-goal-water-weekly"
          className="usage-goals-new-goal-navlink1"
        >
          <div className="usage-goals-new-goal-water">
            <img
              alt="energyrectangle7124"
              src="/playground_assets/energyrectangle7124-xedj-400h.png"
              className="usage-goals-new-goal-energyrectangle1"
            />
            <span className="usage-goals-new-goal-text2">
              <span>water</span>
            </span>
          </div>
        </Link>
        <Link
          to="/usage-goal-gas-weekly"
          className="usage-goals-new-goal-navlink2"
        >
          <div className="usage-goals-new-goal-gas">
            <img
              alt="Rectangle44315"
              src="/playground_assets/rectangle44315-52n-400h.png"
              className="usage-goals-new-goal-rectangle4"
            />
            <span className="usage-goals-new-goal-text4">
              <span>gas</span>
            </span>
          </div>
        </Link>
        <div className="usage-goals-new-goal-header">
          <span className="usage-goals-new-goal-text6">
            <span>select option</span>
          </span>
          <Link to="/usage-goals" className="usage-goals-new-goal-navlink3">
            <img
              alt="tablerarrowback4404"
              src="/playground_assets/tablerarrowback4404-m6vm.svg"
              className="usage-goals-new-goal-tablerarrowback"
            />
          </Link>
          <Link to="/" className="usage-goals-new-goal-navlink4">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="usage-goals-new-goal-icbaselinehome"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UsageGoalsNewGoal
