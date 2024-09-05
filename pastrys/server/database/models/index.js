const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = new Sequelize("pastry", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Cakes = sequelize.define(
  "Cakes",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    imageURL: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Cakes", // Ensures the table name is exactly "Cakes"
    timestamps: false, // You can set this to true if you want to use timestamps
  }
);

const User = sequelize.define(
  "User",
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "User", // Ensures the table name is exactly "User"
    timestamps: true, // Will add `createdAt` and `updatedAt` fields
  }
);

// Authenticate and sync database
sequelize
  .authenticate()
  .then(() => {
    console.log("connected to the database");
    return sequelize.sync({ force: true }); // Use { force: true } to drop and recreate tables
  })
  .then(() => {
    console.log("Tables have been created");
  })
  .catch((err) => {
    console.log("failed to connect to the database", err);
  });

// Hook to hash password before saving to database
// User.beforeCreate(async (user) => {
//   if (user.password) {
//     user.password = await bcrypt.hash(user.password, 10);
//   }
// });

module.exports = { sequelize, Cakes, User };
