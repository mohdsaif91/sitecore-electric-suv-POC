import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function MahindraHeaderItemTemplate(manifest: Manifest): void {
  manifest.addTemplate({
    name: 'MahindraSuv-Header-Item-template',
    fields: [
      { name: 'label', type: CommonFieldTypes.SingleLineText },
      { name: 'url', type: CommonFieldTypes.SingleLineText },
      { name: 'formHeader', type: CommonFieldTypes.SingleLineText },
      { name: 'formBody', type: CommonFieldTypes.SingleLineText },
      { name: 'checkboxItems', type: CommonFieldTypes.ContentList },
    ],
  });
}
