import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './usage-goals.css'

const UsageGoals = (props) => {
  return (
    <div className="usage-goals-container">
      <Helmet>
        <title>UsageGoals - UseMetrs</title>
        <meta property="og:title" content="UsageGoals - UseMetrs" />
      </Helmet>
      <div className="usage-goals-usage-goals">
        <div className="usage-goals-goals">
          <div className="usage-goals-agoal">
            <span className="usage-goals-text">
              <span>daily energy goal</span>
            </span>
            <span className="usage-goals-text02">
              <span>goal: £20.00</span>
            </span>
            <span className="usage-goals-text04">
              <span>one-off</span>
            </span>
            <img
              alt="solarmenudotsbold4411"
              src="/playground_assets/solarmenudotsbold4411-9is.svg"
              className="usage-goals-solarmenudotsbold"
            />
          </div>
          <div className="usage-goals-agoal1">
            <span className="usage-goals-text06">
              <span>weekly energy goal</span>
            </span>
            <span className="usage-goals-text08">
              <span>goal: £100.00</span>
            </span>
            <span className="usage-goals-text10">
              <span>repeating</span>
            </span>
            <img
              alt="solarmenudotsbold4418"
              src="/playground_assets/solarmenudotsbold4418-u4r.svg"
              className="usage-goals-solarmenudotsbold1"
            />
          </div>
          <div className="usage-goals-agoal2">
            <span className="usage-goals-text12">
              <span>monthly gas goal</span>
            </span>
            <span className="usage-goals-text14">
              <span>goal: £20.00</span>
            </span>
            <span className="usage-goals-text16">
              <span>one-off</span>
            </span>
            <img
              alt="solarmenudotsbold4425"
              src="/playground_assets/solarmenudotsbold4425-6r2m.svg"
              className="usage-goals-solarmenudotsbold2"
            />
          </div>
          <div className="usage-goals-agoal3">
            <span className="usage-goals-text18">
              <span>weekly water goal</span>
            </span>
            <span className="usage-goals-text20">
              <span>goal: £20.00</span>
            </span>
            <span className="usage-goals-text22">
              <span>repeating</span>
            </span>
            <img
              alt="solarmenudotsbold4432"
              src="/playground_assets/solarmenudotsbold4432-160c.svg"
              className="usage-goals-solarmenudotsbold3"
            />
          </div>
          <div className="usage-goals-agoal4">
            <span className="usage-goals-text24">
              <span>weekly gas goal</span>
            </span>
            <span className="usage-goals-text26">
              <span>goal: £20.00</span>
            </span>
            <span className="usage-goals-text28">
              <span>repeating</span>
            </span>
            <img
              alt="solarmenudotsbold4446"
              src="/playground_assets/solarmenudotsbold4446-3dp.svg"
              className="usage-goals-solarmenudotsbold4"
            />
          </div>
          <div className="usage-goals-agoal5">
            <span className="usage-goals-text30">
              <span>daily water goal</span>
            </span>
            <span className="usage-goals-text32">
              <span>goal: £20.00</span>
            </span>
            <span className="usage-goals-text34">
              <span>repeating</span>
            </span>
            <img
              alt="solarmenudotsbold4446"
              src="/playground_assets/solarmenudotsbold4446-3dp.svg"
              className="usage-goals-solarmenudotsbold5"
            />
          </div>
        </div>
        <div className="usage-goals-header">
          <span className="usage-goals-text36">
            <span>your goals</span>
          </span>
          <Link to="/" className="usage-goals-navlink">
            <img
              alt="tablerarrowback4400"
              src="/playground_assets/tablerarrowback4400-7zhj.svg"
              className="usage-goals-tablerarrowback"
            />
          </Link>
          <Link to="/" className="usage-goals-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="usage-goals-icbaselinehome"
            />
          </Link>
        </div>
        <Link to="/usage-goals-new-goal" className="usage-goals-navlink2">
          <div className="usage-goals-button">
            <span className="usage-goals-text38">
              <span>add new goal</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UsageGoals
