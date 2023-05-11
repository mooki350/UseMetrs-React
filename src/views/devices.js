import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './devices.css'

const Devices = (props) => {
  return (
    <div className="devices-container">
      <Helmet>
        <title>Devices - UseMetrs</title>
        <meta property="og:title" content="Devices - UseMetrs" />
      </Helmet>
      <div className="devices-devices">
        <div className="devices-devices1">
          <div className="devices-deviceswitch">
            <img
              alt="boxI416"
              src="/playground_assets/boxi416-3dzx-200h.png"
              className="devices-box"
            />
            <span className="devices-text">
              <span>a device</span>
            </span>
            <span className="devices-text02">
              <span>room</span>
            </span>
            <img
              alt="menuI416"
              src="/playground_assets/menui416-uyj.svg"
              className="devices-menu"
            />
            <img
              alt="VectorI416"
              src="/playground_assets/vectori416-u53s.svg"
              className="devices-vector"
            />
          </div>
          <div className="devices-deviceswitch1">
            <img
              alt="boxI416"
              src="/playground_assets/boxi416-3dzx-200h.png"
              className="devices-box1"
            />
            <span className="devices-text04">
              <span>another device</span>
            </span>
            <span className="devices-text06">
              <span>different room</span>
            </span>
            <img
              alt="menuI416"
              src="/playground_assets/menui416-x4pr.svg"
              className="devices-menu1"
            />
            <img
              alt="VectorI416"
              src="/playground_assets/vectori416-aebu.svg"
              className="devices-vector1"
            />
          </div>
          <div className="devices-deviceswitch2">
            <img
              alt="boxI416"
              src="/playground_assets/boxi416-3dzx-200h.png"
              className="devices-box2"
            />
            <span className="devices-text08">
              <span>a device</span>
            </span>
            <span className="devices-text10">
              <span>room</span>
            </span>
            <img
              alt="menuI416"
              src="/playground_assets/menui416-ljjr.svg"
              className="devices-menu2"
            />
            <img
              alt="VectorI416"
              src="/playground_assets/vectori416-67sa.svg"
              className="devices-vector2"
            />
          </div>
          <div className="devices-deviceswitch3">
            <img
              alt="boxI416"
              src="/playground_assets/boxi416-3dzx-200h.png"
              className="devices-box3"
            />
            <span className="devices-text12">
              <span>a device</span>
            </span>
            <span className="devices-text14">
              <span>room</span>
            </span>
            <img
              alt="menuI416"
              src="/playground_assets/menui416-m076.svg"
              className="devices-menu3"
            />
            <img
              alt="VectorI416"
              src="/playground_assets/vectori416-sj1p.svg"
              className="devices-vector3"
            />
          </div>
          <div className="devices-deviceswitch4">
            <img
              alt="boxI416"
              src="/playground_assets/boxi416-3dzx-200h.png"
              className="devices-box4"
            />
            <span className="devices-text16">
              <span>a device</span>
            </span>
            <span className="devices-text18">
              <span>room</span>
            </span>
            <img
              alt="menuI416"
              src="/playground_assets/menui416-qya7.svg"
              className="devices-menu4"
            />
            <img
              alt="VectorI416"
              src="/playground_assets/vectori416-4am.svg"
              className="devices-vector4"
            />
          </div>
          <div className="devices-deviceswitch5">
            <img
              alt="boxI416"
              src="/playground_assets/boxi416-3dzx-200h.png"
              className="devices-box5"
            />
            <span className="devices-text20">
              <span>a device</span>
            </span>
            <span className="devices-text22">
              <span>room</span>
            </span>
            <img
              alt="menuI416"
              src="/playground_assets/menui416-juzf.svg"
              className="devices-menu5"
            />
            <img
              alt="VectorI416"
              src="/playground_assets/vectori416-04tp.svg"
              className="devices-vector5"
            />
          </div>
        </div>
        <div className="devices-header">
          <span className="devices-text24">
            <span>devices</span>
          </span>
          <Link to="/" className="devices-navlink">
            <img
              alt="tablerarrowback4158"
              src="/playground_assets/tablerarrowback4158-ptvm.svg"
              className="devices-tablerarrowback"
            />
          </Link>
          <Link to="/" className="devices-navlink1">
            <img
              alt="icbaselinehome4474"
              src="/playground_assets/icbaselinehome4474-4v7o.svg"
              className="devices-icbaselinehome"
            />
          </Link>
        </div>
        <Link to="/add-device" className="devices-navlink2">
          <div className="devices-button">
            <span className="devices-text26">add new device</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Devices
