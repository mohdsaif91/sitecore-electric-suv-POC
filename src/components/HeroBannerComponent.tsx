import {
  Field,
  ImageField,
  NextImage,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import HBCCSS from './HeroBannerComponent.module.css';

interface buttonItems {
  fields: {
    label: Field<string>;
    url: Field<string>;
  };
}

interface bannerItems {
  fields: {
    mediaType: Field<string>;
    media: ImageField;
    mediaMobile: ImageField;
    mediaText: Field<string>;
    buttonList: buttonItems[];
  };
}

type HeroBannerComponentProps = ComponentProps & {
  fields: {
    bannerImage: ImageField;
    bannerImageMobile: ImageField;
    bannerList: bannerItems[];
  };
};

const HeroBannerComponent = (props: HeroBannerComponentProps): JSX.Element => {
  return (
    <section>
      {props.fields.bannerList.map((m: bannerItems, index: number) => {
        return (
          <div key={index} className={` ${HBCCSS.vh100} display-block`}>
            <NextImage
              priority
              alt="Group Hero Shot"
              // layout="fill"
              height={700}
              width={100}
              field={m.fields.media || ''}
            />
          </div>
        );
      })}
    </section>
  );
};
export default withDatasourceCheck()<HeroBannerComponentProps>(HeroBannerComponent);
