  const mysql = require("mysql");
  const dbConfig = require("../config/db.config");
  
  // создаем соединение с нашей базой данных
  const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });
  
  // открываем наше соединение с базой данных
  connection.connect(err => {
    if (err) {
      console.log('что-то')
      console.log(err)
      return err;
    }
    else {
      console.log("успешно соединено с базой данных");
    }
    
  });

  module.exports = connection;
   //экспортируем наше соединение