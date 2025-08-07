function gameBoard(){
    return {
        grid: document.querySelectorAll(".grid-con > div"),
        round: 0,

        getBoard(){
            console.log(this.grid);
        },

        winStatus(unit){
            const gridContainer = document.querySelector(".grid-con"); 


            function getMarker(cell){
                return cell.textContent;
            };

            let grid = this.grid;

            function check(cellgrid, marker, index_1, index_2, index_3){
                if(getMarker(cellgrid[index_1]) === marker && getMarker(cellgrid[index_2]) === marker && getMarker(cellgrid[index_3]) === marker){
                    console.log(marker + " Wins")
                    gameOver = true;
                    gridContainer.classList.add("block-click");


                };
            };


            function getWinner(marker){
                //Check Rows
                check(grid, marker, 0, 1, 2);
                check(grid, marker, 3, 4, 5);
                check(grid, marker, 6, 7, 8);
                
                //Check Columns
                check(grid, marker, 0, 3, 6);
                check(grid, marker, 1, 4, 6);
                check(grid, marker, 2, 5, 7);

                //Check Crosses
                check(grid, marker, 0, 4, 8);
                check(grid, marker, 6, 4, 2);
            };

            if(gameOver != true){
                getWinner(unit);
            };

        },

        CPU(){
            if(gameOver != true){
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
                this.winStatus("O");
            } else {}
        },

        addPlayerEvents(){
            this.grid.forEach((cel) => {
                cel.addEventListener(("click"), () =>{
                    if(cel.textContent === ""){
                        cel.textContent = "X";
                        this.round++;
                        this.winStatus("X");
                        this.CPU();
                    };
                });
            });
        },

    };
};


let gameOver = false;
const board = gameBoard();
board.addPlayerEvents();
board.getBoard();

