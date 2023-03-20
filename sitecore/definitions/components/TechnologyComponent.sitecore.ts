// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the TechnologyComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function TechnologyComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'TechnologyComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'graphicImage', type: CommonFieldTypes.Image },
      { name: 'subheading', type: CommonFieldTypes.SingleLineText },
      { name: 'body', type: CommonFieldTypes.MultiLineText },
      { name: 'bodyimg', type: CommonFieldTypes.Image },
      { name: 'tabletbodyimg', type: CommonFieldTypes.Image },
      { name: 'closeIcon', type: CommonFieldTypes.Image },
      { name: 'platFormTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'platformMainTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'platformDescription', type: CommonFieldTypes.RichText },
      { name: 'platformList', type: CommonFieldTypes.ContentList },
      { name: 'platformText1', type: CommonFieldTypes.MultiLineText },
      { name: 'hmiTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiMainTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiText1', type: CommonFieldTypes.MultiLineText },
      { name: 'hmiDescription', type: CommonFieldTypes.RichText },
      { name: 'hmiList', type: CommonFieldTypes.ContentList },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
