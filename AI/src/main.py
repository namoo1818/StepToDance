import asyncio
from fastapi import FastAPI

async def some_library(num: int, something: str):
    s = 0
    for i in range(num):
        print("  something.. : ", something, i)
        await asyncio.sleep(1)

app = FastAPI()

fake_item_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

@app.get("/")
def main():
    return "hello FastAPI"

@app.get("/items/{item_id}")
def read_item(item_id: str, skip: int=0, limit: int=10):
    return fake_item_db[skip: skip+limit]