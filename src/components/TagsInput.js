import { useState } from 'react';
import './TagsInput.css';

const TagsInput = () => {
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

	return (
		<>
			<div className='tags-input-container'>
				{tags.map((tag, index) => (
					<div className='tag-item' key={index}>
						<span className='text'>{tag}</span>
						<span className='close'>&times;</span>
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
