import '../css/TodoInput.css'
import {
    useMutation,
    gql
} from "@apollo/client";

export const TodoInput = () => {
    function createNewTodo(){
        console.log('send create mutation')
        const CREATE_TODO = gql`
            mutation createTodo($title: String!, $body: String!) {
                createTodo(title: $title, body: $body) {
                    id
                    title
                    body
                }
            }
            `;
    }
    return(
       <div className="todoInput">
           <h3 className="input-title">Create a Todo Item</h3>
           <label htmlFor="title">Title:</label>
           <input type="text" className="title" />
           <label htmlFor="body">Body:</label>
           <input type="text" className="body" />
           <button 
           className="submit btn" 
           onClick={()=> createNewTodo()}
           >
               Submit
           </button>
       </div>
    );
}

export default TodoInput;
