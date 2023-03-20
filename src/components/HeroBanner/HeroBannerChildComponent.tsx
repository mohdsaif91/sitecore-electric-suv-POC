import { Field, RichText, ImageField, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useState } from 'react';

import HBCCSS from '../HeroBannerComponent.module.css';

interface buttonItem {
  fields: {
    label: Field<string>;
    url: Field<string>;
  };
}

type Props = {
  mediaType: Field<string>;
  media: ImageField;
  mediaMobile: ImageField;
  mediaText: Field<string>;
  buttonItems: buttonItem[];
  render: boolean;
  changeRender: any;
};

const HeroBannerChildComponent: React.FunctionComponent<Props> = (props: Props) => {
  const [mobile, setMobile] = useState(false);
  const [renderTyping, setRenderTyping] = useState(true);

  useEffect(() => {

    // if (props.render) {
    //  props.changeRender(false);
    // setRenderTyping(false);
    //}

    if (typeof window !== 'undefined') {
      setMobile(window.innerWidth < window.innerHeight);
    }
  }, []);

  useEffect(() => {
    if (props.mediaType.value === 'video') {
      const heroChildElement = document.querySelector('#heroChildComponent');
      const heroElementPosition: any = heroChildElement?.getBoundingClientRect();
      if (heroElementPosition.top < window.innerHeight && heroElementPosition.bottom >= 0) {
        if (props.render) {
          props.changeRender(false);
          setRenderTyping(false);
        }
      }
    }
  }, [props.mediaType.value]);

  return (
    <>
      {props.mediaType.value === 'image' ? (
        <div className={`${HBCCSS.heroContainer} ${HBCCSS.vh100}`}>
          <NextImage
            field = {mobile ? props.mediaMobile || '' : props.media || ''}
            layout="fill" 
            width={100} 
            objectFit="contain" 
            loading="lazy"
          />
          {/* <div className={`${HBCCSS.backgroundImage}`}>
            <div
              className={` ${HBCCSS.banner} vw-100 `}
              style={{
                backgroundImage: `url(${
                  mobile ? props.mediaMobile.value?.src : props.media.value?.src
                })`,
              }}
            >
              <div className={`${HBCCSS.richTextBodyWrapper} ${HBCCSS.richTextBodyWrapperImage}`}>
                <div className={`${HBCCSS.richTextContainer}`}>
                  <RichText field={props.mediaText} />
                  <div
                    className={`${HBCCSS.bannergrid} ${HBCCSS.bannerImageGrid} btn-group`}
                    role="group"
                    aria-label="Basic example"
                  >
                    {props.buttonItems.map((item, index) => {
                      return (
                        <button className="" key={index}>
                          {item.fields.label.value}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      ) : (
        <div className={`${HBCCSS.heroContainer} ${HBCCSS.vh100}`} id="heroChildComponent">
          <div className={`${HBCCSS.backgroundImage} ${HBCCSS.backgroundVideoPosition}`}>
            <video
              preload="auto"
              loop={true}
              autoPlay={true}
              muted={true}
              className={`${HBCCSS.heroVideo}`}
            >
              <source src={`${props.media.value?.src}`} type="video/webm" />
            </video>
          </div>
          <div className={`${HBCCSS.banner}`}>
            <div className={`${HBCCSS.richTextBodyWrapper} ${HBCCSS.richTextBodyWrapperVideo}`}>
              <div className={`${HBCCSS.richTextContainer} `}>
                <div className={`${renderTyping ? 'typingDemo' : ''}`}>
                  <RichText field={props.mediaText} />
                </div>
                <div
                  className={`${HBCCSS.bannergrid} ${HBCCSS.bannerVideoGrid} btn-group`}
                  role="group"
                  aria-label="Basic example"
                >
                  {props.buttonItems.map((item, index) => {
                    return (
                      <button className="hero-btn" key={index}>
                        {item.fields.label.value}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBannerChildComponent;
