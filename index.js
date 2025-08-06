function gameBoard(){
    return {
        grid: document.querySelectorAll(".grid-con > div"),

        getBoard(){
            console.log(this.grid);
        },
        addPlayerEvents(){
            this.grid.forEach((cel) => {
                cel.addEventListener(("click"), () =>{
                    if(cel.textContent === ""){
                        cel.textContent = "X";
                    }
                });
            })
        }
    };
};



const board = gameBoard();
board.addPlayerEvents();
board.getBoard();
