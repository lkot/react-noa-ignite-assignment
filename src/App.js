import { useState } from 'react';
import TagsInput from './components/TagsInput';

const languages = ['Javascript', 'Java', 'Python', 'Nodejs', 'Reactjs', 'SASS'];

function App() {
	const [langs, setLangs] = useState(languages);

	return (
		<div className='App'>
			<h2>Enter Your Skills...</h2>
			<TagsInput lang={langs} />
		</div>
	);
}

export default App;
