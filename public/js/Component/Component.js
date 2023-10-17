class Component {
  element;
  parentElement;
  constructor(parentElement, tagName, className) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
  }
  render() {
    this.parentElement.appendChild(this.element);
    this.populate();
  }
}
export default Component;
//# sourceMappingURL=Component.js.map
