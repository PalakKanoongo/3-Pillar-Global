console.log("Welcome to level3");

const personAccount = {
  firstname: "Palak",
  lastname: "Kanoongo",
  incomes: {
    part_time: 2300,
    other: 2000,
  },
  expenses: {
    food: 2000,
    transport: 1000,
    others: 600,
  },

  totalIncome: function () {
    let total = 0;
    let income = Object.values(this.incomes);
    income.forEach((element) => {
      total = total + element;
    });
    return total;
  },

  totalExpense: function () {
    let totalex = 0;
    let expense = Object.values(this.expenses);
    expense.forEach((element) => {
      totalex += element;
    });
    return totalex;
  },

  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },

  accountInfo: function () {
    return `name:${this.firstName} ${this.lastName}
                incomes:${Object.entries(this.incomes)}
                expenses: ${Object.entries(this.expenses)}
                totalIncome: ${this.totalIncome()}
                totalExpenses: ${this.totalExpense()}
                accountBalance: ${this.accountBalance()}
                `;
  },
};

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo());

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const signUp = (username, email, password) => {
  users.forEach((user) => {
    if (user.username === username && user.password === password) {
      console.log("you already have an account");
    } else {
      let chars = "abcdefghiklmnopqrstuvwxyz";
      let date = new Date();
      let id = [];
      for (let i = 0; i < 6; i++) {
        id.push(chars[Math.floor(Math.random() * chars.length)]);
      }
      id = id.join("");
      users.push({
        _id: id,
        username: username,
        email: email,
        password: password,
        createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
        isLoggedIn: "false",
      });
    }
  });
  console.log(users[users.length - 1]);
};

const signIn = (username, password) => {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username.toLowerCase() === username.toLowerCase() &&
      users[0].password === password
    ) {
      return users[i];
    } else {
      return "Invalid username or password";
    }
  }
};

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

const rateProduct = (name, rate) => {
    products.forEach(product => {
        if (product.name.toLowerCase().includes(name)) {
            let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            product.ratings.push({
                userId: id,
                rate: rate
            })
            console.log("done!!");
        } else {
            console.log("no product to rate")
        }
    })
};

const avgRating = (name) => {
    let avgrate = 0;
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {
            products[i].ratings.rate.forEach(rating => {
                count++
                avgrate += rating
            })
        }
    }
    avgrate = avgrate / count
};



