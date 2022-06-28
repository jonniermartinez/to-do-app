# React 



## Instalacion de React

[installation](https://reactjs-bot.github.io/react/docs/installation.html)

## Componentes vs Elementos

Para renderizar Componentes en React, nos traemos los scripts de react con ``ReactDOM`` le especificamos que los vamos a renderizar, le pasamos la función e y le pasamos con argumento nuestro componente  
```js
ReactDOM.render(e())
```

Que significa la e ?

e es un atajo de ``const e = React.createElement  `` 

### **Componentes**

crear componentes en react seria asi:
```js
class Componente extends React.Component
```
sin embargo esta forma casi nadie la usa 

lo que normalmente se hace es :

```js
function App(){
    return (
        React.createElement('h1', {id: 'title'}, 'Oli')
    );
}
```
Pero con el entorno de desarrollo con babel y toda la config no tengamos necesidad de llamar a React.createElement si no que reemplazamos este código a Jsx que se parece mundo a HTML

```jsx
function App (){
    return (
        <h1 id"title">
            Hola 
        </h1>
    )
}
```
Cuando una función empieza con mayúscula es un componente.

Y cual es la diferencia entre un componente y un elemento ?

los componentes no los ve html son "invisibles"
Y a los elementos el html los renderiza 

babel transforma nuestro codigo en jsx en vanilla js  

## propiedades en react
children

[Propiedades y componentes](https://es.reactjs.org/docs/components-and-props.html)



