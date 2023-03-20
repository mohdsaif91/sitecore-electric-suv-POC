import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type BrandsComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const BrandsComponent = (props: BrandsComponentProps): JSX.Element => (
  <div>
    <p>BrandsComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<BrandsComponentProps>(BrandsComponent);
