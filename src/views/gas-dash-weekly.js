import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './gas-dash-weekly.css'

const GasDashWeekly = (props) => {
  return (
    <div className="gas-dash-weekly-container">
      <Helmet>
        <title>GasDashWeekly - UseMetrs</title>
        <meta property="og:title" content="GasDashWeekly - UseMetrs" />
      </Helmet>
      <div className="gas-dash-weekly-gas-dashboard-weekly">
        <div className="gas-dash-weekly-recommendations">
          <img
            alt="rectangle4210"
            src="/playground_assets/rectangle4210-nt7a.svg"
            className="gas-dash-weekly-rectangle"
          />
          <div className="gas-dash-weekly-recommendations1">
            <div className="gas-dash-weekly-recommendation">
              <img
                alt="charmtick4215"
                src="/playground_assets/charmtick4215-apwy.svg"
                className="gas-dash-weekly-charmtick"
              />
              <span className="gas-dash-weekly-text">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-weekly-recommendation1">
              <img
                alt="charmtick4220"
                src="/playground_assets/charmtick4220-ulab.svg"
                className="gas-dash-weekly-charmtick1"
              />
              <span className="gas-dash-weekly-text02">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-weekly-recommendation2">
              <img
                alt="charmtick4225"
                src="/playground_assets/charmtick4225-hww.svg"
                className="gas-dash-weekly-charmtick2"
              />
              <span className="gas-dash-weekly-text04">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-weekly-recommendation3">
              <img
                alt="charmtick4230"
                src="/playground_assets/charmtick4230-79y.svg"
                className="gas-dash-weekly-charmtick3"
              />
              <span className="gas-dash-weekly-text06">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-weekly-recommendation4">
              <img
                alt="charmtick4235"
                src="/playground_assets/charmtick4235-00bn.svg"
                className="gas-dash-weekly-charmtick4"
              />
              <span className="gas-dash-weekly-text08">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-weekly-recommendation5">
              <img
                alt="charmtick4240"
                src="/playground_assets/charmtick4240-a5f.svg"
                className="gas-dash-weekly-charmtick5"
              />
              <span className="gas-dash-weekly-text10">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon4243"
            src="/playground_assets/mdilightbulbon4243-45fl.svg"
            className="gas-dash-weekly-mdilightbulbon"
          />
          <span className="gas-dash-weekly-text12">
            <span>recommendations</span>
          </span>
        </div>
        <div className="gas-dash-weekly-stuff">
          <div className="gas-dash-weekly-thistime">
            <span className="gas-dash-weekly-text14">
              <span>weekly: £17.30</span>
            </span>
            <div className="gas-dash-weekly-arrows">
              <img
                alt="Vector14251"
                src="/playground_assets/vector14251-rmh9.svg"
              />
            </div>
          </div>
          <div className="gas-dash-weekly-current">
            <span className="gas-dash-weekly-text16">
              <span>current: £0.14 p/h</span>
            </span>
          </div>
          <div className="gas-dash-weekly-graph">
            <div className="gas-dash-weekly-maskgroup">
              <div className="gas-dash-weekly-group1">
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-h4o.svg"
                  className="gas-dash-weekly-vector"
                />
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-ann.svg"
                  className="gas-dash-weekly-vector1 gas-dash-weekly-vector1"
                />
              </div>
              <img
                alt="Rectangle94271"
                src="/playground_assets/rectangle94271-82oq-500w.png"
                className="gas-dash-weekly-rectangle9"
              />
            </div>
          </div>
        </div>
        <span className="gas-dash-weekly-text18">
          <span>gas usage</span>
        </span>
        <div className="gas-dash-weekly-tabs">
          <Link to="/gas-dash-monthly" className="gas-dash-weekly-navlink">
            <div className="gas-dash-weekly-monthly">
              <span className="gas-dash-weekly-text20">
                <span>monthly</span>
              </span>
            </div>
          </Link>
          <div className="gas-dash-weekly-weekly">
            <div className="gas-dash-weekly-selected">
              <img
                alt="Line14283"
                src="/playground_assets/line14283-rpwq.svg"
                className="gas-dash-weekly-line1"
              />
              <span className="gas-dash-weekly-text22">
                <span>weekly</span>
              </span>
            </div>
          </div>
          <Link to="/gas-dash-daily" className="gas-dash-weekly-navlink1">
            <div className="gas-dash-weekly-daily">
              <span className="gas-dash-weekly-text24">
                <span>daily</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="gas-dash-weekly-header">
          <span className="gas-dash-weekly-text26">
            <span>
              <span>gas</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/" className="gas-dash-weekly-navlink2">
            <img
              alt="tablerarrowback4384"
              src="/playground_assets/tablerarrowback4384-wmr.svg"
              className="gas-dash-weekly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="gas-dash-weekly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="gas-dash-weekly-icbaselinehome"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GasDashWeekly
