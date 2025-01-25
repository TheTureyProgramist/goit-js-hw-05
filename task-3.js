class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const itemIndex = this.items.indexOf(item);
    if (itemIndex !== 0) {
      this.items.splice(itemIndex, 1);
    }
  }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.log(items); 
storage.addItem('Дроїд');
console.log(storage.items); 
storage.removeItem('Пролонгер');
console.log(storage.items); 