let db = require("../db/db.json")
const uniqid = require('uniqid');
const fs = require("fs");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {

        res.json(db);

    });

    app.get("/api/notes/:id", function(req, res) {

        res.json(db[Number(req.params.id)]);
    })

    app.post("/api/notes", function(req, res){

        let newNote = req.body
        newNote.id = uniqid()

        return (fs.readFile((path.join(__dirname,"../db/db.json")), function (err, data){
            if (err) throw err;

            let notes = JSON.parse(data)
            notes.push(newNote)

            fs.writeFile((path.join(__dirname,"../db/db.json")), JSON.stringify(notes), (err) => {
                if (err) throw err;
                console.log("Success!")
            })
        }))
    });

    app.delete("/api/notes/:id", function(req, res) {


    })
};