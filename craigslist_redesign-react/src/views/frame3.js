import React from 'react'

import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';

import './frame3.css'

//Code For individual Listings
const Frame3 = (props) => {

  const history = useHistory();

  const goToFrame4 = () => {
    history.push('/frame4'); // Navigate to for sale page
  };
  const goToFrame1 = () => {
    window.location.href = '/'; // Navigate back to home page
  };

  return (
    <div className="frame3-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame3-frame3">
        <img
          src="/external/rectangle24210-9fk7-800h.png"
          alt="Rectangle24210"
          className="frame3-rectangle2"
        />
        <img
          src="/external/rectangle54214-coyl-200h.png"
          alt="Rectangle54214"
          className="frame3-rectangle5"
        />
        <img
          src="/external/rectangle74216-edfp-200h.png"
          alt="Rectangle74216"
          className="frame3-rectangle7"
        />
        <img
          src="/external/rectangle94218-dby-200h.png"
          alt="Rectangle94218"
          className="frame3-rectangle9"
        />
        <img
          src="/external/rectangle114220-6das-200h.png"
          alt="Rectangle114220"
          className="frame3-rectangle11"
        />
        <img
          src="/external/rectangle14510-7ih-400h.png"
          alt="Rectangle14510"
          className="frame3-rectangle1"
        />
        <img
          src="/external/clickbackhome4510-nmj-200h.png"
          alt="ClickBackHome4510"
          className="frame3-click-back-home"
          onClick = {goToFrame1}
        />
        <span className="frame3-text">
          <span>Oklahoma City</span>
        </span>
        <img
          src="/external/rectangle54510-anhs-200h.png"
          alt="Rectangle54510"
          className="frame3-rectangle51"
        />
        <img
          src="/external/clickforsale24511-q1tp-200h.png"
          alt="ClickForSale24511"
          className="frame3-click-for-sale2"
          onClick = {goToFrame4}
        />
        <img
          src="/external/rectangle74511-zad-200h.png"
          alt="Rectangle74511"
          className="frame3-rectangle71"
        />
        <img
          src="/external/rectangle84511-9f4p-200h.png"
          alt="Rectangle84511"
          className="frame3-rectangle8"
        />
        <img
          src="/external/rectangle94511-pxs-200h.png"
          alt="Rectangle94511"
          className="frame3-rectangle91"
        />
        <img
          src="/external/rectangle104511-p2cy-200h.png"
          alt="Rectangle104511"
          className="frame3-rectangle10"
        />
        <img
          src="/external/rectangle114511-7enx-200h.png"
          alt="Rectangle114511"
          className="frame3-rectangle111"
        />
        <img
          src="/external/rectangle134511-iq11-200h.png"
          alt="Rectangle134511"
          className="frame3-rectangle13"
        />
        <span className="frame3-text02">
          <span>Search...</span>
        </span>
        <img
          src="/external/rectangle124511-8yna-200h.png"
          alt="Rectangle124511"
          className="frame3-rectangle12"
        />
        <img
          src="/external/image14511-xnwi-200h.png"
          alt="image14511"
          className="frame3-image1"
        />
        <img
          src="/external/image24512-7yzd-200h.png"
          alt="image24512"
          className="frame3-image2"
        />
        <img
          src="/external/image54512-hjoq-200h.png"
          alt="image54512"
          className="frame3-image5"
        />
        <img
          src="/external/image64512-7pjn-200h.png"
          alt="image64512"
          className="frame3-image6"
        />
        <img
          src="/external/image74512-jwdj-200w.png"
          alt="image74512"
          className="frame3-image7"
        />
        <img
          src="/external/image84512-4j3u-200h.png"
          alt="image84512"
          className="frame3-image8"
        />
        <img
          src="/external/image94512-uvr-200h.png"
          alt="image94512"
          className="frame3-image9"
        />
        <img
          src="/external/image104512-xhjx-200h.png"
          alt="image104512"
          className="frame3-image10"
        />
        <img
          src="/external/image114512-c3h8-200h.png"
          alt="image114512"
          className="frame3-image11"
        />
        <img
          src="/external/ellipse14512-yfv-200h.png"
          alt="Ellipse14512"
          className="frame3-ellipse1"
        />
        <img
          src="/external/rectangle154512-qjfh-200h.png"
          alt="Rectangle154512"
          className="frame3-rectangle15"
        />
        <img
          src="/external/image124513-2vzi-200h.png"
          alt="image124513"
          className="frame3-image12"
        />
        <div className="frame3-group7">
          <span className="frame3-text04">
            <span className="frame3-text05">
              Found large yellow lab. (Western/ waterloo)
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img
            src="/external/rectangle144230-i75h-500h.png"
            alt="Rectangle144230"
            className="frame3-rectangle14"
          />
          <span className="frame3-text06">
            <span>posted 7 hours ago</span>
          </span>
          <img
            src="/external/rectangle24642-w74-200h.png"
            alt="Rectangle24642"
            className="frame3-rectangle24"
          />
          <span className="frame3-text08">
            <span>Reply</span>
          </span>
          <img
            src="/external/star1644-139.svg"
            alt="Star1644"
            className="frame3-star1"
          />
          <span className="frame3-text10">
            <span>Favorite</span>
          </span>
          <span className="frame3-text12">
            <span>Hide</span>
          </span>
          <span className="frame3-text14">
            <span>Flag</span>
          </span>
          <span className="frame3-text16">
            <span>Share</span>
          </span>
          <span className="frame3-text18">
            <span>
              Very Friendly.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Has been hanging around western in
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              lone Oak in South Logan County.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              He’s friendly as can be.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Fetches, sits , very clean dog.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Someone’s looking for him.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>He’s just hanging out in the neighborhood,</span>
            <br></br>
            <span>
              I’m afraid he’s going to get hit by a car.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Looks to be a year two years old at most. I</span>
          </span>
          <div className="frame3-frameicontrash">
            <img
              src="/external/vector647-3ywt.svg"
              alt="Vector647"
              className="frame3-vector"
            />
            <img
              src="/external/vector648-ko8.svg"
              alt="Vector648"
              className="frame3-vector1"
            />
            <img
              src="/external/vector649-ofm.svg"
              alt="Vector649"
              className="frame3-vector2"
            />
            <img
              src="/external/vector6410-roxq.svg"
              alt="Vector6410"
              className="frame3-vector3"
            />
          </div>
          <div className="frame3-frameiconflag">
            <img
              src="/external/vector6415-j979d.svg"
              alt="Vector6415"
              className="frame3-vector4"
            />
          </div>
          <div className="frame3-frameiconshare">
            <img
              src="/external/vector6419-pz8.svg"
              alt="Vector6419"
              className="frame3-vector5"
            />
          </div>
        </div>
        <span className="frame3-text36">
          <span>Post an Ad</span>
        </span>
        <img
          src="/external/image14654-nq3a-600h.png"
          alt="image14654"
          className="frame3-image14"
        />
        <img
          src="/external/rectangle336321-h3xh-200h.png"
          alt="Rectangle336321"
          className="frame3-rectangle33"
        />
        <img
          src="/external/rectangle37696-xk1-200w.png"
          alt="Rectangle37696"
          className="frame3-rectangle37"
        />
        <img
          src="/external/rectangle38697-2wqo-200w.png"
          alt="Rectangle38697"
          className="frame3-rectangle38"
        />
        <img
          src="/external/rectangle39698-pxo-200w.png"
          alt="Rectangle39698"
          className="frame3-rectangle39"
        />
        <span className="frame3-text38">&lt;</span>
        <span className="frame3-text39">&gt;</span>
      </div>
    </div>
  )
}

export default Frame3
