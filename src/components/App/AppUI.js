import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter/index.";
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch} from '../TodoSearch'
import { Modal } from '../Modal';


function AppUI() {
   const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo 
} = React.useContext(TodoContext);

    return(
        <React.Fragment>         
        <main className='main__container'>
            <section className='todos_container'>
            <TodoCounter /> 
            <TodoSearch />  

                    <TodoList>
                    {error && <p>desesperes</p>}
                    {loading && <p>Estamos cargando, no desesperes</p>}
                    {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
                    {searchedTodos.map(todo => (
                    <TodoItem 
                      key={todo.text} 
                      text={todo.text} 
                      completed={todo.completed}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                      />
    
                    ))}
                    </TodoList>  
                      <Modal>
                        <p>Teletransportacion</p>
                      </Modal>

                    
            <CreateTodoButton />
            </section>
      </main>
    </React.Fragment>
    );
}


export {    AppUI   };