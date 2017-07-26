angular.module("todoApp",[])
.controller("todoctrl",todoctrl);

function todoctrl(){
    var todo=this
    todo.tasks=[]
    todo.Add=Add;
    editmode=false;
    savedindex=0;
    
    todo.totalindex=0;
    
    todo.left=0;
    
    
    
    function Add(){
        obj={}
        obj.title=todo.task;
        obj.status=false
        todo.tasks.push(obj);
        todo.task="";
        console.log(todo.tasks);
        todo.totalindex=todo.totalindex+1;
        todo.left=todo.left+1;
        
        
        
    }
    todo.Delete=function(i) {
        if(todo.tasks[i].status==true)
        {
            todo.totalindex=todo.totalindex-1;
            
        }
        else{
            todo.totalindex=todo.totalindex-1;
            todo.left=todo.left-1;
        }
        todo.tasks.splice(i,1);
        console.log(todo.tasks);
        
        
    }
     todo.Edit=function(i) {
        todo.task=todo.tasks[i].title;
        todo.editmode=true;
        todo.savedindex=i
    }
    todo.Update=function(){
        todo.editmode=false;
        todo.tasks[savedindex].title = todo.task
        todo.task="";
        console.log(todo.tasks);
    }
    todo.setStatus=function(i){
        todo.tasks[i].status=!todo.tasks[i].status;
        if(todo.tasks[i].status==true)
            todo.left=todo.left-1;
        else
            todo.left=todo.left+1;
            

    }
    todo.Cancel=function(i) {
        todo.task=""
        todo.editmode=false;
        todo.savedindex=0;
    }

}