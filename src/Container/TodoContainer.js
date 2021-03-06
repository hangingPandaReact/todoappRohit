import React     from 'react';
import { AddTodoInput,TodoList } from '../Component';

class TodoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoName:'',
            todoList:[],
            isCompleted:false,
            error:'',
        }

        this.handleOnTodoName = this.handleOnTodoName.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleCheck=this.handleCheck.bind(this);
        this.handleOnRemove=this.handleOnRemove.bind(this);
    
    }
    handleAddTodo(){
        const{todoList,todoName}=this.state;
        let refTodoList = todoList;
        
        if(todoName.length>=5){
        refTodoList.push({
            name:todoName,
            isCompleted:false
        })
    }
        else{
            this.setState({
                error:" * please add more then five cheracter"
            })
           
        }
        this.setState({
            todoList:refTodoList,
            todoName:''
        })
    }

    handleOnTodoName(e){
        this.setState({
        todoName : e.target.value
        })
    }

        handleCheck(index){
        let refList = this.state.todoList;
        if(!refList[index].isCompleted)
        refList[index].isCompleted=true
        else
        refList[index].isCompleted=false
        this.setState({
            todoList:refList
        })
    }

    handleOnRemove(index){
        let refList = this.state.todoList;
        refList.splice(index,1);
        this.setState({
            todoList:refList
        })
    }

     render(){
        const {todoList,todoName,error} = this.state;

        return(
            <div className="first">
            <AddTodoInput
                todoName = {todoName}
                handleAddTodo={this.handleAddTodo}
                handleOnTodoName={this.handleOnTodoName}
                error={error}
            />
            <TodoList todoList={todoList} handleCheck={this.handleCheck} handleOnRemove={this.handleOnRemove}/>
            </div>
        )
    }
}
export default TodoContainer