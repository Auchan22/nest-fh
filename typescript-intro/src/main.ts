import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { cokemones, pokemon} from './bases/02-objects.ts'
import { ricardo } from './bases/03-classes.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Cokemones: ${ricardo.getName}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <ul>
    ${cokemones.map((c) => `<li>${c.name} | ${c.health}</li>`)}
    </ul>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
