import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './compare-gas-weekly.css'

const CompareGasWeekly = (props) => {
  return (
    <div className="compare-gas-weekly-container">
      <Helmet>
        <title>CompareGasWeekly - UseMetrs</title>
        <meta property="og:title" content="CompareGasWeekly - UseMetrs" />
      </Helmet>
      <div className="compare-gas-weekly-gas-comparison-weekly">
        <div className="compare-gas-weekly-recommendations">
          <img
            alt="rectangle3443"
            src="/playground_assets/rectangle3443-9jdn.svg"
            className="compare-gas-weekly-rectangle"
          />
          <div className="compare-gas-weekly-recommendations1">
            <div className="compare-gas-weekly-recommendation">
              <img
                alt="charmtick3443"
                src="/playground_assets/charmtick3443-so3.svg"
                className="compare-gas-weekly-charmtick"
              />
              <span className="compare-gas-weekly-text">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-weekly-recommendation1">
              <img
                alt="charmtick3444"
                src="/playground_assets/charmtick3444-nz3a.svg"
                className="compare-gas-weekly-charmtick1"
              />
              <span className="compare-gas-weekly-text02">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-weekly-recommendation2">
              <img
                alt="charmtick3444"
                src="/playground_assets/charmtick3444-uj8p.svg"
                className="compare-gas-weekly-charmtick2"
              />
              <span className="compare-gas-weekly-text04">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-weekly-recommendation3">
              <img
                alt="charmtick3445"
                src="/playground_assets/charmtick3445-mt59.svg"
                className="compare-gas-weekly-charmtick3"
              />
              <span className="compare-gas-weekly-text06">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-weekly-recommendation4">
              <img
                alt="charmtick3445"
                src="/playground_assets/charmtick3445-ltv6.svg"
                className="compare-gas-weekly-charmtick4"
              />
              <span className="compare-gas-weekly-text08">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-weekly-recommendation5">
              <span className="compare-gas-weekly-text10">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3446"
            src="/playground_assets/mdilightbulbon3446-alep.svg"
            className="compare-gas-weekly-mdilightbulbon"
          />
          <span className="compare-gas-weekly-text12">
            <span>recommendations</span>
          </span>
        </div>
        <span className="compare-gas-weekly-text14">
          <span>gas usage</span>
        </span>
        <div className="compare-gas-weekly-tabs">
          <Link
            to="/compare-gas-monthly"
            className="compare-gas-weekly-navlink"
          >
            <div className="compare-gas-weekly-monthly">
              <span className="compare-gas-weekly-text16">
                <span>monthly</span>
              </span>
            </div>
          </Link>
          <div className="compare-gas-weekly-weekly">
            <div className="compare-gas-weekly-selected">
              <img
                alt="Line13449"
                src="/playground_assets/line13449-jp2q.svg"
                className="compare-gas-weekly-line1"
              />
              <span className="compare-gas-weekly-text18">
                <span>weekly</span>
              </span>
            </div>
          </div>
          <Link to="/compare-gas-daily" className="compare-gas-weekly-navlink1">
            <div className="compare-gas-weekly-daily">
              <span className="compare-gas-weekly-text20">
                <span>daily</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="compare-gas-weekly-header">
          <span className="compare-gas-weekly-text22">
            <span>
              <span>gas</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/compare-usage" className="compare-gas-weekly-navlink2">
            <img
              alt="tablerarrowback3451"
              src="/playground_assets/tablerarrowback3451-p47.svg"
              className="compare-gas-weekly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="compare-gas-weekly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="compare-gas-weekly-icbaselinehome"
            />
          </Link>
        </div>
        <span className="compare-gas-weekly-text27">
          <span>show similar households:</span>
        </span>
        <span className="compare-gas-weekly-text29">
          <span>distance:</span>
        </span>
        <div className="compare-gas-weekly-component1">
          <img
            alt="bottomI371"
            src="/playground_assets/bottomi371-0qdp-200h.png"
            className="compare-gas-weekly-bottom"
          />
          <img
            alt="topI371"
            src="/playground_assets/topi371-khb-200h.png"
            className="compare-gas-weekly-top"
          />
          <img
            alt="sliderI371"
            src="/playground_assets/slideri371-aimr-200h.png"
            className="compare-gas-weekly-slider"
          />
        </div>
        <div className="compare-gas-weekly-stuff">
          <div className="compare-gas-weekly-thistime">
            <span className="compare-gas-weekly-text31">
              <span>your usage: £17.30</span>
            </span>
          </div>
          <div className="compare-gas-weekly-current">
            <span className="compare-gas-weekly-text33">
              <span>average: £12.13</span>
            </span>
          </div>
          <div className="compare-gas-weekly-graph">
            <div className="compare-gas-weekly-maskgroup">
              <img
                alt="Vector43711"
                src="/playground_assets/vector43711-k7k.svg"
                className="compare-gas-weekly-vector4"
              />
              <img
                alt="Vector33711"
                src="/playground_assets/vector33711-qqpo.svg"
                className="compare-gas-weekly-vector3"
              />
              <img
                alt="Vector7424"
                src="/playground_assets/vector7424-sflj.svg"
                className="compare-gas-weekly-vector"
              />
              <img
                alt="Vector23711"
                src="/playground_assets/vector23711-ptg5.svg"
                className="compare-gas-weekly-vector2"
              />
              <img
                alt="Rectangle94577"
                src="/playground_assets/rectangle94577-5rj-500w.png"
                className="compare-gas-weekly-rectangle9"
              />
            </div>
          </div>
        </div>
        <div className="compare-gas-weekly-toggle">
          <img
            alt="RectangleI346"
            src="/playground_assets/rectanglei346-mkqm-200h.png"
            className="compare-gas-weekly-rectangle1"
          />
          <img
            alt="EllipseI346"
            src="/playground_assets/ellipsei346-llo-200h.png"
            className="compare-gas-weekly-ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default CompareGasWeekly
