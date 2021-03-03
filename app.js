const WIDTH = 10;
const HEIGHT = 10;

const App = {
    data() {
        return {
            board: []
        }
    },
    methods: {
        fillBoard() {
            for (let row = 0; row < HEIGHT; row++) {
                this.board.push([]);
                for (let column = 0; column < WIDTH; column++) {
                    this.board[row].push('X');
                }
            }
        }
    },
    mounted() {
        this.fillBoard();
    }
};
Vue.createApp(App).mount('#app');