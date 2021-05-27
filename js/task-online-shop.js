const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    const item = this.items[i];
    for (let i = 0; i < this.items.length; i += 1) {
      console.log(this.items[i]);

      if (productName === this.items[i].name) {
        console.log("нашли такой продукт", productName);
      }
    }
  },
  clear() {},
  countTotalPrice() {},
};

console.log(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });

console.table(cart.getItems());

cart.remove("🍎");
