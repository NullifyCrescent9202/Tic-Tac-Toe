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
                    alert(marker + " Wins");
                    gridContainer.classList.add("block-click");
                    gameOver = true;

                };
            };


            function getWinner(marker){
                //Check Rows
                check(grid, marker, 0, 1, 2);
                check(grid, marker, 3, 4, 5);
                check(grid, marker, 6, 7, 8);
                
                //Check Columns
                check(grid, marker, 0, 3, 6);
                check(grid, marker, 1, 4, 7);
                check(grid, marker, 2, 5, 8);

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
                let cell = this.grid;
                let emptyCells = Array.from(cell).filter((elem) => elem.textContent === "");
                let len = emptyCells.length;
                randomCell = emptyCells[Math.floor(Math.random() * len)];
                randomCell.textContent = "O"
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

