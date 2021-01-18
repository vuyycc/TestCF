import app from "./app2.js";

let app1 = new app();

while(true) {
    let input = prompt(`1 - (Thêm đội bóng) || 2 - (Xếp hạng rank)`);

    if(input == 2){
        app1.checkRanking();
        break;
    }else {
        app1.addTeam();
    }
}