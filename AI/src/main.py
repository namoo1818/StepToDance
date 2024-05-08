from fastapi import FastAPI, BackgroundTasks, File, Form, UploadFile
from kafka_producer import send_data_to_kafka
from confluent_kafka import Consumer
import asyncio
from data.GuideRequest import GuideUpdateRequest
from service.GuideService import guideUpload
import json



# consumer = Consumer({'bootstrap.servers': 'k10a101.p.ssafy.io:9092', 'group.id': 'group.id'})
consumer = Consumer({'bootstrap.servers': 'kafka1:9092, kafka2:9092, kafka3:9092', 'group.id': 'group.id'})
consumer.subscribe(['topic-guide-test'])

app = FastAPI()

@app.get('/')
def home():
    return "hello!"

# @app.post('/guides/upload')
# def guideUpload(guideUpdateRequest: GuideUpdateRequest):
#     print("log: guideUpload::", guideUpdateRequest)
#     guideUpload(guideUpdateRequest.video_url)
#     response = {"code": 201, "message": "가이드 영상이 저장되었습니다."}
#     return response

# @app.post('/guides/upload/file')
# def guideUploadFile(file: bytes = File(), guideId: str = Form()):
#     print("log: guideUploadFile::")
#     print(file)
#     response = {"code": 201, "message": "가이드 영상이 업로드 되었습니다."}
#     return response

@app.post("/send-data")
async def send_data(data: dict, background_tasks: BackgroundTasks):
    background_tasks.add_task(send_data_to_kafka, data)
    return {"message": "Data sent to Kafka!"}

# 비동기 Kafka 메시지 소비
async def consume_messages():
    current_loop = asyncio.get_running_loop()
    print("start consuming...")
    while True:
        message = await current_loop.run_in_executor(None, consumer.poll, 1.0)
        if message is None:
            continue
        print("consume: Message\t", message)
        msgInstance = json.loads(message.value())
        print(msgInstance['name'])
        print(message.topic())
        

# 앱 시작 시 Kafka 메시지 Consume를 비동기로 시작
@app.on_event('startup')
async def app_startup():
    asyncio.create_task(consume_messages())

# 앱 종료 시 Kafka Consumer 닫기
@app.on_event('shutdown')
async def app_shutdown():
    consumer.close()
