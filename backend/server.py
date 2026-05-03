from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path

# Create the main app without a prefix
app = FastAPI(title="Luxe Backend")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

@api_router.get("/")
async def root():
    return {
        "status": "online",
        "message": "Luxe Caterer & Planners API is running",
        "version": "1.0.0"
    }

@api_router.get("/health")
async def health():
    return {"status": "healthy"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)