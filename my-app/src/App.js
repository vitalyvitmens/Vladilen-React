// декларативный стиль
import logo from './logo.svg'
import { MyComponent } from './component/MyComponent'
import styles from './App.module.css'
import { currentYear } from './index.js'

// императивный стиль
export const App = () => {
	return (
		// декларативный стиль
		<div className={styles.app}>
			<header className={styles.header}>
				{/* <img src={logo} className={styles.logo} alt="logo" /> */}
				{/* <p> */}
					{/* Edit <code>src/App.js</code> and save to reload. */}
				{/* </p> */}
				{/* <a */}
					{/* className={styles.link"} */}
					{/* href="https://reactjs.org" */}
					{/* target="_blank" */}
					{/* rel="noopener noreferrer" */}
				{/* > */}
					{/* Learn React */}
				{/* </a> */}
				<div className={styles.year}>{currentYear()}</div>
				<MyComponent type="normal" value="123" />
				<MyComponent type="normal" value="123" />
        {/* MyComponent({ type: 'normal', value: '123' }) */}
			</header>
		</div>
	)
}
