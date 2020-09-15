const Pool = require("pg").Pool;

const pool = new Pool({
   user: "postgres",
   password: "Godsgrace123",
   host: "localhost",
   port: 5432, 
   database: "perntd"
});

module.exports = pool;