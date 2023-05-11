import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './compare-water-monthly.css'

const CompareWaterMonthly = (props) => {
  return (
    <div className="compare-water-monthly-container">
      <Helmet>
        <title>CompareWaterMonthly - UseMetrs</title>
        <meta property="og:title" content="CompareWaterMonthly - UseMetrs" />
      </Helmet>
      <div className="compare-water-monthly-water-comparison-weekly">
        <span className="compare-water-monthly-text">
          <span>water usage</span>
        </span>
        <div className="compare-water-monthly-tabs">
          <div className="compare-water-monthly-tabs1">
            <div className="compare-water-monthly-monthly">
              <div className="compare-water-monthly-selected">
                <img
                  alt="Line13712"
                  src="/playground_assets/line13712-qcqk.svg"
                  className="compare-water-monthly-line1"
                />
                <span className="compare-water-monthly-text02">
                  <span>monthly</span>
                </span>
              </div>
            </div>
            <Link
              to="/compare-water-weekly"
              className="compare-water-monthly-navlink"
            >
              <div className="compare-water-monthly-weekly">
                <span className="compare-water-monthly-text04">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/compare-water-daily"
              className="compare-water-monthly-navlink1"
            >
              <div className="compare-water-monthly-daily">
                <span className="compare-water-monthly-text06">
                  <span>daily</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="compare-water-monthly-header">
          <span className="compare-water-monthly-text08">
            <span>water</span>
          </span>
          <Link to="/compare-usage" className="compare-water-monthly-navlink2">
            <img
              alt="tablerarrowback3461"
              src="/playground_assets/tablerarrowback3461-hveo.svg"
              className="compare-water-monthly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="compare-water-monthly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="compare-water-monthly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="compare-water-monthly-recommendations">
          <img
            alt="rectangle3464"
            src="/playground_assets/rectangle3464-2728.svg"
            className="compare-water-monthly-rectangle"
          />
          <div className="compare-water-monthly-recommendations1">
            <div className="compare-water-monthly-recommendation">
              <img
                alt="charmtick3465"
                src="/playground_assets/charmtick3465-w3s.svg"
                className="compare-water-monthly-charmtick"
              />
              <span className="compare-water-monthly-text10">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-monthly-recommendation1">
              <img
                alt="charmtick3465"
                src="/playground_assets/charmtick3465-szk8.svg"
                className="compare-water-monthly-charmtick1"
              />
              <span className="compare-water-monthly-text12">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-monthly-recommendation2">
              <img
                alt="charmtick3466"
                src="/playground_assets/charmtick3466-nj5.svg"
                className="compare-water-monthly-charmtick2"
              />
              <span className="compare-water-monthly-text14">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-monthly-recommendation3">
              <img
                alt="charmtick3466"
                src="/playground_assets/charmtick3466-wz5.svg"
                className="compare-water-monthly-charmtick3"
              />
              <span className="compare-water-monthly-text16">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-monthly-recommendation4">
              <img
                alt="charmtick3467"
                src="/playground_assets/charmtick3467-2zvm.svg"
                className="compare-water-monthly-charmtick4"
              />
              <span className="compare-water-monthly-text18">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-monthly-recommendation5">
              <span className="compare-water-monthly-text20">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3468"
            src="/playground_assets/mdilightbulbon3468-o1f7.svg"
            className="compare-water-monthly-mdilightbulbon"
          />
          <span className="compare-water-monthly-text22">
            <span>recommendations</span>
          </span>
        </div>
        <span className="compare-water-monthly-text24">
          <span>show similar households:</span>
        </span>
        <span className="compare-water-monthly-text26">
          <span>distance:</span>
        </span>
        <div className="compare-water-monthly-component1">
          <img
            alt="bottomI371"
            src="/playground_assets/bottomi371-dux-200h.png"
            className="compare-water-monthly-bottom"
          />
          <img
            alt="topI371"
            src="/playground_assets/topi371-97bn-200h.png"
            className="compare-water-monthly-top"
          />
          <img
            alt="sliderI371"
            src="/playground_assets/slideri371-ey3f-200h.png"
            className="compare-water-monthly-slider"
          />
        </div>
        <div className="compare-water-monthly-stuff">
          <div className="compare-water-monthly-thistime">
            <span className="compare-water-monthly-text28">
              <span>your usage: £17.30</span>
            </span>
          </div>
          <div className="compare-water-monthly-current">
            <span className="compare-water-monthly-text30">
              <span>average: £12.13</span>
            </span>
          </div>
          <div className="compare-water-monthly-graph">
            <div className="compare-water-monthly-maskgroup">
              <img
                alt="Vector43711"
                src="/playground_assets/vector43711-yh3r.svg"
                className="compare-water-monthly-vector4"
              />
              <img
                alt="Vector33711"
                src="/playground_assets/vector33711-a97d.svg"
                className="compare-water-monthly-vector3"
              />
              <img
                alt="Vector7324"
                src="/playground_assets/vector7324-z6ji.svg"
                className="compare-water-monthly-vector"
              />
              <img
                alt="Vector23711"
                src="/playground_assets/vector23711-t9bv.svg"
                className="compare-water-monthly-vector2"
              />
            </div>
          </div>
        </div>
        <img
          alt="Rectangle94577"
          src="/playground_assets/rectangle94577-5rj-500w.png"
          className="compare-water-monthly-rectangle9"
        />
        <div className="compare-water-monthly-toggle">
          <img
            alt="RectangleI346"
            src="/playground_assets/rectanglei346-mkqm-200h.png"
            className="compare-water-monthly-rectangle1"
          />
          <img
            alt="EllipseI346"
            src="/playground_assets/ellipsei346-llo-200h.png"
            className="compare-water-monthly-ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default CompareWaterMonthly
