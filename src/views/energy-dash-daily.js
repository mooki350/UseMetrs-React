import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './energy-dash-daily.css'

const EnergyDashDaily = (props) => {
  return (
    <div className="energy-dash-daily-container">
      <Helmet>
        <title>EnergyDashDaily - UseMetrs</title>
        <meta property="og:title" content="EnergyDashDaily - UseMetrs" />
      </Helmet>
      <div className="energy-dash-daily-energy-dashboard-weekly">
        <div className="energy-dash-daily-stuff">
          <div className="energy-dash-daily-thistime">
            <span className="energy-dash-daily-text">
              <span>daily:</span>
              <br></br>
              <span>£3.32</span>
              <br></br>
            </span>
            <div className="energy-dash-daily-arrows">
              <img
                alt="Vector14608"
                src="/playground_assets/vector14608-5xzn.svg"
              />
            </div>
          </div>
          <div className="energy-dash-daily-current">
            <span className="energy-dash-daily-text05">
              <span>current: £0.14 p/h</span>
            </span>
          </div>
          <div className="energy-dash-daily-graph">
            <div className="energy-dash-daily-maskgroup">
              <div className="energy-dash-daily-group1">
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-a6wo.svg"
                  className="energy-dash-daily-vector"
                />
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-p7y8.svg"
                  className="energy-dash-daily-vector1 energy-dash-daily-vector1"
                />
              </div>
              <img
                alt="Rectangle96618"
                src="/playground_assets/rectangle96618-1zei.svg"
                className="energy-dash-daily-rectangle9"
              />
            </div>
          </div>
        </div>
        <span className="energy-dash-daily-text07">
          <span>energy usage</span>
        </span>
        <div className="energy-dash-daily-tabs">
          <div className="energy-dash-daily-tabs1">
            <Link
              to="/energy-dash-monthly"
              className="energy-dash-daily-navlink"
            >
              <div className="energy-dash-daily-monthly">
                <span className="energy-dash-daily-text09">
                  <span>monthly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/energy-dash-weekly"
              className="energy-dash-daily-navlink1"
            >
              <div className="energy-dash-daily-weekly">
                <span className="energy-dash-daily-text11">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <div className="energy-dash-daily-daily">
              <div className="energy-dash-daily-selected">
                <img
                  alt="Line14106"
                  src="/playground_assets/line14106-869.svg"
                  className="energy-dash-daily-line1"
                />
                <span className="energy-dash-daily-text13">
                  <span>daily</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="energy-dash-daily-header">
          <span className="energy-dash-daily-text15">
            <span>
              <span>energy</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/" className="energy-dash-daily-navlink2">
            <img
              alt="tablerarrowback4116"
              src="/playground_assets/tablerarrowback4116-o7f.svg"
              className="energy-dash-daily-tablerarrowback"
            />
          </Link>
          <Link to="/" className="energy-dash-daily-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="energy-dash-daily-icbaselinehome"
            />
          </Link>
        </div>
        <div className="energy-dash-daily-recommendations">
          <img
            alt="rectangle3423"
            src="/playground_assets/rectangle3423-u8t.svg"
            className="energy-dash-daily-rectangle"
          />
          <div className="energy-dash-daily-recommendations1">
            <div className="energy-dash-daily-recommendation">
              <img
                alt="charmtick3423"
                src="/playground_assets/charmtick3423-a64b.svg"
                className="energy-dash-daily-charmtick"
              />
              <span className="energy-dash-daily-text20">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-daily-recommendation1">
              <img
                alt="charmtick3424"
                src="/playground_assets/charmtick3424-5heg.svg"
                className="energy-dash-daily-charmtick1"
              />
              <span className="energy-dash-daily-text22">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-daily-recommendation2">
              <img
                alt="charmtick3424"
                src="/playground_assets/charmtick3424-5no.svg"
                className="energy-dash-daily-charmtick2"
              />
              <span className="energy-dash-daily-text24">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-daily-recommendation3">
              <img
                alt="charmtick3425"
                src="/playground_assets/charmtick3425-rfeb.svg"
                className="energy-dash-daily-charmtick3"
              />
              <span className="energy-dash-daily-text26">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-daily-recommendation4">
              <img
                alt="charmtick3425"
                src="/playground_assets/charmtick3425-ngtg.svg"
                className="energy-dash-daily-charmtick4"
              />
              <span className="energy-dash-daily-text28">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-daily-recommendation5">
              <img
                alt="charmtick3425"
                src="/playground_assets/charmtick3425-xwy.svg"
                className="energy-dash-daily-charmtick5"
              />
              <span className="energy-dash-daily-text30">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3426"
            src="/playground_assets/mdilightbulbon3426-maw.svg"
            className="energy-dash-daily-mdilightbulbon"
          />
          <span className="energy-dash-daily-text32">
            <span>recommendations</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default EnergyDashDaily
