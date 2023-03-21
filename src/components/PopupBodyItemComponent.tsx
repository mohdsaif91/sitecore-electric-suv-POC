import { Text, Field, withDatasourceCheck, ImageField, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type PopupBodyItemComponentProps = ComponentProps & {
  fields: {
    header: Field<string>;
    body: Field<string>;
    image: ImageField;
    imageAltText: Field<string>;
  };
};

const PopupBodyItemComponent = (props: PopupBodyItemComponentProps): JSX.Element => (
  <div>
    <div className="is-view">
      <Text field={props.fields.header}></Text>
    </div>
    <br></br>
    <div className="card-text">
      <Text field={props.fields.body} />
    </div>
    <div className="card-text">
      <NextImage 
        field = {props.fields.image} 
        alt={props.fields.imageAltText.value} 
        loading="lazy" />
    </div>
  </div>
);

export default withDatasourceCheck()<PopupBodyItemComponentProps>(PopupBodyItemComponent);
