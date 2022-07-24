// MenuInterface.js
class MenuInterface {
  constructor() {
    if(!this.getItems) {
      throw new Error("Menu's must have items!");
    }
  }
}

// ---

// file index.js
import MenuInterface from './MenuInterface';

class Menu extends MenuInterface {
  // no items
}
export default new Menu() // Error "Menu's must have items!"


// ---

// file  baseMenu.js
class BaseMenu extends MenuInterface {
  constructor() {
    super();
    this.items = [];
  }
  get getItems() {
    return items;
  }
}

export default new BaseMenu();  // No Error, has the method
