import React from 'react';
import ReactDom from 'react-dom';
import Tasksdone from './Tasksdone';
export default class Todo extends React.Component
{
  render()
  {

 var listtasks = this.props.tasks.tasks.map(function(y)
{
  if(y.done == false)
  {
    return(
      <div>
      <p><li><input type = "checkbox" value={y.name}></input><label>{y.name}</label></li></p>
          </div>
    );
  }

})

    return (
      <div  className="col-sm-3 well">
      
      <h2>{this.props.tasks.title}</h2>
      <p>{this.props.tasks.description}</p>
      <br></br>
          {listtasks}

      </div>
    );
  }
}
