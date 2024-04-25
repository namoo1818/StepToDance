from fastapi import APIRouter
from schema import Message
from config import KAFKA_BOOTSTRAP_SERVERS, KAFKA_CONSUMER_GROUP, KAFKA_TOPIC
from kafka import KafkaProducer, KafkaConsumer 
from confluent_kafka import Consumer
import asyncio

route = APIRouter()
producer = KafkaProducer(bootstrap_servers=KAFKA_BOOTSTRAP_SERVERS)
consumer = Consumer({'bootstrap.servers': KAFKA_BOOTSTRAP_SERVERS, 'group.id': KAFKA_CONSUMER_GROUP})
consumer.subscribe([KAFKA_TOPIC])

@route.post('/create_message')
async def send(message: Message):
    producer.send(KAFKA_TOPIC, value=bytes(message.message, encoding='utf-8'))
    return {"message": "Message sent successfully", "data": message}

# 비동기 Kafka 메시지 소비
async def consume_messages():
    current_loop = asyncio.get_running_loop()
    print("start consuming...")
    while True:
        message = await current_loop.run_in_executor(None, consumer.poll, 1.0)
        if message is None:
            continue
        print(message)