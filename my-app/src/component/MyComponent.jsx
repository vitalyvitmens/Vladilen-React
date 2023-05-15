import { useEffect, useState } from 'react'
import { Fragment } from 'react'

const getValue = () => ' = 123'

const getTimeFromDate = (date) => date.toISOString().substring(11, 19)

export const MyComponent = (props) => {
	let [currentDate, setCurrentDate] = useState(new Date())
	let [currentNumber, setCurrentNumber] = useState(Math.random())

	setTimeout(() => {
		setCurrentDate(new Date())
		setCurrentNumber(Math.random())
	}, 1000)

	const value = 123
	const className = 'divElement'
	const tagName = 'div'

	useEffect(() => {
		console.log(currentDate)
		console.log(currentNumber)
	}, [])

	return (
		<Fragment>
			<br />
			<div>{String(currentDate)}</div>
			<div>{getTimeFromDate(currentDate)}</div>
			<div>{currentNumber}</div>
			<hr style={{ width: '80%' }} />
			<label htmlFor="" style={{ color: 'red' }}>
				Значение:
			</label>
			<div
				content={tagName + 'Element'}
				className={className}
				style={{
					widows: '100px',
					marginTop: '20px',
					color: 'gold',
					fontSize: '50px',
					fontWeight: 'bold',
				}}
			>
				{value}
				{getValue()}
			</div>
		</Fragment>
	)

	// return null
}
