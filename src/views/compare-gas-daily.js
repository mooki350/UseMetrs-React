import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './compare-gas-daily.css'

const CompareGasDaily = (props) => {
  return (
    <div className="compare-gas-daily-container">
      <Helmet>
        <title>CompareGasDaily - UseMetrs</title>
        <meta property="og:title" content="CompareGasDaily - UseMetrs" />
      </Helmet>
      <div className="compare-gas-daily-gas-comparison-weekly">
        <div className="compare-gas-daily-recommendations">
          <img
            alt="rectangle3443"
            src="/playground_assets/rectangle3443-9jdn.svg"
            className="compare-gas-daily-rectangle"
          />
          <div className="compare-gas-daily-recommendations1">
            <div className="compare-gas-daily-recommendation">
              <img
                alt="charmtick3443"
                src="/playground_assets/charmtick3443-so3.svg"
                className="compare-gas-daily-charmtick"
              />
              <span className="compare-gas-daily-text">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-daily-recommendation1">
              <img
                alt="charmtick3444"
                src="/playground_assets/charmtick3444-nz3a.svg"
                className="compare-gas-daily-charmtick1"
              />
              <span className="compare-gas-daily-text02">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-daily-recommendation2">
              <img
                alt="charmtick3444"
                src="/playground_assets/charmtick3444-uj8p.svg"
                className="compare-gas-daily-charmtick2"
              />
              <span className="compare-gas-daily-text04">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-daily-recommendation3">
              <img
                alt="charmtick3445"
                src="/playground_assets/charmtick3445-mt59.svg"
                className="compare-gas-daily-charmtick3"
              />
              <span className="compare-gas-daily-text06">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-daily-recommendation4">
              <img
                alt="charmtick3445"
                src="/playground_assets/charmtick3445-ltv6.svg"
                className="compare-gas-daily-charmtick4"
              />
              <span className="compare-gas-daily-text08">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-gas-daily-recommendation5">
              <span className="compare-gas-daily-text10">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3446"
            src="/playground_assets/mdilightbulbon3446-alep.svg"
            className="compare-gas-daily-mdilightbulbon"
          />
          <span className="compare-gas-daily-text12">
            <span>recommendations</span>
          </span>
        </div>
        <span className="compare-gas-daily-text14">
          <span>gas usage</span>
        </span>
        <div className="compare-gas-daily-tabs">
          <div className="compare-gas-daily-tabs1">
            <Link
              to="/compare-energy-monthly"
              className="compare-gas-daily-navlink"
            >
              <div className="compare-gas-daily-monthly">
                <span className="compare-gas-daily-text16">
                  <span>monthly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/compare-gas-weekly"
              className="compare-gas-daily-navlink1"
            >
              <div className="compare-gas-daily-weekly">
                <span className="compare-gas-daily-text18">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <div className="compare-gas-daily-daily">
              <div className="compare-gas-daily-selected">
                <img
                  alt="Line13714"
                  src="/playground_assets/line13714-rqtu.svg"
                  className="compare-gas-daily-line1"
                />
                <span className="compare-gas-daily-text20">
                  <span>daily</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="compare-gas-daily-header">
          <span className="compare-gas-daily-text22">
            <span>
              <span>gas</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/compare-usage" className="compare-gas-daily-navlink2">
            <img
              alt="tablerarrowback3451"
              src="/playground_assets/tablerarrowback3451-p47.svg"
              className="compare-gas-daily-tablerarrowback"
            />
          </Link>
          <Link to="/" className="compare-gas-daily-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="compare-gas-daily-icbaselinehome"
            />
          </Link>
        </div>
        <span className="compare-gas-daily-text27">
          <span>show similar households:</span>
        </span>
        <span className="compare-gas-daily-text29">
          <span>distance:</span>
        </span>
        <div className="compare-gas-daily-component1">
          <img
            alt="bottomI371"
            src="/playground_assets/bottomi371-0qdp-200h.png"
            className="compare-gas-daily-bottom"
          />
          <img
            alt="topI371"
            src="/playground_assets/topi371-khb-200h.png"
            className="compare-gas-daily-top"
          />
          <img
            alt="sliderI371"
            src="/playground_assets/slideri371-aimr-200h.png"
            className="compare-gas-daily-slider"
          />
        </div>
        <div className="compare-gas-daily-stuff">
          <div className="compare-gas-daily-thistime">
            <span className="compare-gas-daily-text31">
              <span>your usage: £17.30</span>
            </span>
          </div>
          <div className="compare-gas-daily-current">
            <span className="compare-gas-daily-text33">
              <span>average: £12.13</span>
            </span>
          </div>
          <div className="compare-gas-daily-graph">
            <div className="compare-gas-daily-maskgroup">
              <img
                alt="Vector43711"
                src="/playground_assets/vector43711-k7k.svg"
                className="compare-gas-daily-vector4"
              />
              <img
                alt="Vector33711"
                src="/playground_assets/vector33711-qqpo.svg"
                className="compare-gas-daily-vector3"
              />
              <img
                alt="Vector7424"
                src="/playground_assets/vector7424-sflj.svg"
                className="compare-gas-daily-vector"
              />
              <img
                alt="Vector23711"
                src="/playground_assets/vector23711-ptg5.svg"
                className="compare-gas-daily-vector2"
              />
              <img
                alt="Rectangle94577"
                src="/playground_assets/rectangle94577-5rj-500w.png"
                className="compare-gas-daily-rectangle9"
              />
            </div>
          </div>
        </div>
        <div className="compare-gas-daily-toggle">
          <img
            alt="RectangleI346"
            src="/playground_assets/rectanglei346-mkqm-200h.png"
            className="compare-gas-daily-rectangle1"
          />
          <img
            alt="EllipseI346"
            src="/playground_assets/ellipsei346-llo-200h.png"
            className="compare-gas-daily-ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default CompareGasDaily
