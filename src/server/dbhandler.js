const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('StudyPlan.db')


function fetchCL(callback) {
        var query = "SELECT * from CL";

        db.all(query, function (err, rows) {
            if(err){
                console.log(err);
            }else{
              callback(rows);
            }
          });
    }

module.exports = {fetchCL};
