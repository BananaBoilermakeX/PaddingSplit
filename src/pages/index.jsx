import {Visualizer} from "./visualizer.jsx"
import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export function Index() {
  const [list, setList] = React.useState([]);
  const [data, setData] = React.useState('');
  let counter = 0;

  const dataTypes = [ {type: "char", id: "0"}, {type: "short", id: "0"}, {type: "float", id: "0"}, {type: "double", id: "0"}, {type: "long", id: "0"}, {type: "pointer", id: "0"}];

  useEffect(() => {
    if (!data) {
      return;
    }
    const newList = list.concat(data);
    setList(newList);
  }, [data]);

  function handleOnDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setList(items);
  }

  const deleteById = id => {
    setList(oldValues => {
      return oldValues.filter(d => d.id != id);
    })
  }

  return <div>
  <div class = "col">
    <p>struct myStruct {"{"}</p>

    <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId="allData">
    {(provided) => ( 
    <ul {...provided.droppableProps} ref = {provided.innerRef}>
    {list.map((d, index) => (
      <Draggable key = {d.id} draggableId = {d.id} index = {index}>
        {(provided) => (
          <li id = {d.id} class = "list_item" {...provided.draggableProps} {...provided.dragHandleProps} ref = {provided.innerRef}>
            {d.type} <button class = "listRemove" onClick={() => {deleteById(d.id);}}>x</button>
          </li>
        )}
      </Draggable>
    ))}
    {provided.placeholder}
    </ul>
    )}
    </Droppable>
    </DragDropContext>

    <p>{"}"}</p>

    <button>run</button>
  </div>

  <div class = "col">
    <ul>
    {dataTypes.map(d => (
      <li>
        <button type="button" onClick={() => {
          counter++;
          d = {type: d.type, id: d.type+counter}
          setData(d);
        }}>
          {d.type}
        </button>
      </li>
    ))}
    </ul>
  </div>
    <Visualizer/>
  </div>;
}