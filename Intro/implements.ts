

// The purpose of interface in the class is a guidelines, check the following code
interface Camera {
    id: string,
    filename: string
}


interface Story {
    createStory(): string
}

// since we do extends in interface Camera, we should abide with the 
// rules of interface camera
class App implements Camera, Story {
    constructor(public id: string, public filename: string) {
    }

    createStory(): string {
        return "stories created";
    }
}
