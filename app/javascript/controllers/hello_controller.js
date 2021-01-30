// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["output"];

  connect() {
    console.log("Connecting");
    this.outputTarget.innerHTML += "<p>Hello, Stimulus!</p>";

    if (this.isPreview) {
      console.log("Connecting from a preview");
    }
  }

  disconnect() {
    console.log("Disconnecting");
    const child = this.outputTarget.firstChild;
    this.outputTarget.removeChild(child);
  }

  get isPreview() {
    return document.documentElement.hasAttribute("data-turbo-preview");
  }
}
