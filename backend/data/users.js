import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jose Rizal",
    email: "jose@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
