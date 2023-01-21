let type = [
    {
        "name": "pointer",
        "size": "8",
        "color": "red"
    },

    {
        "name": "long",
        "size": "8",
        "color": "cyan"
    },
    {
        "name": "double",
        "size": "8",
        "color": "lime"
    },
    {
        "name": "float",
        "size": "4",
        "color": "orange"
    },
    {
        "name": "int",
        "size": "4",
        "color": "yellow"
    },
    {
        "name": "short",
        "size": "2",
        "color": "plum"
    },
    {
        "name": "char",
        "size": "1",
        "color": "azure"
    },
    {
        "name": "char[]",
        "size": "0",
        "color": "brown"
    },
    {
        "name": "padding",
        "size": "1",
        "color": "image"
    }
];
export function calculateStruct() {
    largest_data = 0;
    //revieving array"struct"
    const array_types = [{
        "name": "char",
        "size": "1",
        "color": "azure"
    },
    {
        "name": "char",
        "size": "1",
        "color": "azure"
    },];
    array_size = array_types.length;
    i = 0;
    while (i < array_size) {
        if (largest_data < array_types[i].size && largest_data <= 8) {
            largest_data = array_types[i].size;
        }
        i++;
    }

    return largest_data;
}
export function calculateTypes() {
    return array_size;
}
export function returnArray() {
    return array_types;
}