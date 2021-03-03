const WIDTH = 10;
const HEIGHT = 10;

class Cell {
    constructor() {
        this.text = '.';

        this.borderTop = false;
        this.borderRight = false;
        this.borderLeft = false;
        this.borderBottom = false;
    }
}

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
                    this.board[row].push(new Cell());
                }
            }
        },
        createLabyrinth() {
            this.board[3][5].borderBottom = true;
        }
    },
    mounted() {
        this.fillBoard();
        this.createLabyrinth();
    }
};
Vue.createApp(App).mount('#app');