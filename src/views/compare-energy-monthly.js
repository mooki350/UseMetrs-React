import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './compare-energy-monthly.css'

const CompareEnergyMonthly = (props) => {
  return (
    <div className="compare-energy-monthly-container">
      <Helmet>
        <title>CompareEnergyMonthly - UseMetrs</title>
        <meta property="og:title" content="CompareEnergyMonthly - UseMetrs" />
      </Helmet>
      <div className="compare-energy-monthly-energy-comparison-weekly">
        <span className="compare-energy-monthly-text">
          <span>energy usage</span>
        </span>
        <div className="compare-energy-monthly-tabs">
          <div className="compare-energy-monthly-tabs1">
            <div className="compare-energy-monthly-monthly">
              <div className="compare-energy-monthly-selected">
                <img
                  alt="Line13795"
                  src="/playground_assets/line13795-168a.svg"
                  className="compare-energy-monthly-line1"
                />
                <span className="compare-energy-monthly-text02">
                  <span>monthly</span>
                </span>
              </div>
            </div>
            <Link
              to="/compare-energy-weekly"
              className="compare-energy-monthly-navlink"
            >
              <div className="compare-energy-monthly-weekly">
                <span className="compare-energy-monthly-text04">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/compare-energy-daily"
              className="compare-energy-monthly-navlink1"
            >
              <div className="compare-energy-monthly-daily">
                <span className="compare-energy-monthly-text06">
                  <span>daily</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="compare-energy-monthly-header">
          <span className="compare-energy-monthly-text08">
            <span>
              <span>energy</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/compare-usage" className="compare-energy-monthly-navlink2">
            <img
              alt="tablerarrowback3455"
              src="/playground_assets/tablerarrowback3455-dlww.svg"
              className="compare-energy-monthly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="compare-energy-monthly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="compare-energy-monthly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="compare-energy-monthly-recommendations">
          <img
            alt="rectangle3456"
            src="/playground_assets/rectangle3456-c4sc.svg"
            className="compare-energy-monthly-rectangle"
          />
          <div className="compare-energy-monthly-recommendations1">
            <div className="compare-energy-monthly-recommendation">
              <img
                alt="charmtick3456"
                src="/playground_assets/charmtick3456-06pl.svg"
                className="compare-energy-monthly-charmtick"
              />
              <span className="compare-energy-monthly-text13">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-monthly-recommendation1">
              <img
                alt="charmtick3457"
                src="/playground_assets/charmtick3457-gq6g.svg"
                className="compare-energy-monthly-charmtick1"
              />
              <span className="compare-energy-monthly-text15">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-monthly-recommendation2">
              <img
                alt="charmtick3457"
                src="/playground_assets/charmtick3457-35oc.svg"
                className="compare-energy-monthly-charmtick2"
              />
              <span className="compare-energy-monthly-text17">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-monthly-recommendation3">
              <img
                alt="charmtick3458"
                src="/playground_assets/charmtick3458-11t.svg"
                className="compare-energy-monthly-charmtick3"
              />
              <span className="compare-energy-monthly-text19">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-monthly-recommendation4">
              <img
                alt="charmtick3458"
                src="/playground_assets/charmtick3458-8i98.svg"
                className="compare-energy-monthly-charmtick4"
              />
              <span className="compare-energy-monthly-text21">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-monthly-recommendation5">
              <span className="compare-energy-monthly-text23">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3459"
            src="/playground_assets/mdilightbulbon3459-yjhl.svg"
            className="compare-energy-monthly-mdilightbulbon"
          />
          <span className="compare-energy-monthly-text25">
            <span>recommendations</span>
          </span>
        </div>
        <span className="compare-energy-monthly-text27">
          <span>show similar households:</span>
        </span>
        <span className="compare-energy-monthly-text29">
          <span>distance:</span>
        </span>
        <div className="compare-energy-monthly-toggle">
          <img
            alt="RectangleI346"
            src="/playground_assets/rectanglei346-mkqm-200h.png"
            className="compare-energy-monthly-rectangle1"
          />
          <img
            alt="EllipseI346"
            src="/playground_assets/ellipsei346-llo-200h.png"
            className="compare-energy-monthly-ellipse"
          />
        </div>
        <div className="compare-energy-monthly-component1">
          <img
            alt="bottomI371"
            src="/playground_assets/bottomi371-npzt-200h.png"
            className="compare-energy-monthly-bottom"
          />
          <img
            alt="topI371"
            src="/playground_assets/topi371-ha4m-200h.png"
            className="compare-energy-monthly-top"
          />
          <img
            alt="sliderI371"
            src="/playground_assets/slideri371-l3-200h.png"
            className="compare-energy-monthly-slider"
          />
        </div>
        <div className="compare-energy-monthly-stuff">
          <div className="compare-energy-monthly-thistime">
            <span className="compare-energy-monthly-text31">
              <span>your usage: £17.30</span>
            </span>
          </div>
          <div className="compare-energy-monthly-current">
            <span className="compare-energy-monthly-text33">
              <span>average: £12.13</span>
            </span>
          </div>
          <div className="compare-energy-monthly-graph">
            <div className="compare-energy-monthly-maskgroup">
              <img
                alt="Vector43711"
                src="/playground_assets/vector43711-gu5o.svg"
                className="compare-energy-monthly-vector4"
              />
              <img
                alt="Vector33711"
                src="/playground_assets/vector33711-sp7l.svg"
                className="compare-energy-monthly-vector3"
              />
              <img
                alt="Vector7324"
                src="/playground_assets/vector7324-ok4.svg"
                className="compare-energy-monthly-vector"
              />
              <img
                alt="Vector23711"
                src="/playground_assets/vector23711-25xj.svg"
                className="compare-energy-monthly-vector2"
              />
              <img
                alt="Rectangle94577"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf37c3cc-9adf-4018-9174-af6f60eb3f4b/a313e9ed-13c6-44e6-b847-4cf2b0137687?org_if_sml=172"
                className="compare-energy-monthly-rectangle9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareEnergyMonthly
