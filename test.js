// Include Lightbox 
import PhotoSwipeLightbox from './node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '.badges',

  // Elements within gallery (slides)
  arrowPrevSVG: "",
  arrowNextSVG:"",
  children: 'a',
  imageClickAction: 'next',
  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import("./node_modules/photoswipe/dist/photoswipe.esm.js")
});
lightbox.init();