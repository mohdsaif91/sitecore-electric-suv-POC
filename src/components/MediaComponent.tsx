import { Field, ImageField, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';

type MediaComponentProps = {
  image: ImageField;
  date: Field<string>;
  desc: Field<string>;
  url: Field<string>;
};

const MediaComponent = (props: MediaComponentProps): JSX.Element => (
  <a
    href={`${props.url.value}`}
    className="media-column aos-init aos-animate"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out-cubic"
    data-aos-delay="250"
  >
    <div className="image-container">
      <figure className="media-figure">
        <NextImage
          className="main-img"
          loading="lazy"
          sizes="(-webkit-min-device-pixel-ratio: 2) 150vw, (min-resolution: 192dpi) 150vw, 100vw"
          field = {props.image}
          alt={'Image'} 
          height="16%" 
          width="25%"
        />
      </figure>
    </div>
    <p className="media-date">{props.date.value}</p>
    <h3 className="media-dec">{props.desc.value}</h3>
  </a>
);

export default MediaComponent;
