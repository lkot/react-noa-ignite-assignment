import { useState, useEffect } from 'react';
import './TagsInput.css';

const TagsInput = ({ options }) => {
	const [tags, setTags] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [availableOptions, setAvailableOptions] = useState(options);
	const [suggestions, setSuggestions] = useState([]);
	const [activeItemIndex, setActiveItemIndex] = useState(-1);

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
		if (e.keyCode === 13) {
			const value = e.target.value.trim();
			if (activeItemIndex > -1) {
				const selectedItem = suggestions[activeItemIndex];
				addTag(selectedItem);
				setActiveItemIndex(-1);
			} else if (tags.length === 0 || tags.find((tag) => tag.toLowerCase() !== value.toLowerCase())) {
				addTag(value);
			}
		} else if (e.keyCode === 38) {
			if (activeItemIndex > 0) {
				setActiveItemIndex(activeItemIndex - 1);
			} else {
				setActiveItemIndex(suggestions.length - 1);
			}
		} else if (e.keyCode === 40) {
			if (activeItemIndex !== suggestions.length - 1) {
				setActiveItemIndex(activeItemIndex + 1);
			} else {
				setActiveItemIndex(0);	
			}
		}
	};
	
	const handleTypedText = (e) => {
		const searchedText = e.target.value;
		setInputValue(searchedText);
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
					{suggestions.map((item, index) => {
						return (
							<div key={item}>
							<li
								key={index} onClick={handleListElementClick}
								className={`data-item ${activeItemIndex === index ? 'active' : ''}`}
							>
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
