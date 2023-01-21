import { useEffect } from "react";
import "./visualizer.css";

export function Visualizer() {
  const arr = [
    [ {
      "name": "double double",
      "size": "8",
      "color": "blue"
    }],
    [
      {
        "name": "int",
        "size": "4",
        "color": "red"
    },    
    {
      "name": "int",
      "size": "4",
      "color": "red"
    },
    ],
    [
      {
      "name": "short",
      "size": "2",
      "color": "yellow"
      },
      {
        "name": "char",
        "size": "1",
        "color": "green"
      },
      {
        "name": "padding",
        "size": "1",
        "color": "image"
        },
        {
          "name": "int",
          "size": "4",
          "color": "red"
          }],
    [
      {
      "name": "int",
      "size": "4",
      "color": "red"
      },
      {
        "name": "padding",
        "size": "1",
        "color": "image"
      },
      {
        "name": "padding",
        "size": "1",
        "color": "image"
      },
      {
        "name": "padding",
        "size": "1",
        "color": "image"
      },
      {
        "name": "padding",
        "size": "1",
        "color": "image"
      },
    ]
  ];

  let newArr = [];
  for (let j = 0; j < arr.length; j++) {
    let temp = [];
    for (let k = 0; k < arr[j].length; k++) {
      for (let p = 0; p < parseInt(arr[j][k].size); p++) {
        temp.push(arr[j][k].color);
      }
    }
    newArr.push(temp);
  }

  return <div>
    {
      newArr.map((param) => {
        return (
          <ul>
            {param.map((col) => {
              return (col == "image") ? <li class = "square_img" style = {{backgroundColor: col}}></li> : <li class = "square" style = {{backgroundColor: col}}></li>
            })}
          </ul>
        );
      })
    }
  </div>;
}