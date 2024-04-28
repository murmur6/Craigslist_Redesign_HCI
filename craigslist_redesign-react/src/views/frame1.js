import React from 'react'

import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';
import './frame1.css'

//Code for the Homepage of Craigslist
const Frame1 = (props) => {
   
  const history = useHistory();


  // navigates to individual listings
  const goToFrame3 = () => {
    history.push('/frame3'); // Navigate to individual listing page
  };
  //navigate to the listings page
  const goToFrame4 = () => {
    history.push('/frame4'); // Navigate to for sale page
  };

  const refresh = () => {
    window.location.reload();
  };

  //code for elements on page
  return (
    <div className="frame1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame1-frame1">
        <img
          src="/external/rectangle13610-vajl-400h.png"
          alt="Rectangle13610"
          className="frame1-rectangle1"
        />
        <img
          src="/external/homebutton3613-oyzo-200h.png"
          alt="HomeButton3613"
          className="frame1-home-button"
          onClick={refresh}
        />
        <span className="frame1-text">
          <span>Oklahoma City</span>
        </span>
        <img
          src="/external/rectangle53617-cjv3-200h.png"
          alt="Rectangle53617"
          className="frame1-rectangle5"
        />
        <img
          src="/external/clickforsale13618-v0x-200h.png"
          alt="ClickForSale13618"
          className="frame1-click-for-sale1"
          onClick={goToFrame4}
        />
        <img
          src="/external/rectangle73619-pxan-200h.png"
          alt="Rectangle73619"
          className="frame1-rectangle7"
        />
        <img
          src="/external/rectangle83620-096-200h.png"
          alt="Rectangle83620"
          className="frame1-rectangle8"
        />
        <img
          src="/external/rectangle93621-yxgi-200h.png"
          alt="Rectangle93621"
          className="frame1-rectangle9"
        />
        <img
          src="/external/rectangle103622-wrju-200h.png"
          alt="Rectangle103622"
          className="frame1-rectangle10"
        />
        <img
          src="/external/rectangle113623-k6dn-200h.png"
          alt="Rectangle113623"
          className="frame1-rectangle11"
        />
        <img
          src="/external/rectangle133475-prt-200h.png"
          alt="Rectangle133475"
          className="frame1-rectangle13"
        />
        <span className="frame1-text02">
          <span>Search...</span>
        </span>
        <img
          src="/external/rectangle123624-gq1g-200h.png"
          alt="Rectangle123624"
          className="frame1-rectangle12"
        />
        <img
          src="/external/image1335-6pj-200h.png"
          alt="image1335"
          className="frame1-image1"
        />
        <img
          src="/external/image23475-27hp-200h.png"
          alt="image23475"
          className="frame1-image2"
        />
        <img
          src="/external/image54540-g97p-200h.png"
          alt="image54540"
          className="frame1-image5"
        />
        <img
          src="/external/image64542-iuvt-200h.png"
          alt="image64542"
          className="frame1-image6"
        />
        <img
          src="/external/image74544-c85r-200w.png"
          alt="image74544"
          className="frame1-image7"
        />
        <img
          src="/external/image84546-u0c6-200h.png"
          alt="image84546"
          className="frame1-image8"
        />
        <img
          src="/external/image94548-5phs-200h.png"
          alt="image94548"
          className="frame1-image9"
        />
        <img
          src="/external/image104550-mize-200h.png"
          alt="image104550"
          className="frame1-image10"
        />
        <img
          src="/external/image114552-e86-200h.png"
          alt="image114552"
          className="frame1-image11"
        />
        <img
          src="/external/ellipse14556-zowq-200h.png"
          alt="Ellipse14556"
          className="frame1-ellipse1"
        />
        <img
          src="/external/rectangle154557-ziqh-200h.png"
          alt="Rectangle154557"
          className="frame1-rectangle15"
        />
        <img
          src="/external/image124559-slcm-200h.png"
          alt="image124559"
          className="frame1-image12"
        />
        <span className="frame1-text04">
          <span>Post an Ad</span>
        </span>
        <div className="frame1-group2">
          <span className="frame1-text06">
            <span>Featured Ads</span>
          </span>
        </div>
        <div className="frame1-group1">
          <span className="frame1-text08">
            <span>Events</span>
          </span>
        </div>
        <div className="frame1-group6">
          <span className="frame1-text10">
            <span>Website design and repair</span>
          </span>
          <span className="frame1-text12">
            <span>SEO/Marketing - Quality websites from $599</span>
          </span>
          <span className="frame1-text14">
            <span>Clubhouse, Oklahoma City.</span>
          </span>
          <span className="frame1-text16">
            <span>$794 / 1 br - 700 sq. ft</span>
          </span>
          <span className="frame1-text18">
            <span>Now Hiring Roof Sales Re...</span>
          </span>
          <span className="frame1-text20">
            <span>Superior exterior insurance restoration.</span>
          </span>
          <img
            src="/external/clickdog4716-uewd-400w.png"
            alt="ClickDog4716"
            className="frame1-click-dog"
            onClick={goToFrame3}
          />
          <img
            src="/external/rectangle174717-5sso-400w.png"
            alt="Rectangle174717"
            className="frame1-rectangle17"
          />
          <img
            src="/external/rectangle184718-nvw5-400w.png"
            alt="Rectangle184718"
            className="frame1-rectangle18"
          />
          <img
            src="/external/rectangle194719-sf5m-400w.png"
            alt="Rectangle194719"
            className="frame1-rectangle19"
          />
          <img
            src="/external/rectangle204720-jiw-400w.png"
            alt="Rectangle204720"
            className="frame1-rectangle20"
          />
          <span className="frame1-text22" onClick={() => goToFrame3()}>
            <span>Found large yellow lab (W...</span>
          </span>
          <span className="frame1-text24" onClick={() => goToFrame3()}>
            <span>4/26 Western/ Waterloo</span>
          </span>
          <span className="frame1-text26">
            <span>Dodge Dakota PU 98 S..</span>
          </span>
          <span className="frame1-text28">
            <span>6200 N Sara Rd, Yukon, Ok</span>
          </span>
        </div>
        <img
          src="/external/rectangle215137-nrh-1400w.png"
          alt="Rectangle215137"
          className="frame1-rectangle21"
        />
        <span className="frame1-text30">
          <span>About Us</span>
        </span>
        <span className="frame1-text32">
          <span>Terms of Use</span>
        </span>
        <span className="frame1-text34">
          <span>Privacy Policy</span>
        </span>
        <span className="frame1-text36">
          <span>Contact</span>
        </span>
        <div className="frame1-group5">
          <img
            src="/external/rectangle23632-xr9-200h.png"
            alt="Rectangle23632"
            className="frame1-rectangle23"
          />
          <span className="frame1-text38">
            <span>OKC Chihuahua Meetup!</span>
          </span>
          <span className="frame1-text40">
            <span>Date: May 30th, 2024, 11 AM</span>
            <br></br>
            <span>Location: The Dog Park at Saint John’s</span>
            <br></br>
            <span>
              North Brookline Avenue &amp; N Drexel Blvd, Oklahoma City, OK
            </span>
          </span>
        </div>
        <div className="frame1-group3">
          <span className="frame1-text46">
            <span>4/26-5/1: Garden Bros Nuclear Circus</span>
          </span>
          <span className="frame1-text48">
            <span>
              The 2024 Edition of GARDEN BROS NUCLEAR CIRCUS; HUMANS GONE WILD
              is Coming! This year’s show is packed with breathtaking special
              effects, arena seating, concert style sound and lighting along
              with 5 RINGS bursting with excitement, laughter, and more!
            </span>
          </span>
          <img
            src="/external/rectangle306384-g4p-200h.png"
            alt="Rectangle306384"
            className="frame1-rectangle30"
          />
        </div>
        <div className="frame1-group4">
          <span className="frame1-text50">
            <span>4/16-4/30: Dental Assistant Training</span>
          </span>
          <span className="frame1-text52">
            <span>
              Spring is here and it is time for a new career. Come join us at
              Dental Genius Training Academy for our 16 week dental assisting
              program. Two convenient locations in Dallas and Arlington. Classes
              meet 3 days per week, Monday, Wednesday, and Friday.
            </span>
          </span>
          <img
            src="/external/image136427-4lqn-200h.png"
            alt="image136427"
            className="frame1-image13"
          />
        </div>
        <img
          src="/external/rectangle326321-jkhk-500h.png"
          alt="Rectangle326321"
          className="frame1-rectangle32"
        />
      </div>
    </div>
  )
}

export default Frame1
