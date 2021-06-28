import '../css/TodoList.css'
import {
  useQuery,
  gql
} from "@apollo/client";

interface Props {
    todos: Array<TodoItem>
}

interface TodoItem {
    id?: string;
    title?: string;
    body?: string;
    createdat?: string;
    updatedat?: string;
}

export const TodoItemHandler= ({id, title, body}: TodoItem) => {
    
    const UpdateTodo = ({id, title, body}: TodoItem) => {
        console.log('send update mutation for id: ' + id);
    }

    const DeleteTodo = ({ id }: TodoItem) => {
        console.log('send delete mutation for id: ' + id);
        const DELETE_TODO = gql`
        mutation deleteTodo($id: ID!) {
            deleteTodo(id: $id)
        }`;
        const { loading, error, data } = useQuery(DELETE_TODO);
    }

    return (
        <li className="todoItem">
            <h4 className="todoTitle">{title}</h4>
            <p className="todoBody">{body}</p>
            <button
            className="edit btn" 
            onClick={()=> UpdateTodo({id, title, body})}
            >
                Edit
           </button>
           <button 
                className="delete btn" 
                onClick={()=> DeleteTodo({id})}
            >
                Delete
           </button>
        </li>
    );
}

export const TodoListHanler = ({ todos }: Props) => {
    console.log({todos})

    return(
        <ul className="todoList">
            {todos.map((todo) => (
                    <TodoItemHandler key={todo.id} id={todo.id} title={todo.title} body={todo.body} />
                )    
            )}
        </ul>
    );
}

export default TodoListHanler;