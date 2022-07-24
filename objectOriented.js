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


//---------------------
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'Documents');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});
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
