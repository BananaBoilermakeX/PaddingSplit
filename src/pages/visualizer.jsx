export function Visualizer({arr}) {
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
  { newArr.map(liss => {
      return (
        <ul>
          {liss.map(dat => {
            return (dat.color == "image") ? <li class="square_img" style={{ backgroundColor: "white" }}></li> : <li class="square" style={{ backgroundColor: dat.color }}></li>
          })}
        </ul>
      )
    })
  }
</div>
}
