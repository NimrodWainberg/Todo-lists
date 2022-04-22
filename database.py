from model import Todo

# MongoDB  driver
import motor.motor_asyncio


client = motor.motor_asyncio.AsyncIOMotorClient('mongodb//localhost:27017')

# Database TodoList
database = client.TodoList
# Collection Todo
collection = database.todo


async def fetch_all_todo():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        # **document- any document
        todos.append(Todo(**document))

    return todos


async def fetch_one_todo(title):
    document = await collection.find_one({"title": title})
    return document


async def create_todo(todo):
    document = todo
    # await dor the collection to insert the document
    result = await collection.insert_one(document)
    return document


async def update_todo(title, description):
    await collection.update_one({"title": title}, {"$set": {"description": description}})
    document = await collection.find_one({"title": title})

    return document


async def remove_todo(title):
    await collection.delete_one({"title": title})
    return True
