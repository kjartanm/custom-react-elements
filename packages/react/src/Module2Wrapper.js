import Module2Rendrer from './Module2Rendrer';

class ReactModule2Component extends HTMLElement {
    connectedCallback() {
        Module2Rendrer(this);
    }
}
customElements.define('react-module2', ReactModule2Component);

