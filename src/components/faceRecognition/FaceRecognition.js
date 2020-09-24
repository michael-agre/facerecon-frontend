import React from 'react';
import './FaceRecognition.css';

function FaceRecognition({ box, imageUrl }) {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
		    <img 
		      alt='' 
		      src={imageUrl} 
		      width='500px' 
		      height='auto'
		      id='inputImage'
		    />
		    <div 
		    	className="bounding-box" 
		    	style={{
			    	top: box.topRow,
			    	right: box.rightColumn,
			    	bottom: box.bottomRow,
			    	left: box.leftColumn
		    	}}
		    ></div>
		    </div>
		</div>
	)
}

export default FaceRecognition;