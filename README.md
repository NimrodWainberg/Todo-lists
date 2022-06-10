# Todo-lists

## Goal:

Todo-list application is ment to manage your tasks on daily basis

In this project I have used Fastapi(python) with Mongodb and React, Restful Api(Get, Post, Put, Delete)

## Backend

![image](https://user-images.githubusercontent.com/71652377/165376085-1e185584-820d-4e72-99b1-44f170da6c6b.png)

## Database

# Mongodb

DB_NAME=`TodoList`
</br>
DB_HOST=`localhost`
</br>
DB_PORT=`27017`

## Model

Title: string
</br>
Descripition: string

## Restful Api

</br>

# Get all todo

</br>
Request URL= http://localhost:8000/api/todo
</br>

# Get todo by id

</br>
Request URL= http://localhost:8000/api/todo{title}
</br>

# Add todo
</br>
Request URL= http://localhost:8000/api/todo
</br>

# Update todo
</br>
Request URL= http://localhost:8000/api/todo{title}?description={description}
</br>

# Delete todo
</br>
Request URL= http://localhost:8000/api/todo{title}
</br>

## Frontend
![image](https://user-images.githubusercontent.com/71652377/173143076-3a50882c-eb83-4582-b1b0-95c7747442cc.png)

# Libraries
</br>
React
</br>
Mui
</br>
Toastify
</br>
# Testing
</br>
![image](https://user-images.githubusercontent.com/71652377/173143470-88cc4738-98e7-448c-b01f-c64ff26b8706.png)

</br>
Jest
</br>
Testing-library

## Run:
1. install: pipenv install -r requirements.txt
2. cd backend 
3. uvicorn main:app --reload
4. Go to: 127.0.0.1:8000 or 127.0.0.1:8000/docs
5. Mongodb: mongodb://localhost:27017
6. pytest unit_tests.py/ python -m pytest ./unit_tests.py
7. cd frontend
8. npm start
9. Go to: Localhost:3000 
10. npm run test (press a to run all tests)
