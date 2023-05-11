import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './compare-gas-monthly.css'

const CompareGasMonthly = (props) => {
  return (
    <div className="compare-gas-monthly-container">
      <Helmet>
        <title>CompareGasMonthly - UseMetrs</title>
        <meta property="og:title" content="CompareGasMonthly - UseMetrs" />
      </Helmet>
      <div className="compare-gas-monthly-gas-comparison-weekly">
        <div className="compare-gas-monthly-recommendations">
          <img
            alt="rectangle3443"
            src="/playground_assets/rectangle3443-9jdn.svg"
            className="compare-gas-monthly-rectangle"
          />
          <div className="compare-gas-monthly-recommendations1">
            <div className="compare-gas-monthly-recommendation">
              <img
                alt="charmtick3443"
                src="/playground_assets/charmtick3443-so3.svg"
                className="compare-gas-monthly-charmtick"
              />
              <span className="compare-gas-monthly-text">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-monthly-recommendation1">
              <img
                alt="charmtick3444"
                src="/playground_assets/charmtick3444-nz3a.svg"
                className="compare-gas-monthly-charmtick1"
              />
              <span className="compare-gas-monthly-text02">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-monthly-recommendation2">
              <img
                alt="charmtick3444"
                src="/playground_assets/charmtick3444-uj8p.svg"
                className="compare-gas-monthly-charmtick2"
              />
              <span className="compare-gas-monthly-text04">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-monthly-recommendation3">
              <img
                alt="charmtick3445"
                src="/playground_assets/charmtick3445-mt59.svg"
                className="compare-gas-monthly-charmtick3"
              />
              <span className="compare-gas-monthly-text06">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-monthly-recommendation4">
              <img
                alt="charmtick3445"
                src="/playground_assets/charmtick3445-ltv6.svg"
                className="compare-gas-monthly-charmtick4"
              />
              <span className="compare-gas-monthly-text08">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-monthly-recommendation5">
              <span className="compare-gas-monthly-text10">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3446"
            src="/playground_assets/mdilightbulbon3446-alep.svg"
            className="compare-gas-monthly-mdilightbulbon"
          />
          <span className="compare-gas-monthly-text12">
            <span>recommendations</span>
          </span>
        </div>
        <span className="compare-gas-monthly-text14">
          <span>gas usage</span>
        </span>
        <div className="compare-gas-monthly-tabs">
          <div className="compare-gas-monthly-tabs1">
            <div className="compare-gas-monthly-tabs2">
              <div className="compare-gas-monthly-monthly">
                <div className="compare-gas-monthly-selected">
                  <img
                    alt="Line13714"
                    src="/playground_assets/line13714-agz.svg"
                    className="compare-gas-monthly-line1"
                  />
                  <span className="compare-gas-monthly-text16">
                    <span>monthly</span>
                  </span>
                </div>
              </div>
              <Link
                to="/compare-gas-weekly"
                className="compare-gas-monthly-navlink"
              >
                <div className="compare-gas-monthly-weekly">
                  <span className="compare-gas-monthly-text18">
                    <span>weekly</span>
                  </span>
                </div>
              </Link>
              <Link
                to="/compare-gas-daily"
                className="compare-gas-monthly-navlink1"
              >
                <div className="compare-gas-monthly-daily">
                  <span className="compare-gas-monthly-text20">
                    <span>daily</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="compare-gas-monthly-header">
          <span className="compare-gas-monthly-text22">
            <span>
              <span>gas</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/compare-usage" className="compare-gas-monthly-navlink2">
            <img
              alt="tablerarrowback3451"
              src="/playground_assets/tablerarrowback3451-p47.svg"
              className="compare-gas-monthly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="compare-gas-monthly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="compare-gas-monthly-icbaselinehome"
            />
          </Link>
        </div>
        <span className="compare-gas-monthly-text27">
          <span>show similar households:</span>
        </span>
        <span className="compare-gas-monthly-text29">
          <span>distance:</span>
        </span>
        <div className="compare-gas-monthly-component1">
          <img
            alt="bottomI371"
            src="/playground_assets/bottomi371-0qdp-200h.png"
            className="compare-gas-monthly-bottom"
          />
          <img
            alt="topI371"
            src="/playground_assets/topi371-khb-200h.png"
            className="compare-gas-monthly-top"
          />
          <img
            alt="sliderI371"
            src="/playground_assets/slideri371-aimr-200h.png"
            className="compare-gas-monthly-slider"
          />
        </div>
        <div className="compare-gas-monthly-stuff">
          <div className="compare-gas-monthly-thistime">
            <span className="compare-gas-monthly-text31">
              <span>your usage: £17.30</span>
            </span>
          </div>
          <div className="compare-gas-monthly-current">
            <span className="compare-gas-monthly-text33">
              <span>average: £12.13</span>
            </span>
          </div>
          <div className="compare-gas-monthly-graph">
            <div className="compare-gas-monthly-maskgroup">
              <img
                alt="Vector43711"
                src="/playground_assets/vector43711-k7k.svg"
                className="compare-gas-monthly-vector4"
              />
              <img
                alt="Vector33711"
                src="/playground_assets/vector33711-qqpo.svg"
                className="compare-gas-monthly-vector3"
              />
              <img
                alt="Vector7424"
                src="/playground_assets/vector7424-sflj.svg"
                className="compare-gas-monthly-vector"
              />
              <img
                alt="Vector23711"
                src="/playground_assets/vector23711-ptg5.svg"
                className="compare-gas-monthly-vector2"
              />
              <img
                alt="Rectangle94577"
                src="/playground_assets/rectangle94577-5rj-500w.png"
                className="compare-gas-monthly-rectangle9"
              />
            </div>
          </div>
        </div>
        <div className="compare-gas-monthly-toggle">
          <img
            alt="RectangleI346"
            src="/playground_assets/rectanglei346-mkqm-200h.png"
            className="compare-gas-monthly-rectangle1"
          />
          <img
            alt="EllipseI346"
            src="/playground_assets/ellipsei346-llo-200h.png"
            className="compare-gas-monthly-ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default CompareGasMonthly
