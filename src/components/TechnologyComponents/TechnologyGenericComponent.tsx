import { Text, Field, RichText, ImageField, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { Col, Row } from 'react-bootstrap';

import TGCCSS from './TechnologyGenericComponent.module.css';

interface platformImageItem {
  fields: {
    imgWithTitle: Field<string>;
    imgWithDec: Field<string>;
    imgWithDecImg: ImageField;
  };
}

type platformProps = {
  flag: boolean;
  closeIcon: ImageField;
  onClose: any;
  title: Field<string>;
  platformMainTitle: Field<string>;
  platformText1: Field<string>;
  descritpion: Field<string>;
  listItem: platformImageItem[];
};

const TechnologyGenericComponent = (props: platformProps): JSX.Element => {
  return (
    <div
      className={`${TGCCSS.platformContainer} technology-transition ${
        props.flag ? '' : 'is-hidden'
      }`}
    >
      <NextImage
        className="close-icon"
        field = {props.closeIcon}
        onClick={() => props.onClose()}
        alt="close"
        loading="lazy"
        height={90}
        width={90}
      />
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="card-with-image-heading heading is-view">
            <span className={`${TGCCSS.isView}`}>
              <Text field={props.title}></Text>
            </span>
          </div>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <h3 className="platform-main-title">
            <Text field={props.platformMainTitle}></Text>
          </h3>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <div className={`${TGCCSS.technologyDescritpion}`}>
            <RichText field={props.descritpion} />
          </div>
        </Col>
      </Row>
      <div className="platform-text-1">
        <Text field={props.platformText1}></Text>
      </div>
      {props.listItem.map((m: platformImageItem, index) => (
        <div className="img-with-dec" key={index}>
          <div className="image-with-dec-title h4">
            <Text field={m.fields.imgWithTitle}></Text>
          </div>
          <div className="image-with-dec-dec">
            <Text field={m.fields.imgWithDec}></Text>
          </div>
          <figure className="platform-figure">
            <NextImage className="dec-img" 
              field = {m.fields.imgWithDecImg}
              height={600}
              width={800}
              alt="Mahindra"
              loading="lazy" />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default TechnologyGenericComponent;
