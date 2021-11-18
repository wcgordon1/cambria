const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizersIn) {
      this._courses.appetizers = appetizersIn;
    },
    set mains(mainsIn) {
      this._courses.mains = mainsIn;
    },
    set desserts(dessertsIn) {
      this._courses.desserts = dessertsIn;
    },
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + mains.price + desserts.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ... The price is ${totalPrice}.`;
    },
  }


menu.addDishToCourse('appetizers', 'tots', 4.00);
  menu.addDishToCourse('appetizers', 'wings', 5.00);
  menu.addDishToCourse('appetizers', 'fries', 6.00);

  menu.addDishToCourse('mains', 'steak', 14.00);
  menu.addDishToCourse('mains', 'salmon', 15.00);
  menu.addDishToCourse('mains', 'chicken', 12.00);

  menu.addDishToCourse('desserts', 'wine', 4.00);
  menu.addDishToCourse('desserts', 'cheese', 5.00);
  menu.addDishToCourse('desserts', 'cake', 6.00);

  const meal = menu.generateRandomMeal();
  console.log(meal)