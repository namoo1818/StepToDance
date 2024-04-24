import asyncio

# env Variable
KAFKA_BOOTSTRAP_SERVERS="k10a101.p.ssafy.io:9092"
KAFKA_TOPIC="topic-ai"
KAFKA_CONSUMER_GROUP="group.id"
loop = asyncio.get_event_loop()