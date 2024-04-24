import React, { useState } from "react";
import "./app.css";

const Counter = () => {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);

	const date = new Date();
	date.setDate( date.getDate() + count );
	
	const handleReset = () =>
	{
		setCount( 0 );
		setStep( 1 );
	}

	return (
		<div>
			<div>
				<input
					type="range"
					value={step}
					max={10}
					onChange={(e) => setStep(Number(e.target.value))}
				/>
				<span>Step: {step}</span>
			</div>
			<div>
				<button onClick={() => setCount((prev) => prev - step)}>-</button>
				<input
					type="number"
					value={count}
					onChange={(e) => setCount(e.target.value)}
				/>
				<button onClick={() => setCount((prev) => prev + step)}>+</button>
			</div>
			<p>
				<span>
					{count === 0
						? "Today is "
						: count > 0
						? `${count} days from today is `
						: `${-count} days ago was `}
				</span>
				<span>{date.toDateString()}</span>
			</p>
			{ (count === 0 && step === 1) || <button type="reset" onClick={ handleReset }>Reset</button> }
		</div>
	);
};

const App = () => {
	return (
		<div className="App">
			<Counter />
		</div>
	);
};

export default App;
