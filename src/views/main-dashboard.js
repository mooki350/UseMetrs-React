import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './main-dashboard.css'

const MainDashboard = (props) => {
  return (
    <div className="main-dashboard-container">
      <Helmet>
        <title>UseMetrs</title>
        <meta property="og:title" content="UseMetrs" />
      </Helmet>
      <div className="main-dashboard-dashboard">
        <div className="main-dashboard-frame4">
          <div className="main-dashboard-header">
            <span className="main-dashboard-text">
              <span>dashboard</span>
            </span>
          </div>
        </div>
        <div className="main-dashboard-frame9">
          <div className="main-dashboard-frame1">
            <Link to="/energy-dash-weekly" className="main-dashboard-navlink">
              <div className="main-dashboard-energy">
                <img
                  alt="energyrectangle7124"
                  src="/playground_assets/energyrectangle7124-yjrl.svg"
                  className="main-dashboard-energyrectangle"
                />
                <span className="main-dashboard-text02">
                  <span>energy</span>
                </span>
                <div className="main-dashboard-arrows">
                  <img
                    alt="Vector17124"
                    src="/playground_assets/vector17124-4rz.svg"
                    className="main-dashboard-vector1"
                  />
                </div>
                <span className="main-dashboard-text04">
                  <span>+14%</span>
                </span>
                <span className="main-dashboard-text06">
                  <span>this week</span>
                </span>
              </div>
            </Link>
          </div>
          <div className="main-dashboard-frame2">
            <Link to="/water-dash-weekly" className="main-dashboard-navlink1">
              <div className="main-dashboard-water">
                <img
                  alt="waterrectangle7124"
                  src="/playground_assets/waterrectangle7124-ep9.svg"
                  className="main-dashboard-waterrectangle"
                />
                <span className="main-dashboard-text08">
                  <span>water</span>
                </span>
                <div className="main-dashboard-arrows1">
                  <img
                    alt="Vector27124"
                    src="/playground_assets/vector27124-507e.svg"
                    className="main-dashboard-vector2"
                  />
                </div>
                <span className="main-dashboard-text10">
                  <span>-6%</span>
                </span>
                <span className="main-dashboard-text12">
                  <span>this week</span>
                </span>
              </div>
            </Link>
          </div>
          <div className="main-dashboard-frame3">
            <Link to="/gas-dash-weekly" className="main-dashboard-navlink2">
              <div className="main-dashboard-gas">
                <img
                  alt="Rectangle47124"
                  src="/playground_assets/rectangle47124-fnj.svg"
                  className="main-dashboard-rectangle4"
                />
                <span className="main-dashboard-text14">
                  <span>gas</span>
                </span>
                <div className="main-dashboard-arrows2">
                  <img
                    alt="Vector17124"
                    src="/playground_assets/vector17124-yu8td.svg"
                    className="main-dashboard-vector11"
                  />
                </div>
                <span className="main-dashboard-text16">
                  <span>+14%</span>
                </span>
                <span className="main-dashboard-text18">
                  <span>this week</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="main-dashboard-frame11">
          <div className="main-dashboard-frame7">
            <Link to="/devices" className="main-dashboard-navlink3">
              <div className="main-dashboard-devices">
                <img
                  alt="Rectangle77124"
                  src="/playground_assets/rectangle77124-6p16.svg"
                  className="main-dashboard-rectangle7"
                />
                <span className="main-dashboard-text20">
                  <span>devices</span>
                </span>
              </div>
            </Link>
          </div>
          <div className="main-dashboard-frame8">
            <Link to="/settings" className="main-dashboard-navlink4">
              <div className="main-dashboard-settings">
                <img
                  alt="Rectangle87124"
                  src="/playground_assets/rectangle87124-y4hd.svg"
                  className="main-dashboard-rectangle8"
                />
                <span className="main-dashboard-text22">
                  <span>settings</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="main-dashboard-frame10">
          <div className="main-dashboard-frame5">
            <Link to="/usage-goals" className="main-dashboard-navlink5">
              <div className="main-dashboard-usagegoals">
                <img
                  alt="Rectangle57124"
                  src="/playground_assets/rectangle57124-jnw9.svg"
                  className="main-dashboard-rectangle5"
                />
                <span className="main-dashboard-text24">
                  <span>
                    <span>usage</span>
                    <br></br>
                    <span>goals</span>
                  </span>
                </span>
              </div>
            </Link>
          </div>
          <div className="main-dashboard-frame6">
            <Link to="/compare-usage" className="main-dashboard-navlink6">
              <div className="main-dashboard-compareusage">
                <img
                  alt="Rectangle67124"
                  src="/playground_assets/rectangle67124-og0e.svg"
                  className="main-dashboard-rectangle6"
                />
                <span className="main-dashboard-text29">
                  <span>
                    <span>compare</span>
                    <br></br>
                    <span>usage</span>
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainDashboard
