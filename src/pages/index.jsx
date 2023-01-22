import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import many from "../../public/paddingsplit.svg"

export function Index() {
  let type = [
    {
      "name": "pointer",
      "size": "8",
      "color": "#7A50F5",
    },
  
    {
      "name": "long",
      "size": "8",
      "color": "#47A5FF",
    },
    {
      "name": "double",
      "size": "8",
      "color": "#E008BC",
    },
    {
      "name": "float",
      "size": "4",
      "color": "#4AD45D",
    },
    {
      "name": "int",
      "size": "4",
      "color": "#EB6F8A",
    },
    {
      "name": "short",
      "size": "2",
      "color": "plum",
    },
    {
      "name": "char",
      "size": "1",
      "color": "orange",
    },
    {
      "name": "padding",
      "size": "1",
      "color": "image"
    }
  ];

  let arr = [[]];
  // LOGIC FOR STRUCC
  const [list, setList] = React.useState([]);
  const [data, setData] = React.useState('');
  let counter = 0;

  const dataTypes = [{
    "name": "pointer",
    "size": "8",
    "color": "#7A50F5",
    "id": "0"
  },

  {
    "name": "long",
    "size": "8",
    "color": "#47A5FF",
    "id": "0"
  },
  {
    "name": "double",
    "size": "8",
    "color": "#E008BC",
    "id": "0"
  },
  {
    "name": "float",
    "size": "4",
    "color": "#4AD45D",
    "id": "0"
  },
  {
    "name": "int",
    "size": "4",
    "color": "#EB6F8A",
    "id": "0"
  },
  {
    "name": "short",
    "size": "2",
    "color": "plum",
    "id": "0"
  },
  {
    "name": "char",
    "size": "1",
    "color": "orange",
    "id": "0"
  }];

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

  //FINNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN  vis below
  let newArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (!arr[j]) {
      break;
    }

    newArr.push(arr[j]);
  }


  return <div>
    <div class="col col_left">
      <p>struct myStruct {"{"}</p>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="allData">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {list.map((d, index) => (
                <Draggable key={d.id} draggableId={d.id} index={index}>
                  {(provided) => (
                    <li id={d.id} class={`list_item ${d.name}`} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                     <span disabled class="listMove">≡</span> {d.name} <button class="listRemove" onClick={() => { deleteById(d.id); }}>x</button>
                      {console.log(d)}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <p>{"};"}</p>
      <button class = "run" style = {{backgroundColor: "yellow"}} onClick={()=> {
        //code
      }}><img class = "banana" src={many}></img></button>
    </div>

    <div class="col col_right">
      <ul>
        {dataTypes.map(d => (
          <li>
            <button type="button" style = {{backgroundColor: d.color}} onClick={() => {
              counter++;
              d = {name: d.name, color: d.color, size: d.size, id: d.name + counter }
              setData(d);
            }}>
              {d.name}
            </button>
          </li>
        ))}
      </ul>
    </div>

    <div class = "vis">
    {
      newArr.map((param) => {
        return (
          <ul>
            {param.map((col) => {
              return (col == "image") ? <li class = "square_img" style = {{backgroundColor: col}}></li> : <li class = "square" style = {{backgroundColor: col}}></li>
            })}
          </ul>
        )
      })
    }
  </div>
  </div>
}