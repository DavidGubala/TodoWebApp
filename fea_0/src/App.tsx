import TodoInputHanler from "./components/TodoInput";
import TodoListHanler from "./components/TodoList";

import './css/App.css'

import {
  useQuery,
  gql
} from "@apollo/client";

const GET_TODOS = gql`
  query todos {
    todos{
      id
      title
      body
    }
  }
`;

function GetTodos(){
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return loading;
  if (error) return error;

  return data.todos;
}

export const TodoApp = () => {
    const result = GetTodos();
    if (result===true) return <p>Loading...</p>;
    return(
        <div className="App">
            <TodoInputHanler />
            <TodoListHanler todos={result}/>
        </div>
    );
}

export default TodoApp;