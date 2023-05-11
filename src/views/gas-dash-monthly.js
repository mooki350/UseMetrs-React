import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './gas-dash-monthly.css'

const GasDashMonthly = (props) => {
  return (
    <div className="gas-dash-monthly-container">
      <Helmet>
        <title>GasDashMonthly - UseMetrs</title>
        <meta property="og:title" content="GasDashMonthly - UseMetrs" />
      </Helmet>
      <div className="gas-dash-monthly-gas-dashboard-weekly">
        <div className="gas-dash-monthly-stuff">
          <div className="gas-dash-monthly-thistime">
            <span className="gas-dash-monthly-text">monthly: £42.69</span>
            <div className="gas-dash-monthly-arrows">
              <img
                alt="Vector14251"
                src="/playground_assets/vector14251-rmh9.svg"
              />
            </div>
          </div>
          <div className="gas-dash-monthly-current">
            <span className="gas-dash-monthly-text01">
              <span>current: £0.14 p/h</span>
            </span>
          </div>
          <div className="gas-dash-monthly-graph">
            <div className="gas-dash-monthly-maskgroup">
              <div className="gas-dash-monthly-group1">
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-h4o.svg"
                  className="gas-dash-monthly-vector"
                />
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-ann.svg"
                  className="gas-dash-monthly-vector1 gas-dash-monthly-vector1"
                />
              </div>
              <img
                alt="Rectangle94271"
                src="/playground_assets/rectangle94271-82oq-500w.png"
                className="gas-dash-monthly-rectangle9"
              />
            </div>
          </div>
        </div>
        <span className="gas-dash-monthly-text03">
          <span>gas usage</span>
        </span>
        <div className="gas-dash-monthly-tabs">
          <div className="gas-dash-monthly-tabs1">
            <div className="gas-dash-monthly-monthly">
              <div className="gas-dash-monthly-selected">
                <img
                  alt="Line14150"
                  src="/playground_assets/line14150-pv4g.svg"
                  className="gas-dash-monthly-line1"
                />
                <span className="gas-dash-monthly-text05">
                  <span>monthly</span>
                </span>
              </div>
            </div>
            <Link to="/gas-dash-weekly" className="gas-dash-monthly-navlink">
              <div className="gas-dash-monthly-weekly">
                <span className="gas-dash-monthly-text07">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <Link to="/gas-dash-daily" className="gas-dash-monthly-navlink1">
              <div className="gas-dash-monthly-daily">
                <span className="gas-dash-monthly-text09">
                  <span>daily</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="gas-dash-monthly-header">
          <span className="gas-dash-monthly-text11">
            <span>
              <span>gas</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/" className="gas-dash-monthly-navlink2">
            <img
              alt="tablerarrowback4384"
              src="/playground_assets/tablerarrowback4384-wmr.svg"
              className="gas-dash-monthly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="gas-dash-monthly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="gas-dash-monthly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="gas-dash-monthly-recommendations">
          <img
            alt="rectangle4210"
            src="/playground_assets/rectangle4210-nt7a.svg"
            className="gas-dash-monthly-rectangle"
          />
          <div className="gas-dash-monthly-recommendations1">
            <div className="gas-dash-monthly-recommendation">
              <img
                alt="charmtick4215"
                src="/playground_assets/charmtick4215-apwy.svg"
                className="gas-dash-monthly-charmtick"
              />
              <span className="gas-dash-monthly-text16">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-monthly-recommendation1">
              <img
                alt="charmtick4220"
                src="/playground_assets/charmtick4220-ulab.svg"
                className="gas-dash-monthly-charmtick1"
              />
              <span className="gas-dash-monthly-text18">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-monthly-recommendation2">
              <img
                alt="charmtick4225"
                src="/playground_assets/charmtick4225-hww.svg"
                className="gas-dash-monthly-charmtick2"
              />
              <span className="gas-dash-monthly-text20">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-monthly-recommendation3">
              <img
                alt="charmtick4230"
                src="/playground_assets/charmtick4230-79y.svg"
                className="gas-dash-monthly-charmtick3"
              />
              <span className="gas-dash-monthly-text22">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-monthly-recommendation4">
              <img
                alt="charmtick4235"
                src="/playground_assets/charmtick4235-00bn.svg"
                className="gas-dash-monthly-charmtick4"
              />
              <span className="gas-dash-monthly-text24">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="gas-dash-monthly-recommendation5">
              <img
                alt="charmtick4240"
                src="/playground_assets/charmtick4240-a5f.svg"
                className="gas-dash-monthly-charmtick5"
              />
              <span className="gas-dash-monthly-text26">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon4243"
            src="/playground_assets/mdilightbulbon4243-45fl.svg"
            className="gas-dash-monthly-mdilightbulbon"
          />
          <span className="gas-dash-monthly-text28">
            <span>recommendations</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default GasDashMonthly
