// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the PopupBodyItemComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function PopupBodyItemComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'PopupBodyItemComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'header', type: CommonFieldTypes.SingleLineText },
      { name: 'body', type: CommonFieldTypes.SingleLineText },
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'imageAltText', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
