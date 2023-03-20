// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the PopupHeaderComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function PopupHeaderComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'PopupHeaderComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'shortHeader', type: CommonFieldTypes.SingleLineText },
      { name: 'header', type: CommonFieldTypes.SingleLineText },
      { name: 'body', type: CommonFieldTypes.MultiLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
