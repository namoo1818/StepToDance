import asyncio
import router
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def main():
    return "hello FastAPI"

app.include_router(router.route)
asyncio.create_task(router.consume())