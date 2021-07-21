import { html, TemplateResult } from '@skhemata/skhemata-base';
import '../skhemata-hero-banner.js';

export default {
  title: 'General/SkhemataHeroBanner',
  component: 'skhemata-hero-banner',
  argTypes: {
    configData: {
      table: {
        category: 'HTML Attributes',
      },
      control: 'object',
      description: 'Configurable data object',
    },
    background: {
      table: {
        category: 'CSS Properties',
      },
      control: 'color',
      description: 'CSS Background Colour',
      name: '--skhemata-hero-banner-background',
    },
    gradientLeft: {
      table: {
        category: 'CSS Properties',
      },
      control: 'color',
      description: 'CSS Background Gradient Colour Left',
      name: '--skhemata-hero-banner-gradient-left',
    },
    gradientRight: {
      table: {
        category: 'CSS Properties',
      },
      control: 'color',
      description: 'CSS Background Gradient Colour Right',
      name: '--skhemata-hero-banner-gradient-right',
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
  parameters?: any;
}

interface ArgTypes {
  configData?: object;
  background?: string;
  gradientLeft?: string;
  gradientRight?: string;
}

const Template: Story<ArgTypes> = ({
  configData = {},
  background,
  gradientLeft,
  gradientRight,
}: ArgTypes) => html`
  <skhemata-hero-banner
    .configData=${configData}
    style="
      --skhemata-hero-banner-background: ${background || 'rgb(0, 209, 178, 1)'};
      --skhemata-hero-banner-gradient-left: ${gradientLeft ||
    'rgba(0,181,173,1)'};
      --skhemata-hero-banner-gradient-right: ${gradientRight ||
    'rgba(2,170,157,1)'};
    "
  >
  </skhemata-hero-banner>
`;

export const Regular = Template.bind({});
Regular.args = {
  configData: {
    title: 'Hero Title',
    subtitle: 'Hero Subtitle',
  },
  background: 'rgb(0, 209, 178, 1)',
  gradientLeft: 'rgba(0,181,173,1)',
  gradientRight: 'rgba(0,181,173,1)',
};
Regular.parameters = {
  source: {
    code: `<skhemata-hero-banner config-data="${JSON.stringify(
      Regular.args.configData,
      null,
      2
    )}"></skhemata-hero-banner>`,
  },
};
