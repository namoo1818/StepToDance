import asyncio

# env Variable
# KAFKA_BOOTSTRAP_SERVERS="kafka1:9092"
KAFKA_BOOTSTRAP_SERVERS="kafka1:9092, kafka2:9092, kafka3:9092"
KAFKA_TOPIC="topic-ai"
KAFKA_CONSUMER_GROUP="group.id"
# loop = asyncio.get_event_loop()