class Hamburger {
  constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
  }

  addTopping(topping) {
      this.toppings.push(topping);
  }

  calculatePrice() {
      let totalPrice = this.size.price + this.stuffing.price;
      for (const topping of this.toppings) {
          totalPrice += topping.price;
      }
      return totalPrice;
  }

  calculateCalories() {
      let totalCalories = this.size.calories + this.stuffing.calories;
      for (const topping of this.toppings) {
          totalCalories += topping.calories;
      }
      return totalCalories;
  }
}


const Sizes = {
  SMALL: { price: 50, calories: 20 },
  LARGE: { price: 100, calories: 40 }
};

const Stuffings = {
  CHEESE: { price: 10, calories: 20 },
  SALAD: { price: 20, calories: 5 },
  POTATO: { price: 15, calories: 10 }
};

const Toppings = {
  SPICE: { price: 15, calories: 0 },
  MAYO: { price: 20, calories: 5 }
};


const myHamburger = new Hamburger(Sizes.SMALL, Stuffings.CHEESE);
myHamburger.addTopping(Toppings.SPICE);
myHamburger.addTopping(Toppings.MAYO);


const totalPrice = myHamburger.calculatePrice();
const totalCalories = myHamburger.calculateCalories();

console.log(`Total Price: ${totalPrice} turgics`);
console.log(`Total Calories: ${totalCalories} calories`);
