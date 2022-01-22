import ReactDOM from 'react-dom'
import AppComponent from '../components/App'

class AppElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<AppComponent />, this)
  }
}

customElements.define('react-app', AppElement)
