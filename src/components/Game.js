import React from 'react';
import Board from './Board';

export default function Game() {
	const status = 'Next player is X';
	const moves = (
		<li>
			<button>Start the game!</button>
		</li>
	);

	return (
		<div>
			<div className='game-board'>
				<Board></Board>
			</div>
			<div className='game-info'>
				<div>{status}</div>
				<ul>{moves}</ul>
			</div>
		</div>
	);
}
