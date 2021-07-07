class Turtle {
    constructor (x, y){
        this.x = x || 0;
        this.y = y || 0;
        this.direction = 0;
        this.coordinates = [[this.x,this.y]];
    }

    forward(step){
        if (this.direction === 0){
           this.x += step; 
           this.y =this.y;
           this.coordinates.push([this.x,this.y]);
           return this;
           
        }
        else if (this.direction === -1){
           this.x =this.x; 
           this.y +=step * -1;
           this.coordinates.push([this.x,this.y]);
           return this;
        }
        else if(this.direction === - 2){
            this.x += step * - 1;
            this.y = this.y;
            this.coordinates.push([this.x,this.y]);
            return this;
        }
        else if(this.direction === -3 ){
            this.x = this.x;
            this.y += step;
            this.coordinates.push([this.x,this.y]);
            return this;
            
        }
        else if (this.direction === 1){
            this.x =this.x; 
            this.y +=step;
            this.coordinates.push([this.x,this.y]);
            return this;
            
         }
        else if(this.direction === 2){
             this.x += step * - 1;
             this.y = this.y;
             this.coordinates.push([this.x,this.y]);
             return this;

         }
        
         else if(this.direction === 3 ){
             this.x = this.x;
             this.y += step * -1;
             this.coordinates.push([this.x,this.y]);
             return this;
             
         }else {
             console.log(`add a number`)
             return this;
         }

    }

    right(){
        this.direction -= 1;
        if (this.direction <= -4 ){
        this.direction =0;
        }
        return this
    }

    left(){
        this.direction += 1;
        if (this.direction >= 4 ){
        this.direction =0;
        }
        return this
    }

    allPoints(){
        return this.coordinates
    }

    print(){
        let maxX = -Infinity;
        let maxY = -Infinity;
        let minX = Infinity;
        let minY = Infinity;

        for(let coor of this.coordinates) {
            if(coor[0] > maxX) {
                maxX = coor[0];
            }
            if(coor[1] > maxY) {
                maxY = coor[1];
            }
            if(coor[0] < minX) {
                minX = coor[0];
            }
            if(coor[1] < minY) {
                minY = coor[1];
            }
            
        }

        const coordExists = (x, y) => {
            for(let step of this.coordinates) {
                if (step[0] === x && step[1] === y) return true;
            }
            return false;
        }

        // start going through every coordinate
        console.log("-- BEGIN LOG");
     for (let y = maxY + 1; y >= minY; y--) {
      let line = '';
      for (let x = minX; x <= maxX + 1; x++) {
        if (coordExists(x, y)) {
          line += "■";
        } else {
          line += "□";
        }
      }
      console.log(line);
    }
    console.log("-- END LOG");
  }
   
}
const flash = new Turtle(0,0).forward(10).right().forward(1).left().forward(10)


flash.print()


console.log(flash)



