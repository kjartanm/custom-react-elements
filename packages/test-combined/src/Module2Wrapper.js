import Module2Rendrer from './Module2Rendrer';

class ReactModule2Component extends HTMLElement {
    connectedCallback() {
        console.log(Module2Rendrer(this));
    }
}
customElements.define('react-test-module2', ReactModule2Component);

