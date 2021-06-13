const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      console.log(item);

      if (item.name === product.name) {
        item.quantity += 1;
        // console.log("Такой продукт уже есть:", product.name);
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      if (productName === item.name) {
        console.log("Нашли такой продукт:", productName);
        console.log("индекс:", i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;

    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
};

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });

console.table(cart.getItems());

console.log("Total:", cart.countTotalPrice()); // общая сумма

cart.remove("🍋"); // удаление продукта с корзины
console.table(cart.getItems());

console.log("Total:", cart.countTotalPrice()); // общая сумма

cart.clear(); // очистка корзины
console.log(cart.getItems());

console.log("Total:", cart.countTotalPrice()); // общая сумма
