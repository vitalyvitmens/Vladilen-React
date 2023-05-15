// декларативный стиль
import logo from './logo.svg'
import { MyComponent } from './component/MyComponent'
import './App.css'
import { currentYear } from './index.js'

// императивный стиль
export const App = () => {
	return (
		// декларативный стиль
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div className="year">{currentYear()}</div>
				<MyComponent type="normal" value="123" />
				<MyComponent type="normal" value="123" />
        {/* MyComponent({ type: 'normal', value: '123' }) */}
			</header>
		</div>
	)
}
