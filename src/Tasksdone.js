import React from 'react';
import ReactDom from 'react-dom';

export default class Inprogress extends React.Component
{
  render()
  {
    var tasksdone = this.props.tasks.tasks.map(function(y)
   {
    if(y.done == true)
    {
      return(
        <div>
          <p><li><input type = "checkbox" value={y.name}></input><label>{y.name}</label></li></p>
      </div>);
    }
  })

    return (
      <div className="col-sm-3 well">
      <h2>Tasks Done</h2>
      <li>{tasksdone}</li>
      </div>
    );
  }
}
