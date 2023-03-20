import { useEffect, useState } from 'react';
import { Field, RichText, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Col, Row } from 'react-bootstrap';

import TCCCSS from './TwoColumnComponent.module.css';

type TwoColumnComponentProps = ComponentProps & {
  fields: {
    id: Field<string>;
    heading: Field<string>;
    body: Field<string>;
    backgroundColor: Field<string>;
    fontColor: Field<string>;
    mobileHeading: Field<string>;
  };
};

const TwoColumnComponent = (props: TwoColumnComponentProps): JSX.Element => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    Aos.init();
    if (typeof window !== 'undefined') {
      setMobile(window.innerWidth < 450);
    }
  }, []);

  return (
    <section id={props.fields.id.value}>
      <div
        className={`${TCCCSS.twoColContainer} container-fluid`}
        style={{ backgroundColor: props.fields.backgroundColor.value }}
      >
        <div className={`container-fluid  d-flex ${TCCCSS.vh100}`}>
          <Row className={`${TCCCSS.twoColRow}`} data-aos-delay="500" data-aos="fade-up">
            <Col
              lg={6}
              md={6}
              sm={12}
              className={`d-flex align-items-start ${TCCCSS.twoColBrandsHheading}`}
            >
              <div className="d-flex align-items-start">
                <h1
                  className={`${TCCCSS.twoColHead}`}
                  style={{ color: props.fields.fontColor.value }}
                >
                  <RichText field={mobile ? props.fields.mobileHeading : props.fields.heading} />
                </h1>
              </div>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              className={`${TCCCSS.twoColDescriptionCol} col-lg-6 col-md-6 col-sm-12 d-flex align-items-start`}
            >
              <div
                className={`${TCCCSS.headingAlignment} d-flex align-items-start w-75`}
                style={{ color: props.fields.fontColor.value }}
              >
                <RichText field={props.fields.body} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<TwoColumnComponentProps>(TwoColumnComponent);
