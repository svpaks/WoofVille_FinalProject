// 1. Database(Start with LOCAL DATABASE)
//     users: id(serial),fname,lname,email,phonenumber,address....
//     dogs: id(serial),name,owner_id(foreign key to users table),breed,color,date_of_birth,health
//     schedule: id(serial),user_id(foreign key to users),dog_id(foreign key to dogs), date, approved(yes,no,pending),type(daycare/grooming)
//     reports: id(serial), user_id(foreign key to users),dog_id(foreign key to dogs),times_fed,times_walked, text report 
// 2. Nodejs Server
//     -Npm init, npm i express,pg,knex,dotenv,nodemon,cors
//     -Create Dotenv, db config file
//     -Plan and Create routes for fetch request (Models(request to db ... return await db.("table name").insert.(data).returning("*")), Controllers, Routes). Different file for each table. (at least 50-60%)
// 3.React 
//     -Skeleton of website (<h1>Login</h1>), react-router-dom + navbar
//     -We start implementing fetch req to server on each page
//     -Make sure you show user specific data
//     -Start creating admin panel 
//     -Styling - Pure CSS /+ MaterialUI,Bootstrap
// 4.Final steps,
//     -Moving to ElephantSQL
//     -Debugging
//     -Deploy
// Collapse



