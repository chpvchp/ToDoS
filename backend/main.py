# source .venv/bin/activate
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class TODOS(BaseModel):
    title: str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_headers=["*"],
    allow_methods=["*"]
)

list_todo = []
id_todo = 0

@app.get("/todos")
def get_list_todo():
    global list_todo
    return list_todo

@app.post("/todos")
def create_todo(todo: TODOS):
    global list_todo
    global id_todo
    
    list_todo.append({
        "id": id_todo,
        "title": todo.title
    })
    
    id_todo += 1
    
    return {"message": "added"}, 200