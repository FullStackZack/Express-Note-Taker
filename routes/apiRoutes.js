const uniqid = require('uniqid');
const fs = require("fs");
const path = require("path");

const db = require("../db/db.json")

//let notes = [];

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {

        return res.json(db);

    });

    app.post("/api/notes", function(req, res){

        let newNote = req.body
        newNote.id = uniqid()

        console.log("Note ID: " + newNote.id)

        return (fs.readFile((path.join(__dirname,"../db/db.json")), function (err, data){
            if (err) throw err;

            let notes = JSON.parse(data)
            notes.push(newNote)

            fs.writeFile((path.join(__dirname,"../db/db.json")), JSON.stringify(notes), (err) => {

                if (err) throw err;
                console.log("Success!")

            });

            res.send(newNote);
            
        }));
    });

    app.delete("/api/notes/:id", function(req, res) {

        const noteId = req.params.id;
        console.log(noteId);
        
    });
};