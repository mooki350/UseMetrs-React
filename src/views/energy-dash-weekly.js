import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './energy-dash-weekly.css'

const EnergyDashWeekly = (props) => {
  return (
    <div className="energy-dash-weekly-container">
      <Helmet>
        <title>EnergyDashWeekly - UseMetrs</title>
        <meta property="og:title" content="EnergyDashWeekly - UseMetrs" />
      </Helmet>
      <div className="energy-dash-weekly-energy-dashboard-weekly">
        <div className="energy-dash-weekly-stuff">
          <div className="energy-dash-weekly-thistime">
            <span className="energy-dash-weekly-text">
              <span>
                <span>weekly:</span>
                <br></br>
                <span>£17.30</span>
              </span>
            </span>
            <div className="energy-dash-weekly-arrows">
              <img
                alt="Vector14608"
                src="/playground_assets/vector14608-5xzn.svg"
              />
            </div>
          </div>
          <div className="energy-dash-weekly-current">
            <span className="energy-dash-weekly-text05">
              <span>current: £0.14 p/h</span>
            </span>
          </div>
          <div className="energy-dash-weekly-graph">
            <div className="energy-dash-weekly-maskgroup">
              <div className="energy-dash-weekly-group1">
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-a6wo.svg"
                  className="energy-dash-weekly-vector"
                />
                <img
                  alt="Vector6619"
                  src="/playground_assets/vector6619-p7y8.svg"
                  className="energy-dash-weekly-vector1 energy-dash-weekly-vector1"
                />
              </div>
              <img
                alt="Rectangle96618"
                src="/playground_assets/rectangle96618-1zei.svg"
                className="energy-dash-weekly-rectangle9"
              />
            </div>
          </div>
        </div>
        <span className="energy-dash-weekly-text07">
          <span>energy usage</span>
        </span>
        <div className="energy-dash-weekly-tabs">
          <Link
            to="/energy-dash-monthly"
            className="energy-dash-weekly-navlink"
          >
            <div className="energy-dash-weekly-monthly">
              <span className="energy-dash-weekly-text09">
                <span>monthly</span>
              </span>
            </div>
          </Link>
          <div className="energy-dash-weekly-weekly">
            <div className="energy-dash-weekly-selected">
              <img
                alt="Line11272"
                src="/playground_assets/line11272-ch4.svg"
                className="energy-dash-weekly-line1"
              />
              <span className="energy-dash-weekly-text11">
                <span>weekly</span>
              </span>
            </div>
          </div>
          <Link to="/energy-dash-daily" className="energy-dash-weekly-navlink1">
            <div className="energy-dash-weekly-daily">
              <span className="energy-dash-weekly-text13">
                <span>daily</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="energy-dash-weekly-header">
          <span className="energy-dash-weekly-text15">
            <span>
              <span>energy</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/" className="energy-dash-weekly-navlink2">
            <img
              alt="tablerarrowback4116"
              src="/playground_assets/tablerarrowback4116-o7f.svg"
              className="energy-dash-weekly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="energy-dash-weekly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="energy-dash-weekly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="energy-dash-weekly-recommendations">
          <img
            alt="rectangle3423"
            src="/playground_assets/rectangle3423-u8t.svg"
            className="energy-dash-weekly-rectangle"
          />
          <div className="energy-dash-weekly-recommendations1">
            <div className="energy-dash-weekly-recommendation">
              <img
                alt="charmtick3423"
                src="/playground_assets/charmtick3423-a64b.svg"
                className="energy-dash-weekly-charmtick"
              />
              <span className="energy-dash-weekly-text20">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-weekly-recommendation1">
              <img
                alt="charmtick3424"
                src="/playground_assets/charmtick3424-5heg.svg"
                className="energy-dash-weekly-charmtick1"
              />
              <span className="energy-dash-weekly-text22">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-weekly-recommendation2">
              <img
                alt="charmtick3424"
                src="/playground_assets/charmtick3424-5no.svg"
                className="energy-dash-weekly-charmtick2"
              />
              <span className="energy-dash-weekly-text24">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-weekly-recommendation3">
              <img
                alt="charmtick3425"
                src="/playground_assets/charmtick3425-rfeb.svg"
                className="energy-dash-weekly-charmtick3"
              />
              <span className="energy-dash-weekly-text26">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-weekly-recommendation4">
              <img
                alt="charmtick3425"
                src="/playground_assets/charmtick3425-ngtg.svg"
                className="energy-dash-weekly-charmtick4"
              />
              <span className="energy-dash-weekly-text28">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="energy-dash-weekly-recommendation5">
              <img
                alt="charmtick3425"
                src="/playground_assets/charmtick3425-xwy.svg"
                className="energy-dash-weekly-charmtick5"
              />
              <span className="energy-dash-weekly-text30">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3426"
            src="/playground_assets/mdilightbulbon3426-maw.svg"
            className="energy-dash-weekly-mdilightbulbon"
          />
          <span className="energy-dash-weekly-text32">
            <span>recommendations</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default EnergyDashWeekly
