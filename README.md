# Todo-lists


https://user-images.githubusercontent.com/71652377/177017552-f2110324-9b75-4657-a9a7-c49323abd1d3.mp4


## Goal:

**Todo-list** application is ment to manage your tasks on daily basis

<p> In this project I have used Fastapi(python) with Mongodb and React, Restful Api(Get, Post, Put, Delete) </p>

## Backend

![image](https://user-images.githubusercontent.com/71652377/165376085-1e185584-820d-4e72-99b1-44f170da6c6b.png)

## Database

# Mongodb

**DB_NAME**=`TodoList`
</br>
**DB_HOST**=`localhost`
</br>
**DB_PORT**=`27017`

## Model

**Title**: string
</br>
**Descripition**: string

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

![image](https://user-images.githubusercontent.com/71652377/173148410-a9d7e3e5-ab40-442b-bfaf-c942fcc2e727.png)

# Libraries

<li> React </li>
<li> Mui </li>
<li> Toastify </li>
</br>

## Testing

![image](https://user-images.githubusercontent.com/71652377/173148597-da21fa92-7d85-4b06-ba90-aabb78563834.png)

<li> Jest </li>
<li> Testing-library </li>

</br>

## Run:

<ol>
<li> install: pipenv install -r requirements.txt </li>
<li> cd backend </li>
<li> uvicorn main:app --reload </li>
<li> Go to: 127.0.0.1:8000 or 127.0.0.1:8000/docs </li>
<li> Mongodb: mongodb://localhost:27017 </li>
<li> pytest unit_tests.py/ python -m pytest ./unit_tests.py </li>
<li> cd frontend </li>
<li> npm start </li>
<li> Go to: Localhost:3000 </li>
<li> npm run test (press a to run all tests)  </li>
</ol>

## Docker:

<ol>
<li> cd backend </li>
<li> docker build -t todo-backend . </li>
<li> cd frontend </li>
<li> docker build -t todo-frontend . </li>
<li> Preferred way: docker compose build (will do 1-4 automatically) </li>
<li> docker-compose up -d (-d is optional) </li>
</ol>
