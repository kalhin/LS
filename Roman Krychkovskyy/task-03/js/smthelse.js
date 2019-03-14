const object = {
    value: 10,
    children: [
        {
            value: 15,
            children: []
        },
        {
            value: 20,
            children: [
                {
                    value: 25
                },
                {
                    children: [
                        {
                            value: 30
                        }
                    ]
                }
            ]
        }
    ],
    secondChild: [
        {
            value: 15,
            children: []
        }
    ]
};
//value === 115
let sum = 0;
function res(obj) {
    for (let key in obj) {
        if (key === 'value') {
            sum += obj[key];
        } else if ((typeof obj[key]) === 'object') {
            res(obj[key])
        }
    }
}
res(object);
console.log(sum)

