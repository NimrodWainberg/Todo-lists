from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# App
app = FastAPI()


# Allows react to connect to the backend
origins = ['https://localhost:3000']

#
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
