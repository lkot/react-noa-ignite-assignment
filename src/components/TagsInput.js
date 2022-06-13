import { useState } from 'react';
import './TagsInput.css';

const TagsInput = ({lang}) => {
	const [tags, setTags] = useState([]);

	const handleKeyDown = (e) => {
		if (e.key !== 'Enter') {
			return;
		}
		const value = e.target.value;
		if (!value.trim()) return;
		// Adding a new tag on enter.
		setTags([...tags, value]);
		// console.log(tags);
		e.target.value = '';
	};

	const removeTag = (index) => {
		setTags(tags.filter((el, i) => i !== index));
	};

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
		</>
	);
};

export default TagsInput;
