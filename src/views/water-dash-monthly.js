import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './water-dash-monthly.css'

const WaterDashMonthly = (props) => {
  return (
    <div className="water-dash-monthly-container">
      <Helmet>
        <title>WaterDashMonthly - UseMetrs</title>
        <meta property="og:title" content="WaterDashMonthly - UseMetrs" />
      </Helmet>
      <div className="water-dash-monthly-water-dashboard-weekly">
        <span className="water-dash-monthly-text">
          <span>water usage</span>
        </span>
        <div className="water-dash-monthly-tabs">
          <div className="water-dash-monthly-tabs1">
            <div className="water-dash-monthly-monthly">
              <div className="water-dash-monthly-selected">
                <img
                  alt="Line14129"
                  src="/playground_assets/line14129-8zxc3.svg"
                  className="water-dash-monthly-line1"
                />
                <span className="water-dash-monthly-text02">
                  <span>monthly</span>
                </span>
              </div>
            </div>
            <Link
              to="/water-dash-weekly"
              className="water-dash-monthly-navlink"
            >
              <div className="water-dash-monthly-weekly">
                <span className="water-dash-monthly-text04">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/water-dash-daily"
              className="water-dash-monthly-navlink1"
            >
              <div className="water-dash-monthly-daily">
                <span className="water-dash-monthly-text06">
                  <span>daily</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="water-dash-monthly-header">
          <span className="water-dash-monthly-text08">
            <span>water</span>
          </span>
          <Link to="/" className="water-dash-monthly-navlink2">
            <img
              alt="tablerarrowback4380"
              src="/playground_assets/tablerarrowback4380-abv.svg"
              className="water-dash-monthly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="water-dash-monthly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="water-dash-monthly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="water-dash-monthly-stuff">
          <div className="water-dash-monthly-graph">
            <div className="water-dash-monthly-maskgroup">
              <div className="water-dash-monthly-group1">
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-kw65.svg"
                  className="water-dash-monthly-vector"
                />
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-brw.svg"
                  className="water-dash-monthly-vector1"
                />
                <img
                  alt="Rectangle94577"
                  src="/playground_assets/rectangle94577-hque-500w.png"
                  className="water-dash-monthly-rectangle9"
                />
              </div>
            </div>
          </div>
          <div className="water-dash-monthly-thistime">
            <span className="water-dash-monthly-text10">monthly: £34.30</span>
            <div className="water-dash-monthly-arrows">
              <img
                alt="Vector24559"
                src="/playground_assets/vector24559-o3ch.svg"
                className="water-dash-monthly-vector2"
              />
            </div>
          </div>
          <div className="water-dash-monthly-current">
            <span className="water-dash-monthly-text11">
              <span>current: £0.14 p/h</span>
            </span>
          </div>
        </div>
        <div className="water-dash-monthly-recommendations">
          <img
            alt="rectangle3430"
            src="/playground_assets/rectangle3430-b0td.svg"
            className="water-dash-monthly-rectangle"
          />
          <div className="water-dash-monthly-recommendations1">
            <div className="water-dash-monthly-recommendation">
              <img
                alt="charmtick3430"
                src="/playground_assets/charmtick3430-klfg.svg"
                className="water-dash-monthly-charmtick"
              />
              <span className="water-dash-monthly-text13">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-monthly-recommendation1">
              <img
                alt="charmtick3431"
                src="/playground_assets/charmtick3431-gr1s.svg"
                className="water-dash-monthly-charmtick1"
              />
              <span className="water-dash-monthly-text15">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-monthly-recommendation2">
              <img
                alt="charmtick3431"
                src="/playground_assets/charmtick3431-dv9.svg"
                className="water-dash-monthly-charmtick2"
              />
              <span className="water-dash-monthly-text17">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-monthly-recommendation3">
              <img
                alt="charmtick3432"
                src="/playground_assets/charmtick3432-f91j.svg"
                className="water-dash-monthly-charmtick3"
              />
              <span className="water-dash-monthly-text19">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-monthly-recommendation4">
              <img
                alt="charmtick3432"
                src="/playground_assets/charmtick3432-2yyp.svg"
                className="water-dash-monthly-charmtick4"
              />
              <span className="water-dash-monthly-text21">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-monthly-recommendation5">
              <img
                alt="charmtick3433"
                src="/playground_assets/charmtick3433-3def.svg"
                className="water-dash-monthly-charmtick5"
              />
              <span className="water-dash-monthly-text23">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3433"
            src="/playground_assets/mdilightbulbon3433-gd16.svg"
            className="water-dash-monthly-mdilightbulbon"
          />
          <span className="water-dash-monthly-text25">
            <span>recommendations</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default WaterDashMonthly
