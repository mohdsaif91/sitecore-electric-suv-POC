// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the MediaComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function MediaComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'MediaComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'date', type: CommonFieldTypes.SingleLineText },
      { name: 'desc', type: CommonFieldTypes.SingleLineText },
      { name: 'url', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
