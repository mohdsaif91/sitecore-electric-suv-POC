import { useState } from 'react';
import { Text, Field, withDatasourceCheck, ImageField, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

import GCCSS from './GalleryComponent.module.css';

interface galleryItemList {
  fields: {
    galleryImage: ImageField;
  };
}

type GalleryComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    previousIcon: ImageField;
    nextIcon: ImageField;
    carImageListSlide: galleryItemList[];
  };
};

const GalleryComponent = (props: GalleryComponentProps): JSX.Element => {
  const [slideImage, setSlideImage] = useState(0);

  const changeImage = (index: number) => {
    setSlideImage(index);
  };

  return (
    <Container fluid className="gallery-container">
      <section id="gallery">
        <Row className="gallery-row">
          <Col>
            <span className="gallery-text">
              <Text field={props.fields.heading} />
            </span>
          </Col>
          <Col lg="12">
            <div className="scroll-container">
              <div className="scroll-left"></div>
              <div className="scroll-right"></div>
              <div className="image-conatiner-main">
                <Carousel
                  activeIndex={slideImage}
                  onSlid={(d) => setSlideImage(d)}
                  onSelect={(selectedIndex) => setSlideImage(selectedIndex)}
                >
                  {props.fields.carImageListSlide.map((m: galleryItemList, index: number) => (
                    <Carousel.Item key={index}>
                      <NextImage
                        className="car-img"
                        field = {m.fields.galleryImage}
                        alt="Mahindra"
                        loading="lazy"
                        width={1500} 
                        height={700}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </Col>
          <Col lg="12" className="allImageContainerArrow">
            <div className={`${GCCSS.galleryBtnContainer}`}>
              <NextImage
                className="c-p"
                onClick={() => {
                  if (slideImage > 0) {
                    setSlideImage(slideImage - 1);
                  }
                }}
                field = {props.fields.previousIcon}
                alt="Mahindra"
                loading="lazy"
                width={80}
                height={90}
              />
              <NextImage
                className="c-p"
                onClick={() => {
                  if (props.fields.carImageListSlide.length - 1 > slideImage) {
                    setSlideImage(slideImage + 1);
                  }
                }}
                field = {props.fields.nextIcon}
                alt="Mahindra"
                loading="lazy"
                width={80}
                height={90}
              />
            </div>
          </Col>
          <Col lg="12" className="all-image-container-main">
            <div className="all-image-container">
              {props.fields.carImageListSlide.map((m: galleryItemList, index: number) => {
                return (
                  <NextImage
                    key={index}
                    className="car-img"
                    onClick={() => changeImage(index)}
                    field = {m.fields.galleryImage}
                    alt="Mahindra"
                    loading="lazy"
                    width={250}
                    height={200}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default withDatasourceCheck()<GalleryComponentProps>(GalleryComponent);
