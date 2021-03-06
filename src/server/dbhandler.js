const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('StudyPlan.db')


function fetchCL(callback) {
        var query = "SELECT * from CL ;";

        db.all(query, function (err, rows) {
            if(err){
                console.log(err);
            }else{
              callback(rows);
            }
          });
    }


    function fetchSP(callback, user) {
        var query = "SELECT study_plan FROM Student WHERE username='".concat(toString(user)).concat("';");

        db.all(query, function (err, rows) {
            if(err){
                console.log(err);
            }else{
              callback(rows);
            }
          });
    }

    function updateSP(callback, user, sp){
        var query = "INSERT INTO Student (study_plan) WHERE username='".concat(toString(user)).concat("' VALUES(").concat(sp).concat(");");

        db.all(query, function (err, rows) {
            if(err){
                console.log(err);
            }else{
              callback(rows);
            }
          });
    }

    function deleteSP(callback, user){
        var query = "INSERT INTO Student (study_plan) WHERE username='".concat(toString(user)).concat("' VALUES('');");

        db.all(query, function (err, rows) {
            if(err){
                console.log(err);
            }else{
              callback(rows);
            }
          });
        }

module.exports = {fetchCL, fetchSP, updateSP, deleteSP};
