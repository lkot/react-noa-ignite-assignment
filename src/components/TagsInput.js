import { useState, useEffect } from 'react';
import './TagsInput.css';

const TagsInput = ({ options }) => {
	const [tags, setTags] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [availableOptions, setAvailableOptions] = useState(options);
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		if (inputValue) {
			// Filtered options according to what user typed.
			const filteredOptions = availableOptions.filter(
				(option) => option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
			);

			const lowercaseTags = tags.map((tag) => tag.toLowerCase());

			// Suggestions left (without values from tags added)
			const filteredSuggestions = filteredOptions.filter(
				(filtered) => !lowercaseTags.includes(filtered.toLowerCase())
			);

			setSuggestions(filteredSuggestions);
		} else {
			setSuggestions([]);
		}
	}, [inputValue, tags, availableOptions]);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			addTag(e.target.value);
		}
	};

	const removeTag = (index) => {
		setTags(tags.filter((el, i) => i !== index));
	};

	const handleListElementClick = (e) => {
		addTag(e.target.innerText);
	};

	const addTag = (newTag) => {
		if (newTag.trim()) {
			const foundTag = tags.find(
				(tag) => tag.toLowerCase() === newTag.toLowerCase()
			);
			if (!foundTag) {
				setTags([...tags, newTag]);
				setInputValue('');

				const foundOption = availableOptions.find(
					(option) => option.toLowerCase() === newTag.toLowerCase()
				);
				if (!foundOption) {
					setAvailableOptions([...availableOptions, newTag]);
				}
			}
		}
	};

	const handleTypedText = (e) => {
		const searchedText = e.target.value;
		setInputValue(searchedText);
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
					value={inputValue}
					onChange={handleTypedText}
					onKeyDown={handleKeyDown}
					type='text'
					className='tags-input'
					placeholder='Type your skills here...'
				/>
			</div>

			{/* Autocomplete suggestions list */}
			{suggestions.length > 0 && (
				<ul className='data-result'>
					{suggestions.map((item) => {
						return (
							<div key={item}>
								<li onClick={handleListElementClick} className='data-item'>
									{item}
								</li>
							</div>
						);
					})}
				</ul>
			)}
		</>
	);
};

export default TagsInput;
