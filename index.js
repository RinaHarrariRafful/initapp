const tasks = [
    {id:1, content:"משימה 1", completed:true},
    {id:2, content:"משימה 2", completed:true},
    {id:3, content:"משימה 3", completed:false},
    {id:4, content:"משימה 4", completed:true},
]
function newTasks(){
    tasksElement = tasks.map(t=> <div>${t.content}  ${t.completed==true?'v':'x'}</div>)
    tasksStr =tasksElement.join("");
    document.body.innerHTML+=tasksStr
}

newTasks();