from main import(
    get_todo,
    get_todo_by_id,
    post_todo,
    put_todo,
    delete_todo
)
import pytest
import pytest_asyncio
from httpx import AsyncClient
from fastapi import FastAPI
from model import Todo
from main import app
from fastapi.testclient import TestClient


# decorate all tests with @pytest.mark.asyncio
# pytestmark = pytest.mark.asyncio


# @pytest.fixture
# class TestCreateCleaning:
#     async def test_valid_input_creates_cleaning(
#         self, app: app, client: AsyncClient
#     ) -> None:
#         res = await client.post(
#             app.url_path_for("trial"), json={}
#         )
#         assert res.status_code == 200
# Creating new todo


# @pytest.mark.asyncio
# async def test_create_todo():
#     response = await post_todo({"title": "Check",
#                                 "description": "New Todo"})
#     assert response.status_code == 200
# assert 2 == 2

# Get all Todos


# @pytest.mark.asyncio
# async def test_get_all_todo():
#     response = await get_todo()
#     print("TEST"+response)
#     assert 2 == 2
#     #assert response.get("code") == 200
