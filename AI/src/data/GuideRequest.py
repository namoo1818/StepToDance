from pydantic import BaseModel

class GuideUpdateRequest(BaseModel):
    guideId: int
    name: str
    size: int
    image: bytes