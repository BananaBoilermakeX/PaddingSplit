import { largest_data } from "calculateStruct";
import { array_size } from "calculateTypes";
import { array_types } from "calculateTypes"
export function calculatePadding() {
    console.log(largest_data);
    console.log(array_size);


    const output = [[], []];
    let col_num = 0;
    let row_num = 0;
    let total_bytes = 0;

    if (array_types.length() == 1) {
        for (let i = 0; i < array_types[0].length; i++) {
            output[row_num][col_num] = array_types[i];
            col_num++;
            total_bytes++;
        }
        return output;
    }

    for (let i = 0; i < array_types.length() - 1; i++) {
        if (col_num == 0) {
            for (let j = 0; j < array_types[i].length(); j++) {
                output[row_num][col_num] = array_types[i];
                col_num++;
                total_bytes++;
            }
            if (col_num == largest_data) {
                col_num = 0;
                row_num++;
            }
        }

        else if (total_bytes % array_types[i].length() == 0) {
            for (let j = 0; j < array_types[i].length(); j++) {
                output[row_num][col_num] = array_types[i];
                col_num++;
                total_bytes++;
            }
            if (col_num == largest_data) {
                col_num = 0;
                row_num++;
            }
        }

        if ((i = array_types.length - 1) || (bytes % array_types[i + 1].length() != 0)) {
            let num_padding = 0;
            
            if (i = array_types.length - 1) {
                let temp = largest_data * ((total_bytes + largest_data - 1) / largest_data);
                num_padding = temp - total_bytes;
                for(let j = 0; j < num_padding; j++) {
                    //from index.js add paddng
                    //output[row_num][col_num] = padding
                
                }
                return output;
            }
            else {
                num_padding = array_types[i +1] % total_bytes;
                for(let j = 0; j < num_padding; j++) {
                    //from index.js add paddng
                    //output[row_num][col_num] = padding
                }
            }
            if (col_num == largest_data) {
                col_num = 0;
                row_num++;
            }

        }
    }



}