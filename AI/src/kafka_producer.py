import json
from kafka import KafkaProducer

producer = KafkaProducer(
    bootstrap_servers='localhost:9092',
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

async def send_data_to_kafka(data: dict):
    producer.send('topic-ai', value=data)
    producer.flush()
    print(f'sent: {data}')