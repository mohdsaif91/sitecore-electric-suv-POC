import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function MahindraGalleryItemTemplate(manifest: Manifest): void {
  manifest.addTemplate({
    name: 'MahindraSuv-Technology-Item-Template',
    fields: [
      { name: 'imgWithTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDecImg', type: CommonFieldTypes.Image },
    ],
  });
}
