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

### Some usefull screenshots

### Register API:
![image](https://github.com/user-attachments/assets/f9b253e6-70f3-4319-8f40-d00856eb0e33)

### Login API:
![image](https://github.com/user-attachments/assets/36dd5726-367a-4a7a-a640-cab069e57d03)

## Teacher API:

### Create Classrooom API:
![image](https://github.com/user-attachments/assets/55ac70bf-3e86-41eb-868d-505607cb8c4a)

### Add Student to Classroom API:
![image](https://github.com/user-attachments/assets/6898b7ff-cc32-40b7-9bf9-f82d91ca637c)

### Remove student from classroom API:
![image](https://github.com/user-attachments/assets/6049a3f4-ca8a-4f6e-a3d4-db798efb9902)

### Create Task API
![image](https://github.com/user-attachments/assets/58796d6c-615c-48a3-a7a7-4408ba8b5b2d)

### get classroom of a teacher
![image](https://github.com/user-attachments/assets/9c33510f-2b3e-494a-b208-c6635d6a2505)

### update classroom API:
![image](https://github.com/user-attachments/assets/988461af-61c0-4c25-9588-eca068e3c2c2)

### Classroom delete API:
![image](https://github.com/user-attachments/assets/903c5357-1ea8-4b57-a31a-1f65a6c48d33)

### get Student classroom API:
![image](https://github.com/user-attachments/assets/be501e85-0490-497b-b77b-191075a7fc9d)

### get student tasks:
![image](https://github.com/user-attachments/assets/bad805dd-d717-4b46-ab24-8ad0a59382e9)

# I have created task submission api's too (review code base for that) but was not able to test them using postman...



