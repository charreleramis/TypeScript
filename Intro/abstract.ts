
// abstract class is not strict like the implement behaviour

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) {}

    abstract getSepai(): void
    
    getReelTime(): number {
        return 8;
    }
}



class Intagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) {
        // since the TakePhoto have a constructor, then it requires for us to
        // call the super method 
        super(cameraMode, filter);
    }

    getSepai(): void {
        
    }
}


const ins = new Intagram('', '');


// If you notice the getReelTime is not override in the instagram class, it is the power
// of the abstract class

const time = ins.getReelTime();
console.log(time);