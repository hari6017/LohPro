import React from 'react';
import ReactDom from 'react-dom';
import Todo from './Todo';
import Inprogress from './Inprogress';
import Tasksdone from './Tasksdone'
export default class NoticeBoard extends React.Component
{
  render()
  {
    var msg1 = this.props.cards.map(function(x)
  {
    if(x.status == "todo")
    {
      return(
        <div>
        <Todo tasks = {x} />
    </div>);
    }
  });
  var msg3 = this.props.cards.map(function(x)
{
  if(x.status == "todo")
  {
    return(
      <div>
    <Tasksdone tasks = {x} />
  </div>);
  }
});
var msg2 = this.props.cards.map(function(x)
{
if(x.status == "in-progress")
{
  return(
    <div>
  <Inprogress tasks = {x} />
</div>);
}
});
    return (

      <div className="container">
      <div className="row">
      <div className = "col-sm-3">
      <h1>TODO</h1>
      {msg1}
      </div>

      <div className = "col-sm-3">
      <h1>INPROGRESS</h1>
      {msg2}
      </div>
      <div className = "col-sm-3">
      <h1>TASKSDONE</h1>
      {msg3}
      </div>
      </div>
      </div>
    );
  }
}


import React from 'react';
import ReactDom from 'react-dom';
import Todo from './Todo';
import Inprogress from './Inprogress';
import Tasksdone from './Tasksdone'
export default class NoticeBoard extends React.Component
{
  render()
  {
    var msg1 = this.props.cards.map(function(x)
  {
    if(x.status == "todo")
    {
      return(
        <div>
        <Todo tasks = {x} />
    </div>);
    }
  });
  var msg3 = this.props.cards.map(function(x)
{
  if(x.status == "todo")
  {
    return(
      <div>
    <Tasksdone tasks = {x} />
  </div>);
  }
});
var msg2 = this.props.cards.map(function(x)
{
if(x.status == "in-progress")
{
  return(
    <div>
  <Inprogress tasks = {x} />
</div>);
}
});
    return (

      <div className="container">
      <div className="row">
      <div className = "col-sm-3">
      <h1>TODO</h1>
      {msg1}
      </div>

      <div className = "col-sm-3">
      <h1>INPROGRESS</h1>
      {msg2}
      </div>
      <div className = "col-sm-3">
      <h1>TASKSDONE</h1>
      {msg3}
      </div>
      </div>
      </div>
    );
  }
}


