class Question {
    // YOUR CODE HERE:
    //
    // 1. constructor (text, choices, answer, difficulty)
    constructor (text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer; //this is the correct response
        this.difficulty = difficulty;
    }

    // // 2. shuffleChoices()
    shuffleChoices() {
        for (let i=0; i<this.choices.length; i++) {
            const randomIndex = Math.floor(Math.random() * this.choices.length);
            [this.choices[i], this.choices[randomIndex]] = [this.choices[randomIndex], this.choices[i]];
        }
    }

}