//A1.1 Trả về một mảng chứa các phần tử không trùng nhau
var a1 = [1,2,"a"];
var a2 = [1,3,"b"];


function checkArray(a1, a2){
    var a3 = a1.concat(a2);
    console.log(a3);
    let result = [];
    for(let i = 0; i < a3.length; i++){
        let count = 0;
        for(let j = 0;j < a3.length; j++){
            if(j != i){
                if(a3[i] === a3[j]){
                    count++;
                }
            }
        }
        if(count == 0){
            result.push(a3[i]);
        }
    }

    return result;
}

// console.log(checkArray(a1,a2));

//A2.1 Viết CT xếp hạng rank theo số điểm của đội bóng

var arrDB = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39
    },{
        name: "Manchester United",
        points: 60,
        GD: 29
    },{
        name: "Livepool",
        points: 88,
        GD: 39
    },
];
