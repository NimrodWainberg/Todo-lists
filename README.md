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
![image]image.png
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
Jest
</br>
Testing-library

## Run:
1. install: pipenv install -r requirements.txt
2. uvicorn main:app --reload
3. Go to: 127.0.0.1:8000 or 127.0.0.1:8000/docs
4. Mongodb: mongodb://localhost:27017
5. pytest unit_tests.py/ python -m pytest ./unit_tests.py
6. npm start
7. npm run test (press a to run all tests)
