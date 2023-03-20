// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the HeaderComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function HeaderComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'HeaderComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'menuItems', type: CommonFieldTypes.ContentList },
      { name: 'formHeader', type: CommonFieldTypes.RichText },
      { name: 'formBody', type: CommonFieldTypes.SingleLineText },
      { name: 'checkboxItems', type: CommonFieldTypes.ContentList },
      { name: 'logo', type: CommonFieldTypes.Image },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
