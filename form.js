class Form {

    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
    }

    display() {
        
        var title = createElement('h2');
        title.html("Welcome to the Jungle-Book");
        title.position(370,80);

        this.input.position(440,250);
        this.button.position(500,370);

        this.button.mousePressed( ()=> {
            this.input.hide();
            this.button.hide();

            this.greeting.html("Welcome to the Private Jungle Game of " + this.input.value());
            this.greeting.position(300,230);
        })
    }

}