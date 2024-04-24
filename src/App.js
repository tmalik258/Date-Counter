import React, { useState } from 'react';
import './app.css';

const Counter = () =>
{
    const [ count, setCount ] = useState( 0 );
    const [ step, setStep ] = useState( 1 );

    const date = new Date();
    date.setDate( date.getDate() + count );

    return (
			<div>
				<div>
					<button onClick={() => setStep((prev) => prev - 1)}>-</button>
					<span>Step: {step}</span>
					<button onClick={() => setStep((prev) => prev + 1)}>+</button>
				</div>
				<div>
					<button onClick={() => setCount((prev) => prev - step)}>-</button>
					<span>Count: {count}</span>
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
			</div>
		);
    
}

const App = () =>
{
    return (
        <div className='App'>
            <Counter />
        </div>
    )
};

export default App;