import { Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Row } from 'react-bootstrap';

import MediaComponent from './MediaComponent';

interface mediaList {
  image: ImageField;
  date: Field<string>;
  desc: Field<string>;
  url: Field<string>;
}

type MediaRoomComponentProps = ComponentProps & {
  fields: {
    title: Field<string>;
    mediaList: mediaList[];
  };
};

const MediaRoomComponent = (props: MediaRoomComponentProps): JSX.Element => (
  <div className="media-room-container">
    <section id="mediaroom">
      <div className="media-body-push">
        <Row className="media-row">
          <Col lg="12" className="media-heading-text">
            <h2 className="media-room-text">{props.fields.title.value}</h2>
          </Col>
        </Row>
        <Row className="media-row">
          <Col className="media-image-container">
            {props.fields.mediaList.map((_media: any, index) => {
              return (
                <MediaComponent
                  key={index}
                  image={_media.fields.image}
                  date={_media.fields.date}
                  desc={_media.fields.desc}
                  url={_media.fields.url}
                />
              );
            })}
          </Col>
        </Row>
      </div>
    </section>
  </div>
);

export default withDatasourceCheck()<MediaRoomComponentProps>(MediaRoomComponent);
