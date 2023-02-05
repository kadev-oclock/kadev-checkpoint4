const AbstractManager = require("./AbstractManager");

class VinylesManager extends AbstractManager {
  constructor() {
    super({ table: "vinyles" });
  }

  insert(vinyles) {
    return this.connection.query(
      `insert into ${this.table} (pictures, titre, genre, level_troc) values (?, ?, ?, ?)`,
      [vinyles.pictures, vinyles.titre, vinyles.genre, vinyles.level_troc]
    );
  }

  update(vinyles, id) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      vinyles,
      id,
    ]);
  }
}

module.exports = VinylesManager;
