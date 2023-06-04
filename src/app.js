import { plus } from "./plus.js";
import './styles.css';
import tiger from './images/tiger.png'
import rabbit from './images/rabbit.png'

console.log(plus(10, 3));

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${rabbit}">`;
})