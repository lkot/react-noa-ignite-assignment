import { useState } from 'react';
import TagsInput from './components/TagsInput';

const languages = ['Javascript', 'Java', 'Python', 'Nodejs', 'Reactjs', 'SASS'];

function App() {
	const [langs, setLangs] = useState(languages);

	const handleTagAdded = (newTag) => {
		console.log(newTag);

		if (langs.includes(newTag)) {
      const newLangs = langs.filter((lang) => {
        return lang !== newTag
      })
      console.log(newLangs);
      setLangs(newLangs)
		} else {
			setLangs([...langs, newTag]);
		}
	};

	return (
		<div className='App'>
			<h2>Enter Your Skills...</h2>
			<TagsInput lang={langs} onTagAdded={handleTagAdded} />
		</div>
	);
}

export default App;
