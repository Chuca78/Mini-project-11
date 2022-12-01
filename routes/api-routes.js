const db = require("../db/db.json");
const fs = require("fs");
const path = require("path");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

    app.post("/api/notes", function(req, res) {
        let id =  1;
        if (db.length > 0) {
            const last_note_id = db[db.length - 1].id;
            id = last_note_id + 1;
        };

        const new_note_object = req.body;
        new_note_object.id = id;
        db.push(new_note_object);
      
        fs.writeFile(path.resolve(__dirname, "../db/db.json"), JSON.stringify(db), function(err) {
            if (err) throw err;
            res.json(new_note_object);
        });
    });

    app.delete("/api/notes/:id", function(req, res) {
        const id_list = db.map(function(note) {
            return note.id;
        });
        const index_id = id_list.indexOf(parseInt(req.params.id));

        db.splice(index_id, 1);
      
        fs.writeFile(path.resolve(__dirname, "../db/db.json"), JSON.stringify(db), function(err) {
            if (err) throw err;
            res.json({ ok: true });
        });
    });
};







