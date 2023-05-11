import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './energy-dash-monthly.css'

const EnergyDashMonthly = (props) => {
  return (
    <div className="energy-dash-monthly-container">
      <Helmet>
        <title>EnergyDashMonthly - UseMetrs</title>
        <meta property="og:title" content="EnergyDashMonthly - UseMetrs" />
      </Helmet>
      <div className="energy-dash-monthly-energy-dashboard-weekly">
        <div className="energy-dash-monthly-stuff">
          <div className="energy-dash-monthly-thistime">
            <span className="energy-dash-monthly-text">
              <span>monthly:</span>
              <br></br>
              <span>£42.18</span>
              <br></br>
            </span>
            <div className="energy-dash-monthly-arrows">
              <img
                alt="Vector14608"
                src="/playground_assets/vector14608-5xzn.svg"
              />
            </div>
          </div>
          <div className="energy-dash-monthly-current">
            <span className="energy-dash-monthly-text05">
              <span>current: £0.14 p/h</span>
            </span>
          </div>
          <div className="energy-dash-monthly-graph">
            <div className="energy-dash-monthly-maskgroup">
              <div className="energy-dash-monthly-group1">
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-a6wo.svg"
                  className="energy-dash-monthly-vector"
                />
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-p7y8.svg"
                  className="energy-dash-monthly-vector1 energy-dash-monthly-vector1"
                />
              </div>
              <img
                alt="Rectangle96618"
                src="/playground_assets/rectangle96618-1zei.svg"
                className="energy-dash-monthly-rectangle9"
              />
            </div>
          </div>
        </div>
        <span className="energy-dash-monthly-text07">
          <span>energy usage</span>
        </span>
        <div className="energy-dash-monthly-tabs">
          <div className="energy-dash-monthly-tabs1">
            <div className="energy-dash-monthly-monthly">
              <div className="energy-dash-monthly-selected">
                <img
                  alt="Line14114"
                  src="/playground_assets/line14114-wwl9.svg"
                  className="energy-dash-monthly-line1"
                />
                <span className="energy-dash-monthly-text09">
                  <span>monthly</span>
                </span>
              </div>
            </div>
            <Link
              to="/energy-dash-weekly"
              className="energy-dash-monthly-navlink"
            >
              <div className="energy-dash-monthly-weekly">
                <span className="energy-dash-monthly-text11">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/energy-dash-daily"
              className="energy-dash-monthly-navlink1"
            >
              <div className="energy-dash-monthly-daily">
                <span className="energy-dash-monthly-text13">
                  <span>daily</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="energy-dash-monthly-header">
          <span className="energy-dash-monthly-text15">
            <span>
              <span>energy</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/" className="energy-dash-monthly-navlink2">
            <img
              alt="tablerarrowback4116"
              src="/playground_assets/tablerarrowback4116-o7f.svg"
              className="energy-dash-monthly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="energy-dash-monthly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="energy-dash-monthly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="energy-dash-monthly-recommendations">
          <img
            alt="rectangle3423"
            src="/playground_assets/rectangle3423-u8t.svg"
            className="energy-dash-monthly-rectangle"
          />
          <div className="energy-dash-monthly-recommendations1">
            <div className="energy-dash-monthly-recommendation">
              <img
                alt="charmtick3423"
                src="/playground_assets/charmtick3423-a64b.svg"
                className="energy-dash-monthly-charmtick"
              />
              <span className="energy-dash-monthly-text20">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-monthly-recommendation1">
              <img
                alt="charmtick3424"
                src="/playground_assets/charmtick3424-5heg.svg"
                className="energy-dash-monthly-charmtick1"
              />
              <span className="energy-dash-monthly-text22">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-monthly-recommendation2">
              <img
                alt="charmtick3424"
                src="/playground_assets/charmtick3424-5no.svg"
                className="energy-dash-monthly-charmtick2"
              />
              <span className="energy-dash-monthly-text24">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-monthly-recommendation3">
              <img
                alt="charmtick3425"
                src="/playground_assets/charmtick3425-rfeb.svg"
                className="energy-dash-monthly-charmtick3"
              />
              <span className="energy-dash-monthly-text26">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-monthly-recommendation4">
              <img
                alt="charmtick3425"
                src="/playground_assets/charmtick3425-ngtg.svg"
                className="energy-dash-monthly-charmtick4"
              />
              <span className="energy-dash-monthly-text28">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-monthly-recommendation5">
              <img
                alt="charmtick3425"
                src="/playground_assets/charmtick3425-xwy.svg"
                className="energy-dash-monthly-charmtick5"
              />
              <span className="energy-dash-monthly-text30">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3426"
            src="/playground_assets/mdilightbulbon3426-maw.svg"
            className="energy-dash-monthly-mdilightbulbon"
          />
          <span className="energy-dash-monthly-text32">
            <span>recommendations</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default EnergyDashMonthly
