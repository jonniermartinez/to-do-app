import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter/index.";
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch} from '../TodoSearch'
import { Modal } from '../Modal';
import { TodoForm } from "../TodoForm";


function AppUI() {
   const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
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
                    {!!openModal && (
                        <Modal>
                          <TodoForm />
                        </Modal>
                    )}

            <CreateTodoButton 
              setOpenModal={setOpenModal}
            />
            </section>
      </main>
    </React.Fragment>
    );
}


export {    AppUI   };