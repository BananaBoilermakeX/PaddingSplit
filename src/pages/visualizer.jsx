import {useState} from 'react';
export function Visualizer({arr}) {
  const [counter, setCounter] = useState(1);
  if (!arr) {
    return;
  }
  
  let newArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (!arr[j]) {
      break;
    }
    newArr.push(arr[j]);
  }

  return <div class="vis">
  { newArr.map((liss, ind) => {
      return (
        <ul>
          {liss.map((dat, index) => {
            return (dat.color == "image") ? <div class="square_img" style={{ backgroundColor: "white" }}><li class = "hideNum">{ind*arr[0].length + index}</li></div> : <div class="square" style={{ backgroundColor: dat.color }}><li class = "hideNum">{ind*arr[0].length + index}</li></div>
          })}
        </ul>
      )
    })
  }
</div>
}
