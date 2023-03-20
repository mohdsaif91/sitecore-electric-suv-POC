import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function StyleguideContentListItemTemplate(manifest: Manifest): void {
  manifest.addTemplate({
    name: 'MahindraSuv-Media-Room-Item-Template',
    fields: [
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'date', type: CommonFieldTypes.SingleLineText },
      { name: 'desc', type: CommonFieldTypes.RichText },
      { name: 'url', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
