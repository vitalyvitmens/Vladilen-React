import { useEffect, useState } from 'react'
import { Fragment } from 'react'
import styles from './MyComponent.module.css'

const getValue = () => ' = 123'

const getTimeFromDate = (date) => date.toISOString().substring(11, 19)

const programmingLanguages = [
	{ id: '1', name: 'Python' },
	{ id: '2', name: 'Dart' },
	{ id: '3', name: 'JavaScript' },
]

const clickCurrentDate = () => console.log(`Вы кликнули по ${new Date()}`)
const clickProgrammingLanguages = () =>
	console.log(`Вы кликнули по объекту: ${JSON.stringify(programmingLanguages)}`)

export const MyComponent = (props) => {
	let [currentDate, setCurrentDate] = useState(new Date())
	let [currentNumber, setCurrentNumber] = useState(Math.random())

	// Мутирование объекта
	const [obj, setObj] = useState({ a: 10, b: 20, c: 30 })

	const [newValue, setNewValue] = useState(0)
	// let [newValue, setNewValue] = useState(0)
	const addTen = (e) => {
		setNewValue((updatedNewValue) => (updatedNewValue += 10))
		setNewValue((updatedNewValue) => (updatedNewValue += 10))
		setNewValue((updatedNewValue) => (updatedNewValue += 10))
		// setNewValue((newValue += 10))
		// setNewValue((newValue += 10))
		// setNewValue((newValue += 10))
		console.log(e)
	}

	const [showText, setShowText] = useState(true)
	const fnShowText = () => setShowText(!showText)
	const text = <div>Текст</div>

	if (obj.a === 10) {
		setObj({ ...obj, a: 20 })
	}

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

	const [showRedText, setShowRedText] = useState(false)
	const fnShowRedWhiteText = () => {
		setShowRedText(!showRedText)
	}
	const textRedWhite = (
		<div className={showRedText ? styles.red : styles.white}>Текст</div>
	)

	return (
		<Fragment>
			<br />
			<div onClick={clickCurrentDate}>{String(currentDate)}</div>
			<div>
				<span style={{ fontWeight: 'bold', color: 'blueviolet' }}>
					{getTimeFromDate(currentDate)}
				</span>
			</div>
			<div>
				<span style={{ fontWeight: 'bold', color: 'burlywood' }}>
					{currentNumber}
				</span>
			</div>
			<hr style={{ width: '90%' }} />
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
				<div style={{ color: 'green' }}>{obj.a}</div>
				<div style={{ color: '#FF2300' }}>{newValue}</div>
				<button
					onClick={addTen}
					style={{ fontWeight: 'bold', fontSize: '20px' }}
				>
					Прибавить + 10 х 3
				</button>
				<>
					<div style={{ fontWeight: 'bold', fontSize: '30px', color: 'green' }}>
						{showText && text}
					</div>
					<button
						onClick={fnShowText}
						style={{ fontWeight: 'bold', fontSize: '20px' }}
					>
						{showText ? 'Скрыть' : 'Показать'}
					</button>
				</>
				<ul onClick={clickProgrammingLanguages}>
					{programmingLanguages.map(({ id, name }) => (
						<li
							key={id}
							style={{
								textAlign: 'left',
								fontSize: '20px',
								color: '#D15B8F',
							}}
						>
							{name}
						</li>
					))}
				</ul>
					{textRedWhite}
					<button onClick={fnShowRedWhiteText}>{showRedText ? 'Изменить цвет на белый и уменьшить размер текста' : 'Изменить цвет на красный и увеличить размер текста'}</button>
			</div>
		</Fragment>
	)

	// return null
}
