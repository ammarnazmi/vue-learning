const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredGoalValue: '',
        }
    },

    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
        }
    }
});

app.mount('#app');
