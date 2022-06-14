import { useState } from 'react';
import TagsInput from './components/TagsInput';

const languages = ['Javascript', 'Java', 'Python', 'Nodejs', 'Reactjs', 'SASS'];

function App() {

	return (
		<div className='App'>
			<h2>Enter Your Skills...</h2>
			<TagsInput options={languages} />
		</div>
	);
}

export default App;
