Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
            homePageLnk: 'https://sanjaipk.github.io',
            htmlcontent: '<b>hello bolding</b>'
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