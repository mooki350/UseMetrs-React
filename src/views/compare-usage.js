import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './compare-usage.css'

const CompareUsage = (props) => {
  return (
    <div className="compare-usage-container">
      <Helmet>
        <title>CompareUsage - UseMetrs</title>
        <meta property="og:title" content="CompareUsage - UseMetrs" />
      </Helmet>
      <div className="compare-usage-add-new-goal">
        <Link to="/compare-energy-weekly" className="compare-usage-navlink">
          <div className="compare-usage-energy">
            <img
              alt="energyrectangle4303"
              src="/playground_assets/energyrectangle4303-knxc-400h.png"
              className="compare-usage-energyrectangle"
            />
            <span className="compare-usage-text">
              <span>energy</span>
            </span>
          </div>
        </Link>
        <Link to="/compare-water-weekly" className="compare-usage-navlink1">
          <div className="compare-usage-water">
            <img
              alt="energyrectangle7124"
              src="/playground_assets/energyrectangle7124-xedj-400h.png"
              className="compare-usage-energyrectangle1"
            />
            <span className="compare-usage-text2">
              <span>water</span>
            </span>
          </div>
        </Link>
        <Link to="/compare-gas-weekly" className="compare-usage-navlink2">
          <div className="compare-usage-gas">
            <img
              alt="Rectangle44315"
              src="/playground_assets/rectangle44315-52n-400h.png"
              className="compare-usage-rectangle4"
            />
            <span className="compare-usage-text4">
              <span>gas</span>
            </span>
          </div>
        </Link>
        <div className="compare-usage-header">
          <span className="compare-usage-text6">
            <span>select option</span>
          </span>
          <Link to="/" className="compare-usage-navlink3">
            <img
              alt="tablerarrowback4404"
              src="/playground_assets/tablerarrowback4404-m6vm.svg"
              className="compare-usage-tablerarrowback"
            />
          </Link>
          <Link to="/" className="compare-usage-navlink4">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="compare-usage-icbaselinehome"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompareUsage
