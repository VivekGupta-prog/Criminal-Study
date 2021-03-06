const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const spawn = require("child_process").spawn;

//Python file calling
let process;
// let word = "Vivek";
// process = spawn("python", ['./EncryptionALgo.py', word]);
// console.log("Outside");
// process.stdout.on("data", (data) => {
//     word = data;
//     console.log(word);
//     console.log("Inside");
//     word = data.toString().split(" ");
//     console.log(word[0]);
// })


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
// app.use(express.static("public"));
app.listen(9000, ()=> {
    console.log("Server running on port 9000");
});

//Database
mongoose.connect("mongodb://localhost:27017/minorDB", {useNewUrlParser: true, useUnifiedTopology: true});
const adminSchema = {
    fname: String,
    lname: String,
    username: String,
    departmentId: String,
    department: String,
    password: String
}
const Admin = mongoose.model("Admin", adminSchema);
// const publicSchema = {
//     fname: String,
//     lname: String,
//     username: String,
//     mail: String,
//     password: String
// }
// const Public = mongoose.model("Public", publicSchema);
// const newEntrySchema = {
//         id: String,
//         caseNumber: String,
//         date: String,
//         block: String,
//         iucr: String,
//         primaryType: String,
//         description: String,
//         locationDescription: String,
//         arrest: String,
//         domestic: String,
//         beat: String,
//         district: String,
//         ward: String,
//         communityArea: String,
//         fbiCode: String,
//         xCoordinate: String,
//         yCoordinate: String,
//         year: String,
//         updatedOn: String,
//         latitude: String,
//         longitude: String,
//         location: String
// }
// const NewEntry = mongoose.model("NewEntry", newEntrySchema);

// //Backend
app.get("/", (req,res) => {
    res.send("Running");
})
// // app.get("/", (req,res) => {
// // });
// // app.post("/" ,(req,res) => {
// //     const userType = req.body
// // });

// // app.post("/login", (req,res) => {
// //     const username = req.body.username;
// //     const password = req.body.password;
// // });

// // //Registration Page Public
// // app.post("/registration", (req,res) => {
// //     const user = {
// //         fname: req.body.fname,
// //         lname: req.body.lname,
// //         username: req.body.username,
// //         mail: req.body.mail,
// //         password: req.body.password
// //     }
// //     if(userType === "public") {}
// //     else {}
// // })


//Registration Page Admin
app.get("/registration", (req,res) => {
    res.sendFile(__dirname + "/registrationPage.html")
})
app.post("/registration", (req,res) => {

    //Username Encryption
    let name;
    let userId;
    //Python file calling
    process = spawn("python", ['./EncryptionALgo.py', req.body.username]);
    process.stdout.on("data", (data) => {
    name = data;
    name = data.toString().split(" ");
    userId = name[0];
    });
    setTimeout(function() {
        console.log(userId);
      }, 1000);

    //DepartmentId Encryption
    let departId;
    let word;
    //Python file calling
    process = spawn("python", ['./EncryptionALgo.py', req.body.departmentId]);
    process.stdout.on("data", (data) => {
    word = data;
    word = data.toString().split(" ");
    departId = word[0];
    });
    setTimeout(function() {
        console.log(departId);
      }, 1000);

    //Password Encryption
    let pass;
    let pw;
    //Python file calling
    process = spawn("python", ['./EncryptionALgo.py', req.body.password]);
    process.stdout.on("data", (data) => {
    pw = word;
    pw = data.toString().split(" ");
    pass = pw[0];
    });
    setTimeout(function() {
        console.log(pass);
      }, 1000);

    console.log(req.body);
    setTimeout(function() {
        const adminUser = new Admin({
            fname: req.body.fName,
            lname: req.body.lName,
            username: userId,
            departmentId: departId,
            department: req.body.department,
            password: pass
            });
            adminUser.save((err) => {
                if(!err) {
                    res.send("Successfully added a new article");
                } else {
                    res.send(err);
                }
            });
      }, 1000);
});

// //Search Case
// app.get("/admin/search", (req,res) => {
//     NewEntry.find((err, foundCase) => {
//         if(!err){
//             console.log(foundCase);
//             res.send(foundCase);
//         } else {
//             res.send(err);
//         }
//     });
// });

// //New Case Entry
// app.post("/admin/newentry", (req,res) => {})
