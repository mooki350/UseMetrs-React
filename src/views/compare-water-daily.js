import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './compare-water-daily.css'

const CompareWaterDaily = (props) => {
  return (
    <div className="compare-water-daily-container">
      <Helmet>
        <title>CompareWaterDaily - UseMetrs</title>
        <meta property="og:title" content="CompareWaterDaily - UseMetrs" />
      </Helmet>
      <div className="compare-water-daily-water-comparison-weekly">
        <span className="compare-water-daily-text">
          <span>water usage</span>
        </span>
        <div className="compare-water-daily-tabs">
          <div className="compare-water-daily-tabs1">
            <Link
              to="/compare-water-monthly"
              className="compare-water-daily-navlink"
            >
              <div className="compare-water-daily-monthly">
                <span className="compare-water-daily-text02">
                  <span>monthly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/compare-water-weekly"
              className="compare-water-daily-navlink1"
            >
              <div className="compare-water-daily-weekly">
                <span className="compare-water-daily-text04">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <div className="compare-water-daily-daily">
              <div className="compare-water-daily-selected">
                <img
                  alt="Line13712"
                  src="/playground_assets/line13712-y3g.svg"
                  className="compare-water-daily-line1"
                />
                <span className="compare-water-daily-text06">
                  <span>daily</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="compare-water-daily-header">
          <span className="compare-water-daily-text08">
            <span>water</span>
          </span>
          <Link to="/compare-usage" className="compare-water-daily-navlink2">
            <img
              alt="tablerarrowback3461"
              src="/playground_assets/tablerarrowback3461-hveo.svg"
              className="compare-water-daily-tablerarrowback"
            />
          </Link>
          <Link to="/" className="compare-water-daily-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="compare-water-daily-icbaselinehome"
            />
          </Link>
        </div>
        <div className="compare-water-daily-recommendations">
          <img
            alt="rectangle3464"
            src="/playground_assets/rectangle3464-2728.svg"
            className="compare-water-daily-rectangle"
          />
          <div className="compare-water-daily-recommendations1">
            <div className="compare-water-daily-recommendation">
              <img
                alt="charmtick3465"
                src="/playground_assets/charmtick3465-w3s.svg"
                className="compare-water-daily-charmtick"
              />
              <span className="compare-water-daily-text10">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-daily-recommendation1">
              <img
                alt="charmtick3465"
                src="/playground_assets/charmtick3465-szk8.svg"
                className="compare-water-daily-charmtick1"
              />
              <span className="compare-water-daily-text12">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-daily-recommendation2">
              <img
                alt="charmtick3466"
                src="/playground_assets/charmtick3466-nj5.svg"
                className="compare-water-daily-charmtick2"
              />
              <span className="compare-water-daily-text14">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-daily-recommendation3">
              <img
                alt="charmtick3466"
                src="/playground_assets/charmtick3466-wz5.svg"
                className="compare-water-daily-charmtick3"
              />
              <span className="compare-water-daily-text16">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-daily-recommendation4">
              <img
                alt="charmtick3467"
                src="/playground_assets/charmtick3467-2zvm.svg"
                className="compare-water-daily-charmtick4"
              />
              <span className="compare-water-daily-text18">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-daily-recommendation5">
              <span className="compare-water-daily-text20">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3468"
            src="/playground_assets/mdilightbulbon3468-o1f7.svg"
            className="compare-water-daily-mdilightbulbon"
          />
          <span className="compare-water-daily-text22">
            <span>recommendations</span>
          </span>
        </div>
        <span className="compare-water-daily-text24">
          <span>show similar households:</span>
        </span>
        <span className="compare-water-daily-text26">
          <span>distance:</span>
        </span>
        <div className="compare-water-daily-stuff">
          <div className="compare-water-daily-thistime">
            <span className="compare-water-daily-text28">
              <span>your usage: £17.30</span>
            </span>
          </div>
          <div className="compare-water-daily-current">
            <span className="compare-water-daily-text30">
              <span>average: £12.13</span>
            </span>
          </div>
          <div className="compare-water-daily-graph">
            <div className="compare-water-daily-maskgroup">
              <img
                alt="Vector43711"
                src="/playground_assets/vector43711-yh3r.svg"
                className="compare-water-daily-vector4"
              />
              <img
                alt="Vector33711"
                src="/playground_assets/vector33711-a97d.svg"
                className="compare-water-daily-vector3"
              />
              <img
                alt="Vector7324"
                src="/playground_assets/vector7324-z6ji.svg"
                className="compare-water-daily-vector"
              />
              <img
                alt="Vector23711"
                src="/playground_assets/vector23711-t9bv.svg"
                className="compare-water-daily-vector2"
              />
            </div>
          </div>
        </div>
        <img
          alt="Rectangle94577"
          src="/playground_assets/rectangle94577-5rj-500w.png"
          className="compare-water-daily-rectangle9"
        />
        <div className="compare-water-daily-component1">
          <img
            alt="bottomI371"
            src="/playground_assets/bottomi371-dux-200h.png"
            className="compare-water-daily-bottom"
          />
          <img
            alt="topI371"
            src="/playground_assets/topi371-97bn-200h.png"
            className="compare-water-daily-top"
          />
          <img
            alt="sliderI371"
            src="/playground_assets/slideri371-ey3f-200h.png"
            className="compare-water-daily-slider"
          />
        </div>
        <div className="compare-water-daily-toggle">
          <img
            alt="RectangleI346"
            src="/playground_assets/rectanglei346-mkqm-200h.png"
            className="compare-water-daily-rectangle1"
          />
          <img
            alt="EllipseI346"
            src="/playground_assets/ellipsei346-llo-200h.png"
            className="compare-water-daily-ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default CompareWaterDaily
