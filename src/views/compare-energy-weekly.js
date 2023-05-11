import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './compare-energy-weekly.css'

const CompareEnergyWeekly = (props) => {
  return (
    <div className="compare-energy-weekly-container">
      <Helmet>
        <title>CompareEnergyWeekly - UseMetrs</title>
        <meta property="og:title" content="CompareEnergyWeekly - UseMetrs" />
      </Helmet>
      <div className="compare-energy-weekly-energy-comparison-weekly">
        <span className="compare-energy-weekly-text">
          <span>energy usage</span>
        </span>
        <div className="compare-energy-weekly-tabs">
          <Link
            to="/compare-energy-monthly"
            className="compare-energy-weekly-navlink"
          >
            <div className="compare-energy-weekly-monthly">
              <span className="compare-energy-weekly-text02">
                <span>monthly</span>
              </span>
            </div>
          </Link>
          <div className="compare-energy-weekly-weekly">
            <div className="compare-energy-weekly-selected">
              <img
                alt="Line13454"
                src="/playground_assets/line13454-1snf.svg"
                className="compare-energy-weekly-line1"
              />
              <span className="compare-energy-weekly-text04">
                <span>weekly</span>
              </span>
            </div>
          </div>
          <Link
            to="/compare-energy-daily"
            className="compare-energy-weekly-navlink1"
          >
            <div className="compare-energy-weekly-daily">
              <span className="compare-energy-weekly-text06">
                <span>daily</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="compare-energy-weekly-header">
          <span className="compare-energy-weekly-text08">
            <span>
              <span>energy</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <Link to="/compare-usage" className="compare-energy-weekly-navlink2">
            <img
              alt="tablerarrowback3455"
              src="/playground_assets/tablerarrowback3455-dlww.svg"
              className="compare-energy-weekly-tablerarrowback"
            />
          </Link>
          <Link to="/" className="compare-energy-weekly-navlink3">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="compare-energy-weekly-icbaselinehome"
            />
          </Link>
        </div>
        <div className="compare-energy-weekly-recommendations">
          <img
            alt="rectangle3456"
            src="/playground_assets/rectangle3456-c4sc.svg"
            className="compare-energy-weekly-rectangle"
          />
          <div className="compare-energy-weekly-recommendations1">
            <div className="compare-energy-weekly-recommendation">
              <img
                alt="charmtick3456"
                src="/playground_assets/charmtick3456-06pl.svg"
                className="compare-energy-weekly-charmtick"
              />
              <span className="compare-energy-weekly-text13">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-weekly-recommendation1">
              <img
                alt="charmtick3457"
                src="/playground_assets/charmtick3457-gq6g.svg"
                className="compare-energy-weekly-charmtick1"
              />
              <span className="compare-energy-weekly-text15">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-weekly-recommendation2">
              <img
                alt="charmtick3457"
                src="/playground_assets/charmtick3457-35oc.svg"
                className="compare-energy-weekly-charmtick2"
              />
              <span className="compare-energy-weekly-text17">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-weekly-recommendation3">
              <img
                alt="charmtick3458"
                src="/playground_assets/charmtick3458-11t.svg"
                className="compare-energy-weekly-charmtick3"
              />
              <span className="compare-energy-weekly-text19">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-weekly-recommendation4">
              <img
                alt="charmtick3458"
                src="/playground_assets/charmtick3458-8i98.svg"
                className="compare-energy-weekly-charmtick4"
              />
              <span className="compare-energy-weekly-text21">
                <span>a recommendation</span>
              </span>
            </div>
            <div className="compare-energy-weekly-recommendation5">
              <span className="compare-energy-weekly-text23">
                <span>a recommendation</span>
              </span>
            </div>
          </div>
          <img
            alt="mdilightbulbon3459"
            src="/playground_assets/mdilightbulbon3459-yjhl.svg"
            className="compare-energy-weekly-mdilightbulbon"
          />
          <span className="compare-energy-weekly-text25">
            <span>recommendations</span>
          </span>
        </div>
        <span className="compare-energy-weekly-text27">
          <span>show similar households:</span>
        </span>
        <span className="compare-energy-weekly-text29">
          <span>distance:</span>
        </span>
        <div className="compare-energy-weekly-toggle">
          <img
            alt="RectangleI346"
            src="/playground_assets/rectanglei346-mkqm-200h.png"
            className="compare-energy-weekly-rectangle1"
          />
          <img
            alt="EllipseI346"
            src="/playground_assets/ellipsei346-llo-200h.png"
            className="compare-energy-weekly-ellipse"
          />
        </div>
        <div className="compare-energy-weekly-component1">
          <img
            alt="bottomI371"
            src="/playground_assets/bottomi371-npzt-200h.png"
            className="compare-energy-weekly-bottom"
          />
          <img
            alt="topI371"
            src="/playground_assets/topi371-ha4m-200h.png"
            className="compare-energy-weekly-top"
          />
          <img
            alt="sliderI371"
            src="/playground_assets/slideri371-l3-200h.png"
            className="compare-energy-weekly-slider"
          />
        </div>
        <div className="compare-energy-weekly-stuff">
          <div className="compare-energy-weekly-thistime">
            <span className="compare-energy-weekly-text31">
              <span>your usage: £17.30</span>
            </span>
          </div>
          <div className="compare-energy-weekly-current">
            <span className="compare-energy-weekly-text33">
              <span>average: £12.13</span>
            </span>
          </div>
          <div className="compare-energy-weekly-graph">
            <div className="compare-energy-weekly-maskgroup">
              <img
                alt="Vector43711"
                src="/playground_assets/vector43711-gu5o.svg"
                className="compare-energy-weekly-vector4"
              />
              <img
                alt="Vector33711"
                src="/playground_assets/vector33711-sp7l.svg"
                className="compare-energy-weekly-vector3"
              />
              <img
                alt="Vector7324"
                src="/playground_assets/vector7324-ok4.svg"
                className="compare-energy-weekly-vector"
              />
              <img
                alt="Vector23711"
                src="/playground_assets/vector23711-25xj.svg"
                className="compare-energy-weekly-vector2"
              />
              <img
                alt="Rectangle94577"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf37c3cc-9adf-4018-9174-af6f60eb3f4b/a313e9ed-13c6-44e6-b847-4cf2b0137687?org_if_sml=172"
                className="compare-energy-weekly-rectangle9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareEnergyWeekly
