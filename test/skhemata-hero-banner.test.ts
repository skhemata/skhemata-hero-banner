// import { html, fixture, expect } from '@open-wc/testing';

// import { SkhemataHeroBanner } from '../src/SkhemataHeroBanner.js';
// import '../skhemata-hero-banner.js';

// describe('SkhemataHeroBanner', () => {
//   it('has a default title "Hey there" and counter 5', async () => {
//     const el = await fixture<SkhemataHeroBanner>(html`<skhemata-hero-banner></skhemata-hero-banner>`);

//     expect(el.title).to.equal('Hey there');
//     expect(el.counter).to.equal(5);
//   });

//   it('increases the counter on button click', async () => {
//     const el = await fixture<SkhemataHeroBanner>(html`<skhemata-hero-banner></skhemata-hero-banner>`);
//     el.shadowRoot!.querySelector('button')!.click();

//     expect(el.counter).to.equal(6);
//   });

//   it('can override the title via attribute', async () => {
//     const el = await fixture<SkhemataHeroBanner>(html`<skhemata-hero-banner title="attribute title"></skhemata-hero-banner>`);

//     expect(el.title).to.equal('attribute title');
//   });

//   it('passes the a11y audit', async () => {
//     const el = await fixture<SkhemataHeroBanner>(html`<skhemata-hero-banner></skhemata-hero-banner>`);

//     await expect(el).shadowDom.to.be.accessible();
//   });
// });
