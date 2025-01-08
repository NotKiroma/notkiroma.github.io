import './style.css'
import './media.css'
import carousel from './carousel.js';

new carousel(document.querySelector('#one'));
new carousel(document.querySelector('#two'), "top");
new carousel(document.querySelector('#three'), "bottom");