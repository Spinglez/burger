const connection = require("./connection.js");

const orm = {
  selectAll: function(tableInput, colToSearch, valOfCol) {
    let queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(whatToSelect, table, orderCol) {
    let queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(tableInput, valOfCol) {
    let queryString =
      "INSERT INTO ?? (??)";

    connection.query(
      queryString,
      [t],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
