import TodoItem from "./todo-item";
import todos from "./todos.json";
const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
     <ul>
       {
         todos.map((todo, idx) => {
           return(<TodoItem todo={todo} key={idx}/>);
         })
       }
     </ul>
   </>
 );
}
export default TodoList;

