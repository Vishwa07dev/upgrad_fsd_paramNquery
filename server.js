/**
 * Hands on practice of Req param | Query Param | Req body
 */

const express = require("express");
const app = express();
const PORT = 8080;

/**
 * Start the server
 */
app.listen(PORT, () => {
    console.log("Application started");
})


const students = {
    1: {
        vishwa: {
            name: "Vishwa",
            age: 16,
            subject: "Maths"
        },
        Mohan: {
            name: "Mohan",
            age: 16,
            subject: "Science"
        },
        Shivani: {
            name: "Shivani",
            age: 16,
            subject: "SST"
        },
        Jyoti: {
            name: "Jyoti",
            age: 16,
            subject: "Conmputers"
        },
    },
    2: {
        Vishwa: {
            name: "Vishwa",
            age: 17,
            subject: "English"
        },
        Mohan: {
            name: "Mohan",
            age: 17,
            subject: "Science"
        },
        Shakshi: {
            name: "Shakshi",
            age: 18,
            subject: "SST"
        },
        Jyoti: {
            name: "Jyoti",
            age: 17,
            subject: "Conmputers"
        },
    }
}
/**
 * Path param
 *
 * Create a students enpoint which take class name and students names as the query param
 */

app.get("/studentApp/classes/:classId/students/:studentName", (req, res) => {
    const classId = req.params.classId;
    console.log(classId);
    const studentName = req.params.studentName;
    console.log(studentName);
    res.status(200).send({
        studentDetails: (students[classId])[studentName]
    })
})

/**
 * Make a Get call : localhost:8080/studentApp/classes/1/students/vishwa
 * 
 * From the browser or POSTMAN to test this
 */



/**
 * Query Param
 *
 * Create a students enpoint which take class name and students names as the query param
 */

app.get("/studentApp/classes/", (req, res) => {
    const classId = req.query.classId;
    console.log(classId);
    res.status(200).send({
        studentDetails: students[classId]
    })
})

/**
 * Make a Get call : localhost:8080/studentApp/classes?classId=1
 * 
 * From the browser or POSTMAN to test this
 */

/**
 * Request
 * 
 * Make a post API call to add a student in a given class
 */

app.use(express.json());
app.post("/studentApp/classes/:classId/students", (req, res) => {
    console.log(req.body);
    (students[req.params.classId])[req.body.name] = req.body;

    res.status(201).send(students[req.params.classId]);
})

/**
 * Make a POST call  : localhost:8080/studentApp/classes/1/students/
 * 
 * Sample request body :
 * {
   "name": "Kareena",
    "age": 18,
    "subject": "Economics"
   }
 * 
 */