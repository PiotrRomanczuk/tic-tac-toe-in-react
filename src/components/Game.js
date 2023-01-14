import React, { useReducer } from 'react';
import Board from './Board';

export default function Game() {
	const [state, dispatch] = useReducer(reducer, {
		xIsNext: true,
		history: [{ squares: Array(9).fill(null) }],
	});

	const status = 'Next player is X';
	const moves = (
		<li>
			<button>Start the game!</button>
		</li>
	);

	const squares = Array(9).fill(null);

	return (
		<div className='game'>
			<div className='game-board'>
				<Board squares={squares}></Board>
			</div>
			<div className='game-info'>
				<div>{status}</div>
				<ul>{moves}</ul>
			</div>
		</div>
	);
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'MOVE':
			return {
				...state,
				history: state.history.concat({
					squares: action.payload.squares,
				}),
				xIsNext: !state.xIsNext,
			};
		default:
			return state;
	}
};
