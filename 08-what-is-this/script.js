(() => {
  // Laxical scope & dinamic scope
  //   function printName() {
  //     console.log(this);
  //   }
  //   printName();
  //   function printName() {
  //     console.log(this);
  //     console.log(`My name is ${this.name}`);
  //   }
  //   const james = { name: "James", printName };
  //   const noey = { name: "noey", printName };
  //   james.printName();
  //   noey.printName();
  //   name = "Global";
  //   printName();
  //   function Person(name) {
  //     this.name = name;
  //     this.printName = printName;
  //   }
  //   const james = new Person("James");
  //   james.printName();
  // call() apply() and bind()
  function printName(nationality, city) {
    console.log(this);
    console.log(
      `My name is ${this.name} , I'm ${nationality} and am living in ${city}`
    );
  }
  function Person(name, nationality, city) {
    this.name = name;
    this.nationality = nationality;
    this.city = city;
    printName(this.nationality, this.city);
    printName.call(this, this.nationality, this.city);
    printName.apply(this, [this.nationality, this.city]);
    const printJames = printName.bind(this);
    printJames(this.nationality, this.city);
  }
  const james = new Person("James", "Thai", "Bangkok");
  //   james.printName();
})();
