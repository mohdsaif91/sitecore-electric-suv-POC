// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ConnectComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function ConnectComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'ConnectComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'sectionHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'heading', type: CommonFieldTypes.RichText },
      { name: 'rightImage', type: CommonFieldTypes.Image },
      { name: 'body', type: CommonFieldTypes.RichText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
