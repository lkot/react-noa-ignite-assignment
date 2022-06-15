import { useState } from 'react';
import TagsInput from './components/TagsInput';

const programmingLanguages = ['Javascript', 'Java', 'Python', 'Nodejs', 'Reactjs', 'SASS'];
const spokenLanguages = ['Polish', 'English', 'German', 'Italian', 'Spanish', 'French'];

function App() {

	return (
		<div className='App'>
			<h2>Enter Your Skills...</h2>
			<TagsInput options={programmingLanguages} />
			<TagsInput options={spokenLanguages} />
		</div>
	);
}

export default App;
