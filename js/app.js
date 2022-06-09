function Cell(row, column, dig, points)
{
    return{
        row: row,
        column: column,
        dig: dig,
        points: points
    }
}

function Grid(gridSize)
{
    var grid = {};
    for(var row = 0; row < gridSize; column++)
    {
            grid[row + "" + column] = Cell(row, column, false, false, false, 0);
    }
    grid = randomlyAssignPoints(grid, pointAmount);
    return board;

}

let move = function()
{
    direction = getFirstDirection();

    if(direction === DIRECTION.RIGHT)
    {
        column++;
    }
    else if(direction === DIRECTION.LEFT)
    {
        column--;
    }
    else if(direction == DIRECTION.UP)
    {
        row--;
    }
    else if(direction == DIRECTION.DOWN)
    {
        row++;
    }
}

function listenForInput( game )
{
	let firstTime = true;

	let movingVertically = function() {
		return !game.exceededMaxDirections() &&
			   game.getLastDirection() !== DIRECTION.RIGHT &&
	    	   game.getLastDirection() !== DIRECTION.LEFT;
	};

	let movingHorizontally = function() {
		return !game.exceededMaxDirections() && 
		   	   game.getLastDirection() !== DIRECTION.UP &&
	    	   game.getLastDirection() !== DIRECTION.DOWN;
	};

	let changeDirection = function( event )
	{
		if( firstTime )
		{
			game.addDirection( DIRECTION.UP );
			firstTime = false;
		}
		else
		{
			const LEFT_ARROW = 37;
			const RIGHT_ARROW = 39;
			const UP_ARROW = 38;
			const DOWN_ARROW = 40;
		    if( event.keyCode == LEFT_ARROW && movingVertically() ) 
		    {
		    	game.addDirection( DIRECTION.LEFT );
		    }
		    else if( event.keyCode == RIGHT_ARROW && movingVertically() ) 
		    {
		    	game.addDirection( DIRECTION.RIGHT );
		    }
		    else if( event.keyCode == UP_ARROW && movingHorizontally() )
		    {
		    	game.addDirection( DIRECTION.UP );
		    }
		    else if( event.keyCode == DOWN_ARROW && movingHorizontally() )
		    {
				game.addDirection( DIRECTION.DOWN );
		    }
		}
	};

	document.onkeydown = null;
	document.addEventListener('keydown', changeDirection );
}
