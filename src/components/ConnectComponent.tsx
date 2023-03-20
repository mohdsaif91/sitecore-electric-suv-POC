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

let oldScrollY = 0;

const ConnectComponent = (props: ConnectComponentProps): JSX.Element => {
  const [scrollY, setScrollY] = useState(0);
  const [render, setRender] = useState(false);
  let refNumber = 0;

  useEffect(() => {
    return () => {
      setRender(false);
    };
  }, []);

  const handleScroll = () => {
    const connectElement = document.querySelector('#connect');
    const connectElementPosition: any = connectElement?.getBoundingClientRect();

    if (connectElementPosition.top < window.innerHeight && connectElementPosition.bottom >= 0) {
      if (!render) {
        setRender(true);
      }
    }

    if (window.scrollY > oldScrollY) {
      if (16 > refNumber) {
        refNumber++;
        setScrollY(refNumber);
      }
    } else {
      if (refNumber > -18) {
        refNumber--;
        setScrollY(refNumber);
      }
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
                style={{ transform: `translate3d(0px, ${scrollY}%, 0px)` }}
                className="right-image"
                field={props.fields.rightImage || ''}
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
