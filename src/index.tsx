import { render } from 'preact'

const target = document.querySelector('body')
const App = () => <div>comp.</div>
if (target !== null) render(<App />, target)

