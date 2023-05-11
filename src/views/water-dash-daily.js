import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './water-dash-daily.css'

const WaterDashDaily = (props) => {
  return (
    <div className="water-dash-daily-container">
      <Helmet>
        <title>WaterDashDaily - UseMetrs</title>
        <meta property="og:title" content="WaterDashDaily - UseMetrs" />
      </Helmet>
      <div className="water-dash-daily-water-dashboard-weekly">
        <span className="water-dash-daily-text">
          <span>water usage</span>
        </span>
        <div className="water-dash-daily-tabs">
          <div className="water-dash-daily-tabs1">
            <Link to="/water-dash-monthly" className="water-dash-daily-navlink">
              <div className="water-dash-daily-monthly">
                <span className="water-dash-daily-text02">
                  <span>monthly</span>
                </span>
              </div>
            </Link>
            <Link to="/water-dash-weekly" className="water-dash-daily-navlink1">
              <div className="water-dash-daily-weekly">
                <span className="water-dash-daily-text04">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <div className="water-dash-daily-daily">
              <div className="water-dash-daily-selected">
                <img
                  alt="Line14121"
                  src="/playground_assets/line14121-fu3q.svg"
                  className="water-dash-daily-line1"
                />
                <span className="water-dash-daily-text06">
                  <span>daily</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="water-dash-daily-header">
          <span className="water-dash-daily-text08">
            <span>water</span>
          </span>
          <Link to="/" className="water-dash-daily-navlink2">
            <img
              alt="tablerarrowback4380"
              src="/playground_assets/tablerarrowback4380-abv.svg"
              className="water-dash-daily-tablerarrowback"
            />
          </Link>
          <Link to="/" className="water-dash-daily-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="water-dash-daily-icbaselinehome"
            />
          </Link>
        </div>
        <div className="water-dash-daily-stuff">
          <div className="water-dash-daily-graph">
            <div className="water-dash-daily-maskgroup">
              <div className="water-dash-daily-group1">
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-kw65.svg"
                  className="water-dash-daily-vector"
                />
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-brw.svg"
                  className="water-dash-daily-vector1"
                />
                <img
                  alt="Rectangle94577"
                  src="/playground_assets/rectangle94577-hque-500w.png"
                  className="water-dash-daily-rectangle9"
                />
              </div>
            </div>
          </div>
          <div className="water-dash-daily-thistime">
            <span className="water-dash-daily-text10">
              <span>daily:</span>
              <br></br>
              <span> £1.30</span>
            </span>
            <div className="water-dash-daily-arrows">
              <img
                alt="Vector24559"
                src="/playground_assets/vector24559-o3ch.svg"
                className="water-dash-daily-vector2"
              />
            </div>
          </div>
          <div className="water-dash-daily-current">
            <span className="water-dash-daily-text14">
              <span>current: £0.14 p/h</span>
            </span>
          </div>
        </div>
        <div className="water-dash-daily-recommendations">
          <img
            alt="rectangle3430"
            src="/playground_assets/rectangle3430-b0td.svg"
            className="water-dash-daily-rectangle"
          />
          <div className="water-dash-daily-recommendations1">
            <div className="water-dash-daily-recommendation">
              <img
                alt="charmtick3430"
                src="/playground_assets/charmtick3430-klfg.svg"
                className="water-dash-daily-charmtick"
              />
              <span className="water-dash-daily-text16">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-daily-recommendation1">
              <img
                alt="charmtick3431"
                src="/playground_assets/charmtick3431-gr1s.svg"
                className="water-dash-daily-charmtick1"
              />
              <span className="water-dash-daily-text18">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-daily-recommendation2">
              <img
                alt="charmtick3431"
                src="/playground_assets/charmtick3431-dv9.svg"
                className="water-dash-daily-charmtick2"
              />
              <span className="water-dash-daily-text20">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-daily-recommendation3">
              <img
                alt="charmtick3432"
                src="/playground_assets/charmtick3432-f91j.svg"
                className="water-dash-daily-charmtick3"
              />
              <span className="water-dash-daily-text22">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-daily-recommendation4">
              <img
                alt="charmtick3432"
                src="/playground_assets/charmtick3432-2yyp.svg"
                className="water-dash-daily-charmtick4"
              />
              <span className="water-dash-daily-text24">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="water-dash-daily-recommendation5">
              <img
                alt="charmtick3433"
                src="/playground_assets/charmtick3433-3def.svg"
                className="water-dash-daily-charmtick5"
              />
              <span className="water-dash-daily-text26">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3433"
            src="/playground_assets/mdilightbulbon3433-gd16.svg"
            className="water-dash-daily-mdilightbulbon"
          />
          <span className="water-dash-daily-text28">
            <span>recommendations</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default WaterDashDaily
