import { adviceGen } from './src/advice-generator/advice-app';
import './style.css'
import './queries.css'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>

    <div class="card"> </div>

  </div>
`

const element = document.querySelector('.card');
adviceGen(element);