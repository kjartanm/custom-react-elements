import Module1Rendrer from './Module1Rendrer';

class ReactModule1Component extends HTMLElement {
    connectedCallback() {
        Module1Rendrer(this);
    }
}
customElements.define('react-module1', ReactModule1Component);

