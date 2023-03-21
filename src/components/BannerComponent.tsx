import {
  Field,
  ImageField,
  NextImage,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
// import Image from 'next/image';

type BannerComponentProps = ComponentProps & {
  fields: {
    bannerImage: ImageField;
    title: Field<string>;
  };
};

const BannerComponent = (props: BannerComponentProps): JSX.Element => (
  <>
    <div className="separator is-inview" data-intersecting="0.13385812938213348">
      <section className="promo-panel no-pad-bottom no-pad-top" id="esuvs">
        <span className="wide-title">{props.fields.title.value}</span>
        <div className="relative-wrapper">
          <div className="background-image">
            <figure className="banner-image-container">
              <NextImage
                className="banner-image"
                priority
                alt="Group Hero Shot"
                width="1400"
                height="972"
                field={props.fields.bannerImage}
              ></NextImage>
            </figure>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default withDatasourceCheck()<BannerComponentProps>(BannerComponent);
