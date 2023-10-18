import Component from "../Component/Component.js";

class App extends Component {
  protected populate(): void {
    this.element.innerHTML = `
    <ul class="characters-list row list-unstyled">
    </ul>
    
    `;
  }
}

export default App;
