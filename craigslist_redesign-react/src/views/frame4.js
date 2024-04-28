import React from 'react'

import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';
import './frame4.css'

//Code For the "For Sale" page
const Frame4 = (props) => {

  const history = useHistory();

  const goToFrame3 = () => {
    history.push('/frame3'); // Navigate to individual listing pages
  };
  const goToFrame4 = () => {
    history.push('/frame4'); // Navigate to for sale page
  };
  const goToFrame1 = () => {
    window.location.href = '/'; // Navigate back to home page
  };

  return (
    <div className="frame4-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame4-frame4">
        <img
          src="/external/rectangle2573-uf9t-1100h.png"
          alt="Rectangle2573"
          className="frame4-rectangle2"
        />
        <img
          src="/external/rectangle5574-zd6v-200h.png"
          alt="Rectangle5574"
          className="frame4-rectangle5"
        />
        <img
          src="/external/rectangle7575-tchj-200h.png"
          alt="Rectangle7575"
          className="frame4-rectangle7"
        />
        <img
          src="/external/rectangle9576-i3c-200h.png"
          alt="Rectangle9576"
          className="frame4-rectangle9"
        />
        <img
          src="/external/rectangle11577-t878-200h.png"
          alt="Rectangle11577"
          className="frame4-rectangle11"
        />
        <img
          src="/external/rectangle15716-56dt-400h.png"
          alt="Rectangle15716"
          className="frame4-rectangle1"
        />
        <img
          src="/external/clickbackhome25717-v3iw-200h.png"
          alt="ClickBackHome25717"
          className="frame4-click-back-home2"
          onClick = {goToFrame1}
        />
        <span className="frame4-text">
          <span>Oklahoma City</span>
        </span>
        <img
          src="/external/rectangle55719-bxb8-200h.png"
          alt="Rectangle55719"
          className="frame4-rectangle51"
        />
        <img
          src="/external/rectangle65720-4u0n-200h.png"
          alt="Rectangle65720"
          className="frame4-rectangle6"
        />
        <img
          src="/external/rectangle75721-gvyc-200h.png"
          alt="Rectangle75721"
          className="frame4-rectangle71"
        />
        <img
          src="/external/rectangle85722-bc5b-200h.png"
          alt="Rectangle85722"
          className="frame4-rectangle8"
        />
        <img
          src="/external/rectangle95723-hf9s-200h.png"
          alt="Rectangle95723"
          className="frame4-rectangle91"
        />
        <img
          src="/external/rectangle105724-u6yt-200h.png"
          alt="Rectangle105724"
          className="frame4-rectangle10"
        />
        <img
          src="/external/rectangle115725-nac8-200h.png"
          alt="Rectangle115725"
          className="frame4-rectangle111"
        />
        <img
          src="/external/rectangle135726-24g8-200h.png"
          alt="Rectangle135726"
          className="frame4-rectangle13"
        />
        <span className="frame4-text02">
          <span>Search...</span>
        </span>
        <img
          src="/external/rectangle125728-2tl8-200h.png"
          alt="Rectangle125728"
          className="frame4-rectangle12"
        />
        <img
          src="/external/image15729-cas-200h.png"
          alt="image15729"
          className="frame4-image1"
        />
        <img
          src="/external/image25730-clh-200h.png"
          alt="image25730"
          className="frame4-image2"
        />
        <img
          src="/external/image55731-oz08-200h.png"
          alt="image55731"
          className="frame4-image5"
        />
        <img
          src="/external/image65732-ejih-200h.png"
          alt="image65732"
          className="frame4-image6"
        />
        <img
          src="/external/image75733-e1nm-200w.png"
          alt="image75733"
          className="frame4-image7"
        />
        <img
          src="/external/image85734-qz6j-200h.png"
          alt="image85734"
          className="frame4-image8"
        />
        <img
          src="/external/image95735-hd4-200h.png"
          alt="image95735"
          className="frame4-image9"
        />
        <img
          src="/external/image105736-s4vd-200h.png"
          alt="image105736"
          className="frame4-image10"
        />
        <img
          src="/external/image115737-1444-200h.png"
          alt="image115737"
          className="frame4-image11"
        />
        <img
          src="/external/ellipse15738-cw7g-200h.png"
          alt="Ellipse15738"
          className="frame4-ellipse1"
        />
        <img
          src="/external/rectangle155739-3b9k-200h.png"
          alt="Rectangle155739"
          className="frame4-rectangle15"
        />
        <img
          src="/external/image125740-4dji-200h.png"
          alt="image125740"
          className="frame4-image12"
        />
        <span className="frame4-text04">
          <span>Post an Ad</span>
        </span>
        <div className="frame4-group8">
          <span className="frame4-text06">
            <span>Lightly Used Dishes $9999</span>
            <br></br>
            <span>(~.1 miles away)</span>
          </span>
          <span className="frame4-text10">
            <span>New Car</span>
            <br></br>
            <span> $70000</span>
            <br></br>
            <span>(~4 miles away)</span>
          </span>
          <span className="frame4-text16">
            <span>New Shoes</span>
            <br></br>
            <span> $200</span>
            <br></br>
            <span>(~15 miles away)</span>
          </span>
          <span className="frame4-text22">
            <span>Used Car</span>
            <br></br>
            <span> $3000</span>
            <br></br>
            <span>(~5 miles away)</span>
          </span>
          <span className="frame4-text28">
            <span>Boots</span>
            <br></br>
            <span> $100</span>
            <br></br>
            <span>(~10 miles away)</span>
          </span>
          <span className="frame4-text34">
            <span>
              Never worn clothes
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>$150</span>
            <br></br>
            <span>(~8 miles away)</span>
          </span>
          <span className="frame4-text40">
            <span>Table Set</span>
            <br></br>
            <span> $700</span>
            <br></br>
            <span>(~7 miles away)</span>
          </span>
          <img
            src="/external/rectangle235750-6z4-400w.png"
            alt="Rectangle235750"
            className="frame4-rectangle23"
            onClick = {goToFrame3}
          />
          <img
            src="/external/rectangle225749-t89k-400w.png"
            alt="Rectangle225749"
            className="frame4-rectangle22"
            onClick = {goToFrame3}
          />
          <img
            src="/external/rectangle215748-f7fk-400w.png"
            alt="Rectangle215748"
            className="frame4-rectangle21"
            onClick = {goToFrame3}
          />
          <img
            src="/external/rectangle205747-xwva-400w.png"
            alt="Rectangle205747"
            className="frame4-rectangle20"
            onClick = {goToFrame3}
          />
          <img
            src="/external/rectangle195746-2tz6w-400w.png"
            alt="Rectangle195746"
            className="frame4-rectangle19"
            onClick = {goToFrame3}
          />
          <img
            src="/external/rectangle185745-5bel-400w.png"
            alt="Rectangle185745"
            className="frame4-rectangle18"
            onClick = {goToFrame3}
          />
          <img
            src="/external/rectangle175744-fmlg-400w.png"
            alt="Rectangle175744"
            className="frame4-rectangle17"
            onClick = {goToFrame3}
          />
          <img
            src="/external/rectangle165743-zeqn-400w.png"
            alt="Rectangle165743"
            className="frame4-rectangle16"
            onClick = {goToFrame3}
          />
          <span className="frame4-text46">
            <span>Acoustic Guitar $100</span>
            <br></br>
            <span>(~10 miles away)</span>
          </span>
        </div>
        <span className="frame4-text50">
          <span>&lt;&lt; Prev</span>
        </span>
        <span className="frame4-text52">
          <span>Next &gt;&gt;</span>
        </span>
        <span className="frame4-text54">
          <span>Page: 1 of 98</span>
        </span>
      </div>
    </div>
  )
}

export default Frame4
