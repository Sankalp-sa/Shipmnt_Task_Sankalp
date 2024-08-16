# Classroom management readme

### Below is the link to deployed project

https://shipmnt-task-sankalp.vercel.app/

### Follow the below steps to run the project locally

* Clone the project
```
git clone "https://github.com/Sankalp-sa/Shipmnt_Task_Sankalp.git"
```

### create a .env file at the root of your folder and add the below text the .env file

```
MONGO_URI = mongodb+srv://sankalp123:sanku2003@cluster0.yvjsgnz.mongodb.net/schoolDB
JWT_SECRET = secret
```

### Start Backend

* open a new terminal
* install all dependencies
```
npm install
```
* start the backend server
```
npm start
```

### Basic authentication will be required to use some requests

##### Register Student:
```
localhost:8080/api/v1/auth/register
```

##### Login Student:
```
localhost:8080/api/v1/auth/login
```

#### From login api you will get the token use that token in header all other request
### For other request view codebase



