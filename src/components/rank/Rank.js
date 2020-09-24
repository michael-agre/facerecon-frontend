import React from 'react';

function Rank({name, entries}) {
	return (
		<div>
      <div className='white f3'>
        {`${name}, your current number of entries is: `}
      </div>
      <div className='white f2'>
        {entries}
      </div>
		</div>
	)
}

export default Rank