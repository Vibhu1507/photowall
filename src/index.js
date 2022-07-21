import React, { Component } from 'react' ;
import ReactDOM from 'react-dom';
import Main from './Components/Main';
// const element = React.createElement('h1' , null , 'Hello World !');
// const task = ['Run','Sit','Walk','talk','open'];
// const element = <ol>
//   {task.map((task) => <li> {task} </li>)}
// </ol>
// const element = <ol>
//   <li> {task[0]}</li>
//   <li> {task[1]}</li>
//   <li> {task[2]}</li>
//   {/* <li> {task[4]}</li> */}
// </ol>
// const element = React.createElement('ol' , null ,
//   task.map((task , index) => React.createElement('li' , {key: index} , task))
// );
ReactDOM.render(<Main /> , document.getElementById('root'));