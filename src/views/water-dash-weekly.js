import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './water-dash-weekly.css'

const WaterDashWeekly = (props) => {
  return (
    <div className="water-dash-weekly-container">
      <Helmet>
        <title>WaterDashWeekly - UseMetrs</title>
        <meta property="og:title" content="WaterDashWeekly - UseMetrs" />
      </Helmet>
      <div className="water-dash-weekly-water-dashboard-weekly">
        <span className="water-dash-weekly-text">
          <span>water usage</span>
        </span>
        <div className="water-dash-weekly-tabs">
          <Link to="/water-dash-monthly" className="water-dash-weekly-navlink">
            <div className="water-dash-weekly-monthly">
              <span className="water-dash-weekly-text02">
                <span>monthly</span>
              </span>
            </div>
          </Link>
          <div className="water-dash-weekly-weekly">
            <div className="water-dash-weekly-selected">
              <span className="water-dash-weekly-text04">
                <span>weekly</span>
              </span>
              <img
                alt="Line14193"
                src="/playground_assets/line14193-26th.svg"
                className="water-dash-weekly-line1"
              />
            </div>
          </div>
          <Link to="/water-dash-daily" className="water-dash-weekly-navlink1">
            <div className="water-dash-weekly-daily">
              <span className="water-dash-weekly-text06">
                <span>daily</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="water-dash-weekly-header">
          <span className="water-dash-weekly-text08">
            <span>water</span>
          </span>
          <Link to="/" className="water-dash-weekly-navlink2">
            <img
              alt="tablerarrowback4380"
              src="/playground_assets/tablerarrowback4380-abv.svg"
              className="water-dash-weekly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="water-dash-weekly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="water-dash-weekly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="water-dash-weekly-stuff">
          <div className="water-dash-weekly-graph">
            <div className="water-dash-weekly-maskgroup">
              <div className="water-dash-weekly-group1">
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-kw65.svg"
                  className="water-dash-weekly-vector"
                />
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-brw.svg"
                  className="water-dash-weekly-vector1"
                />
                <img
                  alt="Rectangle94577"
                  src="/playground_assets/rectangle94577-hque-500w.png"
                  className="water-dash-weekly-rectangle9"
                />
              </div>
            </div>
          </div>
          <div className="water-dash-weekly-thistime">
            <span className="water-dash-weekly-text10">
              <span>weekly: £6.30</span>
            </span>
            <div className="water-dash-weekly-arrows">
              <img
                alt="Vector24559"
                src="/playground_assets/vector24559-o3ch.svg"
                className="water-dash-weekly-vector2"
              />
            </div>
          </div>
          <div className="water-dash-weekly-current">
            <span className="water-dash-weekly-text12">
              <span>current: £0.14 p/h</span>
            </span>
          </div>
        </div>
        <div className="water-dash-weekly-recommendations">
          <img
            alt="rectangle3430"
            src="/playground_assets/rectangle3430-b0td.svg"
            className="water-dash-weekly-rectangle"
          />
          <div className="water-dash-weekly-recommendations1">
            <div className="water-dash-weekly-recommendation">
              <img
                alt="charmtick3430"
                src="/playground_assets/charmtick3430-klfg.svg"
                className="water-dash-weekly-charmtick"
              />
              <span className="water-dash-weekly-text14">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-weekly-recommendation1">
              <img
                alt="charmtick3431"
                src="/playground_assets/charmtick3431-gr1s.svg"
                className="water-dash-weekly-charmtick1"
              />
              <span className="water-dash-weekly-text16">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-weekly-recommendation2">
              <img
                alt="charmtick3431"
                src="/playground_assets/charmtick3431-dv9.svg"
                className="water-dash-weekly-charmtick2"
              />
              <span className="water-dash-weekly-text18">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-weekly-recommendation3">
              <img
                alt="charmtick3432"
                src="/playground_assets/charmtick3432-f91j.svg"
                className="water-dash-weekly-charmtick3"
              />
              <span className="water-dash-weekly-text20">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-weekly-recommendation4">
              <img
                alt="charmtick3432"
                src="/playground_assets/charmtick3432-2yyp.svg"
                className="water-dash-weekly-charmtick4"
              />
              <span className="water-dash-weekly-text22">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-weekly-recommendation5">
              <img
                alt="charmtick3433"
                src="/playground_assets/charmtick3433-3def.svg"
                className="water-dash-weekly-charmtick5"
              />
              <span className="water-dash-weekly-text24">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3433"
            src="/playground_assets/mdilightbulbon3433-gd16.svg"
            className="water-dash-weekly-mdilightbulbon"
          />
          <span className="water-dash-weekly-text26">
            <span>recommendations</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default WaterDashWeekly
