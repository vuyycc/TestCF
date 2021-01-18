import FootballTeam from "./FootballTeam.js";

export default class app{
    footTeams;

    constructor() {
        this.footTeams = new Array();
    }
    
    addTeam(){
        let name = prompt("Name: ");
        let check = this.checkNameTeam(name);
        if(check == false){
            alert("Tên đã bị trùng");
            this.addTeam();
            return;
        }
        let point = prompt("Point: ");
        let GD = prompt("GD: ");

        if(name =="" || point =="" || GD ==""){
            alert(`Không được để trống!`);
            this.addTeam();
            return;
        }



        let team = new FootballTeam(name,point,GD);
        this.footTeams.push(team);
    }

    checkNameTeam(name){
        for(let i = 0; i < this.footTeams.length; i++){
            let nameTeam = this.footTeams[i].name;
            if(name == nameTeam){
                return false;
            }
        }
    }
    checkRanking() {
        for(let i = 0; i < this.footTeams.length; i++){
            let footTeam1 = this.footTeams[i];
            let op = 1;
            for(let j = 0; j < this.footTeams.length; j++){
                let footTeam2 = this.footTeams[j];
                if(i != j){
                    //check point
                    if(Number(footTeam1.point) < Number(footTeam2.point)){
                        console.log(Number(footTeam1.point));
                        console.log(Number(footTeam2.point));

                        op = op + 1;
                        console.log(op);
                    }
                    
                    if (footTeam1.point == footTeam2.point) {

                        if (footTeam1.GD > footTeam2.GD) {
                            op = op + 1;
                            console.log(op);
                        }

                        if (footTeam1.GD == footTeam2.GD) {
                            //check ABC
                            if (footTeam1.name.charAt(0) > footTeam2.name.charAt(0)) {
                                op = op + 1;
                            }
                        }

                    }
                    console.log(`${i} + ${op}`);
                    footTeam1.position = op;
                }
            }
            footTeam1.showTeam();
            console.log(`Position: ${footTeam1.position}`);

        }
    }
}