import React from "react";
import { TodoCounter } from '../TodoCounter/index.';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
        <React.Fragment>         
        <main className='main__container'>
            <CreateTodoButton />
            <section className='todos_container'>
                <TodoSearch 
                    searchvalue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <TodoList>
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
            </section>
            <TodoCounter 
                total={totalTodos}
                completed={completedTodos}
            />
      </main>
    </React.Fragment>
    );
}


export {    AppUI   };