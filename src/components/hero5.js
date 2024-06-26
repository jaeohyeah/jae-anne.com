import React from 'react'

import PropTypes from 'prop-types'

import './hero5.css'

const Hero5 = (props) => {
  return (
    <div
      className={`hero5-header19 thq-section-padding ${props.rootClassName} `}
    >
      <div className="hero5-max-width thq-flex-row thq-section-max-width">
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="hero5-video"
        ></video>
        <div className="hero5-column">
          <div className="hero5-content">
            <h1 className="hero5-text thq-heading-1">{props.heading1}</h1>
            <p className="hero5-text1 thq-body-large">{props.content1}</p>
            <div className="hero5-actions">
              <button className="hero5-button thq-button-filled">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="hero5-button1 thq-button-outline">
                <span className="thq-body-small">{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero5.defaultProps = {
  content1:
    "Choose from our website management packages that include free social media and email marketing services to boost your brand's online visibility.",
  rootClassName: '',
  action2: 'Learn More',
  video1Src:
    'https://videos.pexels.com/video-files/905049/905049-hd_1920_1080_30fps.mp4',
  video1Poster:
    'https://images.pexels.com/videos/905049/pictures/preview-0.jpg',
  placeholderImageSrc:
    'https://images.unsplash.com/photo-1555421689-d68471e189f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM4MTk5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Get Started',
  heading1: 'Enhance Your Digital Presence',
}

Hero5.propTypes = {
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
  action2: PropTypes.string,
  video1Src: PropTypes.string,
  video1Poster: PropTypes.string,
  placeholderImageSrc: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero5
