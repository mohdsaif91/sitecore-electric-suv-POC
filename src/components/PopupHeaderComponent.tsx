import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type PopupHeaderComponentProps = ComponentProps & {
  fields: {
    shortHeader: Field<string>;
    header: Field<string>;
    body: Field<string>;
  };
};

const PopupHeaderComponent = (props: PopupHeaderComponentProps): JSX.Element => (
  <div>
    <div className="is-view">
      <Text field={props.fields.shortHeader}></Text>
    </div>
    <br></br>
    <div className="card-text">
      <Text field={props.fields.header} />
    </div>
    <div className="card-text">
      <Text field={props.fields.body} />
    </div>
  </div>
);

export default withDatasourceCheck()<PopupHeaderComponentProps>(PopupHeaderComponent);
