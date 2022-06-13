import { useState } from 'react';
import './TagsInput.css';

const TagsInput = ({ lang, onTagAdded }) => {
	const [tags, setTags] = useState([]);

    // Adding tags on enter.
	const handleKeyDown = (e) => {
		if (e.key !== 'Enter') {
			return;
		}
		const value = e.target.value;
		if (!value.trim()) return;
		// Adding a new tag on enter.
		setTags([...tags, value]);
		onTagAdded(value);
		// console.log(tags);
		e.target.value = '';
	};

	const removeTag = (index) => {
		setTags(tags.filter((el, i) => i !== index));
	};

    const addTag = (e) => {
        // console.log(e.target);
		const newTag = e.target.innerText;
		setTags([...tags, newTag]);
		onTagAdded(newTag);
		// console.log(tags);
    }

	return (
		<>
			<div className='tags-input-container'>
				{tags.map((tag, index) => (
					<div className='tag-item' key={index}>
						<span className='text'>{tag}</span>
						<span onClick={() => removeTag(index)} className='close'>
							&times;
						</span>
					</div>
				))}
				<input
					onKeyDown={handleKeyDown}
					type='text'
					className='tags-input'
					placeholder='Type your skills here...'
				/>
			</div>

			{/* Autocomplete suggestions list */}
			<ul className='data-result'>
				{lang.map((item, index) => {
					return (
						<div key={index}>
							<li onClick={addTag} className='data-item'>
								{item}
							</li>
						</div>
					);
				})}
			</ul>
		</>
	);
};

export default TagsInput;
