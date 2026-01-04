import express from "express";
import mysql from "mysql2";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));


// recreate __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harshad02@Dudye",
  database: "delta_app"
});

app.get("/", (req, res) => {
  const q = "SELECT COUNT(*) AS count FROM user";

  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Some error occurred");
    }

    const count = result[0].count;
    res.render("home.ejs", { count });
  });
});

//show route 
app.get("/user" , (req , res) =>{
  let q = `SELECT * FROM user`;
  
  
  try{
    connection.query(q , (err , users) =>{
      if(err) throw err;
      
      res.render("show.ejs" , {users});
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});

app.get("/user/:id/edit" , (req , res) =>{
  
  let { id } = req.params;
  

  let q = `SELECT * FROM user WHERE id='${id}'`;
  
  try{
    connection.query(q , (err , result) =>{
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs" , {user});
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});

//update route
app.patch("/user/:id" , (req , res)=>{
  let {id} = req.params;
  let {password : formPassword , username : newname} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

    try{
    connection.query(q , (err , result) =>{
      if(err) throw err;
      let user = result[0];
      if(formPassword != user.password){
        res.send("Wrong password");
      }else{
        let q2 = `UPDATE user SET username = '${newname}' WHERE id='${id}'`;

        try{
            connection.query(q2 , (err , result) =>{
            if(err) throw err;
            res.redirect("/user");
        });
        }catch(err){
          console.log(err);
          res.send("some error in DB");
        }
      }
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});

app.delete("/user/:id" , (req , res) =>{
  const {id} = req.params;
  const q = `DELETE FROM user WHERE id = ?`;

  connection.query(q , [id] , (err , result) =>{
    if(err){
      console.log(err);
      return res.send("DB err");
    }

    res.redirect("/user");
  });
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
