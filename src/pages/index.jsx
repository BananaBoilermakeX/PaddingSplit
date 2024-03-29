import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import many from "../../public/paddingsplit.svg"
import { Visualizer } from './visualizer.jsx';
import arrow from '../assets/Whitedownarrwo.png';

export function Index() {
  const [newArr, setNewArr] = React.useState([[]]);

  function calculatePadding(a_t) {

    let array_types = Array.from(a_t);
    Array.prototype.insert = function (index, ...items) {
      this.splice(index, 0, ...items);
    };

    let pad = {
      name: "padding",
      size: "1",
      color: "image"
    };

    let largest_data = 0;

    for (let s = 0; s < array_types.length; s++) {
      if (array_types[s].butCol == "string") {
        let temp = Object.assign({}, array_types[s]);
        let howMany = temp.size;
        temp.size = 1;
        array_types.splice(s, 1);
        for(let c = 0; c < howMany; c++) {
          array_types.insert(s, temp);
        }
      }
    }

    let array_size = array_types.length;
    let i = 0;
    while (i < array_size) {
      if (largest_data < parseInt(array_types[i].size)) {
        largest_data = parseInt(array_types[i].size);
      }
      i++;
    }

    let output = new Array(array_types.length);
    //let output = [[]][[]];
    for (let i = 0; i < array_types.length; i++) {
      output[i] = new Array(largest_data);
    }

    let col_num = 0;
    let row_num = 0;
    let total_bytes = 0;

    let isString = false;
    for (let i = 0; i < array_types.length; i++) {
      if (array_types[i].name === "char[]") {
        isString = true;

        break;
      }
    }
    if (array_types.length == 1) {

      for (let i = 0; i < array_types[0].size; i++) {

        output[row_num][col_num] = array_types[0];
        col_num++;
        total_bytes++;
      }

      return output;
    }

    for (let i = 0; i <= array_types.length - 1; i++) {


      if (col_num == 0) {
        for (let j = 0; j < array_types[i].size; j++) {
          // process.stdout.write(array_types[i].name + "r:"+ row_num+ " c:" + col_num);

          output[row_num][col_num] = array_types[i];
          col_num++;
          total_bytes++;
        }

        if (col_num == largest_data) {
          col_num = 0;
          row_num++;
        }

      }

      else if (total_bytes % array_types[i].size == 0) {
        for (let j = 0; j < array_types[i].size; j++) {
          // process.stdout.write(array_types[i].name + "r: "+ row_num+ "c: " + col_num);
          output[row_num][col_num] = array_types[i];
          col_num++;
          total_bytes++;
        }
        if (col_num == largest_data) {
          col_num = 0;
          row_num++;
        }
      }

      if (i == array_types.length - 1 || (total_bytes % array_types[i + 1].size != 0)) {

        let num_padding = 0;
        if (i == array_types.length - 1) {
          if (total_bytes % largest_data == 0) {
            return output;
          }
          let temp = largest_data * parseInt(((total_bytes + largest_data - 1) / largest_data));

          num_padding = temp - total_bytes;
          for (let j = 0; j < num_padding; j++) {

            // process.stdout.write(" Pad1pp "+ "r:"+ row_num+ "c:" + col_num);
            output[row_num][col_num] = pad;

            col_num++;
            total_bytes++;

          }

          return output;
        }
        else {

          //num_padding = array_types[i + 1].size % total_bytes;
          num_padding = total_bytes % array_types[i + 1].size;
          let temp = array_types[i + 1].size - num_padding;

          for (let j = 0; j < temp; j++) {
            //from index.js add paddng

            output[row_num][col_num] = pad;
            // process.stdout.write(" Pad2 "+ "r:"+ row_num+ "c:" + col_num);
            col_num++;
            total_bytes++;

          }

          if (col_num == largest_data) {
            col_num = 0;
            row_num++;
          }
        }


      }
    }
  }

  let type = [
    {
      name: "pointer",
      size: "8",
      color: "#7A50F5",
    },

    {
      name: "long",
      size: "8",
      color: "#47A5FF",
    },
    {
      name: "double",
      size: "8",
      color: "#E008BC",
    },
    {
      name: "float",
      size: "4",
      color: "#4AD45D",
    },
    {
      name: "int",
      size: "4",
      color: "#EB6F8A",
    },
    {
      name: "short",
      size: "2",
      color: "plum",
    },
    {
      name: "char",
      size: "1",
      color: "orange",
    },
    {
      name: "padding",
      size: "1",
      color: "image"
    }
  ];

  // LOGIC FOR STRUCC
  const [list, setList] = React.useState([]);
  const [data, setData] = React.useState('');
  const [counter, setCounter] = React.useState(0);

  const dataTypes = [{
    name: "pointer",
    butCol: "pointer",
    size: "8",
    color: "#7A50F5",
    id: "0"
  },

  {
    name: "long",
    butCol: "long",
    size: "8",
    color: "#47A5FF",
    id: "0"
  },
  {
    name: "double",
    butCol: "double",
    size: "8",
    color: "#E008BC",
    id: "0"
  },
  {
    name: "float",
    butCol: "float",
    size: "4",
    color: "#4AD45D",
    id: "0"
  },
  {
    name: "int",
    butCol: "int",
    size: "4",
    color: "#EB6F8A",
    id: "0"
  },
  {
    name: "short",
    butCol: "short",
    size: "2",
    color: "plum",
    id: "0"
  },
  {
    name: "char",
    butCol: "char",
    size: "1",
    color: "orange",
    id: "0"
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

  const handleReset = () => {
    setList([]);
    setCounter(0);
    setData('');
  };

  //FINNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN  vis below
  return <body>
    <div class="parallax">
      <img class="mainLogo" src={many} alt="Banana Logo" />
      <p class="name123">Padding Split</p>
      <p class="subtext">"struct memory layout visualizer"</p>

      <a class="theDown" href="#down"><div class="downArrow bounce"><img width="40" height="40" alt="" src={arrow} /></div></a>
    </div>
    <div id="down" class="overlay">
      <div class="col col_left">
        <p class="static">struct myStruct {"{"}</p>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="allData">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {list.map((d, index) => (
                  <Draggable key={d.id} draggableId={d.id} index={index}>
                    {(provided) => (
                      <li id={d.id} class={`list_item ${d.butCol}`} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <span disabled class="listMove">≡</span> <span class="nameList">{d.name}</span> <button class={`listRemove ${d.butCol}`} onClick={() => { deleteById(d.id); }}>x</button>
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
        <button class="run" style={{ backgroundColor: "yellow" }} onClick={() => {
          console.log(list);
          setNewArr(calculatePadding(list));
        }}><img class="banana" src={many}></img></button>
      </div>

      <div class="col col_right">
        <ul>
          {dataTypes.map(d => (
            <li>
              <button class="typesBut" type="button" style={{ backgroundColor: d.color }} onClick={() => {
                setCounter(counter + 1);
                d = { name: d.name, butCol: d.butCol, color: d.color, size: d.size, id: d.name + counter };
                setData(d);
              }}>
                {d.name}
              </button>
            </li>
          ))}
          <li>
            <button class="typesBut" type="button" style={{ backgroundColor: "#A3243F" }} onClick={() => {
              let sSize = document.getElementById("stringSize").value;
              if (!sSize) {
                return;
              }
              setCounter(counter + 1);
              let string = { name: "char [" + sSize + "]", butCol: "string", color: "#A3243F", size: sSize, id: dataTypes[6].name + counter + "string" };
              setData(string);
            }}>
              {dataTypes[6].name + " ["} <input id="stringSize" type="number" min="1" max="99" onClick={(e) => { e.stopPropagation(); }}></input> {"]"}
            </button>
          </li>
          <li><button class="reset" onClick={() => { handleReset(); }}>⟳</button></li>
        </ul>
      </div>

      <Visualizer arr={newArr} href="#visu" />
    </div>
  </body>
}