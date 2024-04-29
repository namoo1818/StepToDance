from pydantic import BaseModel

class guideUpdateRequest(BaseModel):
    video_url: str