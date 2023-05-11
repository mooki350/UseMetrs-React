import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './compare-energy-daily.css'

const CompareEnergyDaily = (props) => {
  return (
    <div className="compare-energy-daily-container">
      <Helmet>
        <title>CompareEnergyDaily - UseMetrs</title>
        <meta property="og:title" content="CompareEnergyDaily - UseMetrs" />
      </Helmet>
      <div className="compare-energy-daily-energy-comparison-weekly">
        <span className="compare-energy-daily-text">
          <span>energy usage</span>
        </span>
        <div className="compare-energy-daily-tabs">
          <div className="compare-energy-daily-tabs1">
            <Link
              to="/compare-energy-monthly"
              className="compare-energy-daily-navlink"
            >
              <div className="compare-energy-daily-monthly">
                <span className="compare-energy-daily-text02">
                  <span>monthly</span>
                </span>
              </div>
            </Link>
            <Link
              to="/compare-energy-weekly"
              className="compare-energy-daily-navlink1"
            >
              <div className="compare-energy-daily-weekly">
                <span className="compare-energy-daily-text04">
                  <span>weekly</span>
                </span>
              </div>
            </Link>
            <div className="compare-energy-daily-daily">
              <div className="compare-energy-daily-selected">
                <img
                  alt="Line13777"
                  src="/playground_assets/line13777-v6qs.svg"
                  className="compare-energy-daily-line1"
                />
                <span className="compare-energy-daily-text06">
                  <span>daily</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="compare-energy-daily-header">
          <span className="compare-energy-daily-text08">
            <span>
              <span>energy</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/compare-usage" className="compare-energy-daily-navlink2">
            <img
              alt="tablerarrowback3455"
              src="/playground_assets/tablerarrowback3455-dlww.svg"
              className="compare-energy-daily-tablerarrowback"
            />
          </Link>
          <Link to="/" className="compare-energy-daily-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="compare-energy-daily-icbaselinehome"
            />
          </Link>
        </div>
        <div className="compare-energy-daily-recommendations">
          <img
            alt="rectangle3456"
            src="/playground_assets/rectangle3456-c4sc.svg"
            className="compare-energy-daily-rectangle"
          />
          <div className="compare-energy-daily-recommendations1">
            <div className="compare-energy-daily-recommendation">
              <img
                alt="charmtick3456"
                src="/playground_assets/charmtick3456-06pl.svg"
                className="compare-energy-daily-charmtick"
              />
              <span className="compare-energy-daily-text13">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-daily-recommendation1">
              <img
                alt="charmtick3457"
                src="/playground_assets/charmtick3457-gq6g.svg"
                className="compare-energy-daily-charmtick1"
              />
              <span className="compare-energy-daily-text15">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-daily-recommendation2">
              <img
                alt="charmtick3457"
                src="/playground_assets/charmtick3457-35oc.svg"
                className="compare-energy-daily-charmtick2"
              />
              <span className="compare-energy-daily-text17">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-daily-recommendation3">
              <img
                alt="charmtick3458"
                src="/playground_assets/charmtick3458-11t.svg"
                className="compare-energy-daily-charmtick3"
              />
              <span className="compare-energy-daily-text19">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-daily-recommendation4">
              <img
                alt="charmtick3458"
                src="/playground_assets/charmtick3458-8i98.svg"
                className="compare-energy-daily-charmtick4"
              />
              <span className="compare-energy-daily-text21">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-daily-recommendation5">
              <span className="compare-energy-daily-text23">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3459"
            src="/playground_assets/mdilightbulbon3459-yjhl.svg"
            className="compare-energy-daily-mdilightbulbon"
          />
          <span className="compare-energy-daily-text25">
            <span>recommendations</span>
          </span>
        </div>
        <span className="compare-energy-daily-text27">
          <span>show similar households:</span>
        </span>
        <span className="compare-energy-daily-text29">
          <span>distance:</span>
        </span>
        <div className="compare-energy-daily-toggle">
          <img
            alt="RectangleI346"
            src="/playground_assets/rectanglei346-mkqm-200h.png"
            className="compare-energy-daily-rectangle1"
          />
          <img
            alt="EllipseI346"
            src="/playground_assets/ellipsei346-llo-200h.png"
            className="compare-energy-daily-ellipse"
          />
        </div>
        <div className="compare-energy-daily-component1">
          <img
            alt="bottomI371"
            src="/playground_assets/bottomi371-npzt-200h.png"
            className="compare-energy-daily-bottom"
          />
          <img
            alt="topI371"
            src="/playground_assets/topi371-ha4m-200h.png"
            className="compare-energy-daily-top"
          />
          <img
            alt="sliderI371"
            src="/playground_assets/slideri371-l3-200h.png"
            className="compare-energy-daily-slider"
          />
        </div>
        <div className="compare-energy-daily-stuff">
          <div className="compare-energy-daily-thistime">
            <span className="compare-energy-daily-text31">
              <span>your usage: £17.30</span>
            </span>
          </div>
          <div className="compare-energy-daily-current">
            <span className="compare-energy-daily-text33">
              <span>average: £12.13</span>
            </span>
          </div>
          <div className="compare-energy-daily-graph">
            <div className="compare-energy-daily-maskgroup">
              <img
                alt="Vector43711"
                src="/playground_assets/vector43711-gu5o.svg"
                className="compare-energy-daily-vector4"
              />
              <img
                alt="Vector33711"
                src="/playground_assets/vector33711-sp7l.svg"
                className="compare-energy-daily-vector3"
              />
              <img
                alt="Vector7324"
                src="/playground_assets/vector7324-ok4.svg"
                className="compare-energy-daily-vector"
              />
              <img
                alt="Vector23711"
                src="/playground_assets/vector23711-25xj.svg"
                className="compare-energy-daily-vector2"
              />
              <img
                alt="Rectangle94577"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf37c3cc-9adf-4018-9174-af6f60eb3f4b/a313e9ed-13c6-44e6-b847-4cf2b0137687?org_if_sml=172"
                className="compare-energy-daily-rectangle9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareEnergyDaily
