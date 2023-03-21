import { useEffect, useState } from 'react';
import {
  Text,
  Field,
  withDatasourceCheck,
  RichText,
  ImageField,
  NextImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Row } from 'react-bootstrap';

type ConnectComponentProps = ComponentProps & {
  fields: {
    sectionHeading: Field<string>;
    heading: Field<string>;
    rightImage: ImageField;
    body: Field<string>;
  };
};


const ConnectComponent = (props: ConnectComponentProps): JSX.Element => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    return () => {
      setRender(false);
    };
  }, []);

  return (
    <section id="connect">
      <div className="connect-container">
        <Row className="connect-row">
          <Col lg="5" sm="12" md="6" className="text-column">
            <span className="connect-heading is-view">
              <Text field={props.fields.sectionHeading} />
            </span>
            <h1 className="h1">
              <span className={`h1-text ${render ? 'typingDemo' : ''}`}>
                <RichText field={props.fields.heading} />
              </span>
            </h1>
            <div className="connect-body">
              <Text field={props.fields.body} />
            </div>
          </Col>
          <Col lg="7" md="6" sm="12" className="right-image-container">
            <figure className="connect-figure rellax">
              <NextImage
                className="right-image"
                field = {props.fields.rightImage || ''}
                alt="Mahindra"
                loading="lazy"
                layout="fill"
              />
            </figure>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<ConnectComponentProps>(ConnectComponent);
