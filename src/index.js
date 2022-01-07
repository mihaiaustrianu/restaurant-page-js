import "./global.css"
import {headlineGenerator,containerGenerator, containersGenerator} from "./home";


let content = document.querySelector('.content')
content.appendChild(headlineGenerator());
content.appendChild(containersGenerator());