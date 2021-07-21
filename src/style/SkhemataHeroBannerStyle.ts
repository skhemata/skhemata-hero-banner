import { css } from '@skhemata/skhemata-base';

export const SkhemataHeroBannerStyle = css`
  html {
    --theme-primary: rgb(0, 209, 178, 1);
    --theme-gradient-left: rgba(0,181,173,1);
    --theme-gradient-right: rgba(2,170,157,1);
  }

  section {
    --skemata-hereo-banner-background-color: var(--theme-primary);
    --skemata-hereo-banner-gradient-left: var(--theme-gradient-left);
    --skemata-hereo-banner-gradient-right: var(--theme-gradient-right);
  }

  div {
        padding-left: 3rem;
        padding-right: 4rem;
      }
  .hero-body {
      padding-left: 0px;
      padding-right: 0px;
  }

  .hero {
      padding: 9rem 1.5rem;
  }

  .hero-body > .title, .hero-body > .subtitle {
      text-align: center;
      width: 100%;
  }

  .hero-body > p {
      width: 100%;
      padding-left: 0px;
      padding-right: 0px;
  }
  section > * {
      max-width: 600px;
      margin-right: auto;
      margin-left: auto;
  }

  .hero.is-primary {
  color: #fff;
  }

`;
