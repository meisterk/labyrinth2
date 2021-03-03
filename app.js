
const App = {
    data() {
        return {
            board: [
                ['A', 'B', 'C'],
                ['D', 'E', 'F'],
                ['G', 'H', 'I'],
            ],
            text: 'Test'
        }
    }
};
Vue.createApp(App).mount('#app');