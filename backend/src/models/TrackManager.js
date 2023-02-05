const AbstractManager = require("./AbstractManager");

class TrackManager extends AbstractManager {
  constructor() {
    super({ table: "track" });
  }

  insert(track) {
    return this.connection.query(
      `insert into ${this.table} (titre, youtube_url, id_vinyles) values (?, ?, ?)`,
      [track.titre, track.youtube_url, track.id_vinyles]
    );
  }

  update(track, id) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      track,
      id,
    ]);
  }
}

module.exports = TrackManager;
