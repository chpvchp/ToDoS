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

@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int):
    global list_todo
    
    list_todo = [todo for todo in list_todo if todo["id"] != todo_id]
    return {"message": "deleted"}, 200

@app.put("/todos/{todo_id}")
def edit_todo(todo_id: int, todo: TODOS):
    global list_todo
    
    for todo in list_todo:
        if todo["id"] == todo_id:
            todo["title"] = todo.title
    
    return {"message": "changed"}, 200