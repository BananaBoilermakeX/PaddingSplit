export const calculatePadding = array_types => {
  let pad = {
    "name": "padding",
    "size": "1",
    "color": "image"
  };

  let largest_data = 0;

  array_size = array_types.length;
  i = 0;
  while (i < array_size) {
    if (largest_data < array_types[i].size) {
      largest_data = array_types[i].size;
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
  // console.log("isString: " + isString);
  if (array_types.length == 1) {

    for (let i = 0; i < array_types[0].size; i++) {

      output[row_num][col_num] = array_types[0];
      col_num++;
      total_bytes++;
    }
    // console.log("");

    return output;
  }

  for (let i = 0; i <= array_types.length - 1; i++) {


    if (col_num == 0) {
      // console.log("is herre i:" + i);
      for (let j = 0; j < array_types[i].size; j++) {
        // process.stdout.write(array_types[i].name + "r:"+ row_num+ " c:" + col_num);

        output[row_num][col_num] = array_types[i];
        col_num++;
        total_bytes++;
        //console.log("\nrow:" + row_num + "col:" + col_num);
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
          //comment for sean to fix.
          // console.log("col_numpoee:" + col_num);
          // output[row_num] = {};
          // output[col_num] = {};
          output[row_num][col_num] = pad;
          // process.stdout.write(" Pad2 "+ "r:"+ row_num+ "c:" + col_num);
          col_num++;
          total_bytes++;

        }
        //console.log("rpad:"+ row_num+ "c:" + col_num);
        if (col_num == largest_data) {
          col_num = 0;
          row_num++;
        }
      }


    }
  }
}