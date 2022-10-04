import './style.css'
import { setupCounter } from 'lib/counter2.js'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>ts-mocha boilerplate with aliases</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
