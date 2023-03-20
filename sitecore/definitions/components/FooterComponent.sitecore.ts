// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the FooterComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function FooterComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'FooterComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'copyright', type: CommonFieldTypes.SingleLineText },
      { name: 'footList', type: CommonFieldTypes.ContentList },
      { name: 'logo', type: CommonFieldTypes.Image },

  ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
