import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './compare-water-weekly.css'

const CompareWaterWeekly = (props) => {
  return (
    <div className="compare-water-weekly-container">
      <Helmet>
        <title>CompareWaterWeekly - UseMetrs</title>
        <meta property="og:title" content="CompareWaterWeekly - UseMetrs" />
      </Helmet>
      <div className="compare-water-weekly-water-comparison-weekly">
        <span className="compare-water-weekly-text">
          <span>water usage</span>
        </span>
        <div className="compare-water-weekly-tabs">
          <Link
            to="/compare-water-monthly"
            className="compare-water-weekly-navlink"
          >
            <div className="compare-water-weekly-monthly">
              <span className="compare-water-weekly-text02">
                <span>monthly</span>
              </span>
            </div>
          </Link>
          <div className="compare-water-weekly-weekly">
            <div className="compare-water-weekly-selected">
              <img
                alt="Line13460"
                src="/playground_assets/line13460-aq9r.svg"
                className="compare-water-weekly-line1"
              />
              <span className="compare-water-weekly-text04">
                <span>weekly</span>
              </span>
            </div>
          </div>
          <Link
            to="/compare-water-daily"
            className="compare-water-weekly-navlink1"
          >
            <div className="compare-water-weekly-daily">
              <span className="compare-water-weekly-text06">
                <span>daily</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="compare-water-weekly-header">
          <span className="compare-water-weekly-text08">
            <span>water</span>
          </span>
          <Link to="/compare-usage" className="compare-water-weekly-navlink2">
            <img
              alt="tablerarrowback3461"
              src="/playground_assets/tablerarrowback3461-hveo.svg"
              className="compare-water-weekly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="compare-water-weekly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="compare-water-weekly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="compare-water-weekly-recommendations">
          <img
            alt="rectangle3464"
            src="/playground_assets/rectangle3464-2728.svg"
            className="compare-water-weekly-rectangle"
          />
          <div className="compare-water-weekly-recommendations1">
            <div className="compare-water-weekly-recommendation">
              <img
                alt="charmtick3465"
                src="/playground_assets/charmtick3465-w3s.svg"
                className="compare-water-weekly-charmtick"
              />
              <span className="compare-water-weekly-text10">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-weekly-recommendation1">
              <img
                alt="charmtick3465"
                src="/playground_assets/charmtick3465-szk8.svg"
                className="compare-water-weekly-charmtick1"
              />
              <span className="compare-water-weekly-text12">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-weekly-recommendation2">
              <img
                alt="charmtick3466"
                src="/playground_assets/charmtick3466-nj5.svg"
                className="compare-water-weekly-charmtick2"
              />
              <span className="compare-water-weekly-text14">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-weekly-recommendation3">
              <img
                alt="charmtick3466"
                src="/playground_assets/charmtick3466-wz5.svg"
                className="compare-water-weekly-charmtick3"
              />
              <span className="compare-water-weekly-text16">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-weekly-recommendation4">
              <img
                alt="charmtick3467"
                src="/playground_assets/charmtick3467-2zvm.svg"
                className="compare-water-weekly-charmtick4"
              />
              <span className="compare-water-weekly-text18">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-water-weekly-recommendation5">
              <span className="compare-water-weekly-text20">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3468"
            src="/playground_assets/mdilightbulbon3468-o1f7.svg"
            className="compare-water-weekly-mdilightbulbon"
          />
          <span className="compare-water-weekly-text22">
            <span>recommendations</span>
          </span>
        </div>
        <span className="compare-water-weekly-text24">
          <span>show similar households:</span>
        </span>
        <span className="compare-water-weekly-text26">
          <span>distance:</span>
        </span>
        <div className="compare-water-weekly-stuff">
          <div className="compare-water-weekly-thistime">
            <span className="compare-water-weekly-text28">
              <span>your usage: £17.30</span>
            </span>
          </div>
          <div className="compare-water-weekly-current">
            <span className="compare-water-weekly-text30">
              <span>average: £12.13</span>
            </span>
          </div>
          <div className="compare-water-weekly-graph">
            <div className="compare-water-weekly-maskgroup">
              <img
                alt="Vector43711"
                src="/playground_assets/vector43711-yh3r.svg"
                className="compare-water-weekly-vector4"
              />
              <img
                alt="Vector33711"
                src="/playground_assets/vector33711-a97d.svg"
                className="compare-water-weekly-vector3"
              />
              <img
                alt="Vector7324"
                src="/playground_assets/vector7324-z6ji.svg"
                className="compare-water-weekly-vector"
              />
              <img
                alt="Vector23711"
                src="/playground_assets/vector23711-t9bv.svg"
                className="compare-water-weekly-vector2"
              />
            </div>
          </div>
        </div>
        <img
          alt="Rectangle94577"
          src="/playground_assets/rectangle94577-5rj-500w.png"
          className="compare-water-weekly-rectangle9"
        />
        <div className="compare-water-weekly-component1">
          <img
            alt="bottomI371"
            src="/playground_assets/bottomi371-dux-200h.png"
            className="compare-water-weekly-bottom"
          />
          <img
            alt="topI371"
            src="/playground_assets/topi371-97bn-200h.png"
            className="compare-water-weekly-top"
          />
          <img
            alt="sliderI371"
            src="/playground_assets/slideri371-ey3f-200h.png"
            className="compare-water-weekly-slider"
          />
        </div>
        <div className="compare-water-weekly-toggle">
          <img
            alt="RectangleI346"
            src="/playground_assets/rectanglei346-mkqm-200h.png"
            className="compare-water-weekly-rectangle1"
          />
          <img
            alt="EllipseI346"
            src="/playground_assets/ellipsei346-llo-200h.png"
            className="compare-water-weekly-ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default CompareWaterWeekly
