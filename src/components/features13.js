import React from 'react'

import PropTypes from 'prop-types'

import './features13.css'

const Features13 = (props) => {
  return (
    <div className="features13-layout226 thq-section-padding">
      <div className="features13-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-4-3"
          />
          <div className="thq-flex-column">
            <div className="thq-flex-column features13-content">
              <h3 className="features13-title1 Card-Heading thq-heading-3">
                150+
              </h3>
              <span className="features13-description1 thq-body-small">
                <span>Websites Created</span>
                <br></br>
              </span>
            </div>
            <div className="thq-flex-row features13-actions"></div>
          </div>
        </div>
        <div className="thq-flex-column">
          <img
            alt={props.feature2ImageAlt}
            src={props.feature2ImageSrc}
            className="thq-img-ratio-4-3"
          />
          <div className="thq-flex-column">
            <div className="thq-flex-column">
              <h3 className="features13-title2 thq-heading-3 Card-Heading">
                20+
              </h3>
              <span className="features13-description2 thq-body-small">
                Successful Email Campaigns Launched and Managed
              </span>
            </div>
            <div className="thq-flex-row features13-actions1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features13.defaultProps = {
  feature1SecondaryAction: 'Contact Us',
  feature2Slogan: 'Connect with your audience',
  title1: 'Professional Website Management',
  feature1MainAction: 'Learn More',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM3ODAxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    "Our team will create and implement social media campaigns to boost your brand's visibility and engagement.",
  feature1Slogan: 'Enhance your online presence',
  feature2MainAction: 'Explore Services',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM3ODAxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Engaging Social Media Strategies',
  feature2ImageAlt: 'Engaging Social Media Strategies Image',
  feature1ImageAlt: 'Professional Website Management Image',
  feature2Action2: 'View Packages',
  feature1Description:
    'Let our experts take care of your website maintenance, updates, and optimization so you can focus on your business.',
  feature1Title: 'Professional Website Management',
}

Features13.propTypes = {
  feature1SecondaryAction: PropTypes.string,
  feature2Slogan: PropTypes.string,
  title1: PropTypes.string,
  feature1MainAction: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature2MainAction: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Action2: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features13
