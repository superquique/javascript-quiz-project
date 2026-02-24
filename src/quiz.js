class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    // 2. getQuestion()
    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    
    // 3. moveToNextQuestion()
    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

    // 4. shuffleQuestions()
    shuffleQuestions() {
        for (let i=0; i<this.questions.length; i++) {
            const randomIndex = Math.floor(Math.random() * this.questions.length);
            [this.questions[i], this.questions[randomIndex]] = [this.questions[randomIndex], this.questions[i]];
        }
    }

    // 5. checkAnswer(answer)
    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers++;
        }
    }
    // 6. hasEnded()
    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        } else {
            return true;
        }
    }
    // 7. filterQuestionsByDifficulty()
    filterQuestionsByDifficulty(difficulty) {
        if (difficulty > 0 && difficulty <= 3) {
            this.questions = this.questions.filter(function (element) {
                return element.difficulty === difficulty;
            });
        }
    }
    // 8. averageDifficulty()
    averageDifficulty() {
        const sumOfDifficulties = this.questions.reduce(function (acc, curr) {
            return acc + curr.difficulty;
        }, 0)

        return sumOfDifficulties / this.questions.length;
    }
}