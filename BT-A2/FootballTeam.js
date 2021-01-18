export default class FootballTeam {
    name;
    point;
    GD;
    position

    constructor(name, point, GD){
        this.name = name;
        this.point = point;
        this.GD = GD;
    }

    showTeam(){
        console.log(`
        Name: ${this.name}
        Points: ${this.point} -- GD: ${this.GD}
        Position: ${this.position}
        `)
    }
}