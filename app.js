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
            for (let zeile = 0; zeile < HEIGHT; zeile++) {
                this.board.push([]);
                for (let spalte = 0; spalte < WIDTH; spalte++) {
                    this.board[zeile].push('X');
                }
            }
        }
    },
    mounted() {
        this.fillBoard();
    }
};
Vue.createApp(App).mount('#app');