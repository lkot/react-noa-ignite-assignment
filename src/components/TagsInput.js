import React from 'react';
import './TagsInput.css';

const TagsInput = () => {
    return (
		<>
			<div className='tags-input-container'>
                <div className='tag-item'>
                    <span className="text">JavaScript</span>
                    <span className="close">&times;</span>
                </div>
			</div>
		</>
	);
};

export default TagsInput;
