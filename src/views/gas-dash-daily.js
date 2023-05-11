import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './gas-dash-daily.css'

const GasDashDaily = (props) => {
  return (
    <div className="gas-dash-daily-container">
      <Helmet>
        <title>GasDashDaily - UseMetrs</title>
        <meta property="og:title" content="GasDashDaily - UseMetrs" />
      </Helmet>
      <div className="gas-dash-daily-gas-dashboard-weekly">
        <div className="gas-dash-daily-recommendations">
          <img
            alt="rectangle4210"
            src="/playground_assets/rectangle4210-nt7a.svg"
            className="gas-dash-daily-rectangle"
          />
          <div className="gas-dash-daily-recommendations1">
            <div className="gas-dash-daily-recommendation">
              <img
                alt="charmtick4215"
                src="/playground_assets/charmtick4215-apwy.svg"
                className="gas-dash-daily-charmtick"
              />
              <span className="gas-dash-daily-text">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-daily-recommendation1">
              <img
                alt="charmtick4220"
                src="/playground_assets/charmtick4220-ulab.svg"
                className="gas-dash-daily-charmtick1"
              />
              <span className="gas-dash-daily-text02">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-daily-recommendation2">
              <img
                alt="charmtick4225"
                src="/playground_assets/charmtick4225-hww.svg"
                className="gas-dash-daily-charmtick2"
              />
              <span className="gas-dash-daily-text04">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-daily-recommendation3">
              <img
                alt="charmtick4230"
                src="/playground_assets/charmtick4230-79y.svg"
                className="gas-dash-daily-charmtick3"
              />
              <span className="gas-dash-daily-text06">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-daily-recommendation4">
              <img
                alt="charmtick4235"
                src="/playground_assets/charmtick4235-00bn.svg"
                className="gas-dash-daily-charmtick4"
              />
              <span className="gas-dash-daily-text08">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-daily-recommendation5">
              <img
                alt="charmtick4240"
                src="/playground_assets/charmtick4240-a5f.svg"
                className="gas-dash-daily-charmtick5"
              />
              <span className="gas-dash-daily-text10">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon4243"
            src="/playground_assets/mdilightbulbon4243-45fl.svg"
            className="gas-dash-daily-mdilightbulbon"
          />
          <span className="gas-dash-daily-text12">
            <span>recommendations</span>
          </span>
        </div>
        <div className="gas-dash-daily-stuff">
          <div className="gas-dash-daily-thistime">
            <span className="gas-dash-daily-text14">
              <span>daily:</span>
              <br></br>
              <span> £3.30</span>
            </span>
            <div className="gas-dash-daily-arrows">
              <img
                alt="Vector14251"
                src="/playground_assets/vector14251-rmh9.svg"
              />
            </div>
          </div>
          <div className="gas-dash-daily-current">
            <span className="gas-dash-daily-text18">
              <span>current: £0.14 p/h</span>
            </span>
          </div>
          <div className="gas-dash-daily-graph">
            <div className="gas-dash-daily-maskgroup">
              <div className="gas-dash-daily-group1">
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-h4o.svg"
                  className="gas-dash-daily-vector"
                />
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-ann.svg"
                  className="gas-dash-daily-vector1 gas-dash-daily-vector1"
                />
              </div>
              <img
                alt="Rectangle94271"
                src="/playground_assets/rectangle94271-82oq-500w.png"
                className="gas-dash-daily-rectangle9"
              />
            </div>
          </div>
        </div>
        <span className="gas-dash-daily-text20">
          <span>gas usage</span>
        </span>
        <div className="gas-dash-daily-tabs">
          <div className="gas-dash-daily-tabs1">
            <Link to="/gas-dash-monthly" className="gas-dash-daily-navlink">
              <div className="gas-dash-daily-monthly">
                <span className="gas-dash-daily-text22">
                  <span>monthly</span>
                </span>
              </div>
            </Link>
            <Link to="/gas-dash-weekly" className="gas-dash-daily-navlink1">
              <div className="gas-dash-daily-weekly">
                <span className="gas-dash-daily-text24">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <div className="gas-dash-daily-daily">
              <div className="gas-dash-daily-selected">
                <img
                  alt="Line14142"
                  src="/playground_assets/line14142-hoat.svg"
                  className="gas-dash-daily-line1"
                />
                <span className="gas-dash-daily-text26">
                  <span>daily</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="gas-dash-daily-header">
          <span className="gas-dash-daily-text28">
            <span>
              <span>gas</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/" className="gas-dash-daily-navlink2">
            <img
              alt="tablerarrowback4384"
              src="/playground_assets/tablerarrowback4384-wmr.svg"
              className="gas-dash-daily-tablerarrowback"
            />
          </Link>
          <Link to="/" className="gas-dash-daily-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="gas-dash-daily-icbaselinehome"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GasDashDaily
