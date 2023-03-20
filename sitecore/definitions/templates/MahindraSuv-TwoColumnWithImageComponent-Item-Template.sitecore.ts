import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function StyleguideContentListItemTemplate(manifest: Manifest): void {
  manifest.addTemplate({
    name: 'MahindraSuv-TwoColumnWithImageComponent-Item-Template',
    fields: [
      { name: 'cardText', type: CommonFieldTypes.SingleLineText },
      { name: 'cardIcon', type: CommonFieldTypes.Image },
      { name: 'cardImage', type: CommonFieldTypes.Image },
    ],
  });
}
