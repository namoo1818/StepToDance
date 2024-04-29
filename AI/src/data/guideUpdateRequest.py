from pydantic import BaseModel

class GuideUpdateRequest(BaseModel):
    video_url: str