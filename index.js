function gameBoard(){
    return {
        grid: document.querySelectorAll(".grid-con > div"),
        round: 0,

        getBoard(){
            console.log(this.grid);
        },

        CPU(){
            function randInt(){
                return Math.floor(Math.random() * 9);
            };
            let index = randInt();
            let cell = this.grid[index];
            if(cell.textContent === ""){
                cell.textContent = "O";
            } else {
                this.CPU();
            }
            this.round++;
        },

        addPlayerEvents(){
            this.grid.forEach((cel) => {
                cel.addEventListener(("click"), () =>{
                    if(cel.textContent === ""){
                        cel.textContent = "X";
                        this.round++;
                        this.CPU();
                    };
                });
            });
        },

    };
};



const board = gameBoard();
board.addPlayerEvents();
board.getBoard();
