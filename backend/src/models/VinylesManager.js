const AbstractManager = require("./AbstractManager");

class VinylesManager extends AbstractManager {
  constructor() {
    super({ table: "vinyles" });
  }

  rand(number) {
    return this.connection.query(
      `select v.id, v.pictures, v.titre, v.genre, t.youtube_url from  ${this.table} as v INNER JOIN track as t on v.id=t.id_vinyles ORDER BY rand() LIMIT ?`,
      [number]
    );
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
