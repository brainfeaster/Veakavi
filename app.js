Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
            homePageLnk: 'https://sanjaipk.github.io',
            htmlcontent: '<b>hello bolding</b>',
            counter:0
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        },
        getRandomNumber() {
            return Math.random();
        }
    }
}).mount('#app');