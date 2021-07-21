import { html, property, css, SkhemataBase, CSSResult } from '@skhemata/skhemata-base';
// eslint-disable-next-line import/extensions
import { SkhemataHeroBannerStyle } from './style/SkhemataHeroBannerStyle';
// eslint-disable-next-line import/extensions
import { translationEngDefault } from './translation/SkhemataHeroBanner/eng';

export class SkhemataHeroBanner extends SkhemataBase {

  @property({ type: Object })
  translationData = {
    eng: translationEngDefault,
  };

  static get styles() {
    return <CSSResult[]>[
      ...super.styles,
      SkhemataHeroBannerStyle,
      css`
       section {
        background: var(--skemata-hero-banner-background-color, rgb(0, 209, 178, 1)) !important;
        background: linear-gradient(222deg,  var(--skemata-hero-banner-gradient-left, rgba(0,181,173,1)) 48%,  var(--skemata-hero-banner-gradient-right, rgba(2,170,157,1)) calc(48% + 1px),  var(--skemata-hero-banner-gradient-left, rgba(0,181,173,1)) 100%) !important;
      }
      `
    ];
  }

  render() {
    return html`
    <section class="hero is-primary section is-medium">
      <h1 class="title">
        ${this.getStr('title') ? html`${this.getStr('title')}` : html`${this.configData.title}`}
      </h1>
      <div class="container">
        <h2 class="subtitle">
           ${this.getStr('subtitle') ? html`${this.getStr('subtitle')}` : html`${this.configData.subtitle}`}
        </h2>
      </div>
    </section>
    `;
  }
}
