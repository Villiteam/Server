const sql = require("./Database.js");

// constructor
const Student = function (student) {
    this.IdStudent = student.IdStudent;
    this.PassWord = student.PassWord;
};

Student.FindById = (studentId, result) => {
    sql.query(
        `SELECT * FROM Student WHERE IdStudent = ${studentId}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found customer: ", res[0]);
                result(null, res[0]);
                return;
            }

            // not found Customer with the id
            result({ kind: "not_found" }, null);
        },
    );
};
