import React from 'react';
import ReactDom from 'react-dom';
import Todo from './Todo';
import Inprogress from './Inprogress';
import Tasksdone from './Tasksdone'
export default class NoticeBoard extends React.Component
{
  render()
  {
    var msg = this.props.cards.map(function(x)
  {
    if(x.status == "todo")
    {
      return(
        <div>
        <Todo tasks = {x} />
      <Tasksdone tasks = {x} />
    </div>);
    }

    if(x.status == "in-progress")
    {
      return(<Inprogress tasks = {x} />);
    }

  });
    return (

      <div className="container">

      {msg}

      </div>
    );
  }
}
