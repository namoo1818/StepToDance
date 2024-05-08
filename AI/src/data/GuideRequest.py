from typing_extensions import Unpack
from pydantic import BaseModel, ConfigDict

class GuideUpdateRequest(BaseModel):
    guideId: int
    name: str
    size: int
    image: bytes

    def __init__(self, msgInstance: dict):
        self.guideId = msgInstance['guideId']
        self.name = msgInstance['name ']
        self.size = msgInstance['size']
        self.image = msgInstance['image']