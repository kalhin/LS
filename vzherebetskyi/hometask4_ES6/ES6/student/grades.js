class Grades {
    constructor(){
        let marks = {};

        //----------------------Оцінки------------------------

        for(let i in Grades.subjects) {
            marks[i] = 100 - Math.floor(Math.random() * 40);
        };
        this.subjects = marks;

        //-----------------------------------------------------
        
        //-----------------Середній бал----------------------
        
        let averageMark = 0;
        for (let i in this.subjects)
        {
            averageMark += this.subjects[i];
        }
        this.average = averageMark / 5;

        //---------------------------------------------------

        return this;
    }
}

Grades.subjects = { "Математичний аналіз": undefined, "Хімія": undefined, "Фізика": undefined, "Біологія": undefined, "Астрономія": undefined };
Grades.scholarship = undefined;