
import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm'

import "./main.scss";

document.addEventListener("DOMContentLoaded", function(event) { 
  // Product Slider
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 2
  }).mount({ Controls })
});
