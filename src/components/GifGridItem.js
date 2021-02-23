import React from 'react';


const GitGridItem=({url,title})=>{


	return (
		<div className="card">
			<img src={url} alt={title}></img>
			<p>{title}</p>
		</div>	
	)
}


export default GitGridItem;