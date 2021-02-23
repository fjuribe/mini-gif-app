import React,{Fragment,useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
import PropTypes from 'prop-types';

const GifExpertApp = () => {

	const [categoria,setCategoria]=useState(['dragon ball']);


    return ( 
    	<Fragment>
	        <h2> GifExpertApp </h2> 
	        <AddCategory setCategoria={setCategoria} />
	        <hr/>

	        <ol>
	        	{
	        		categoria.map(data=>{
	        		 	return <GifGrid key={data} category={data} />
	        		})
        		}
	        </ol>
        </Fragment>
    )
}

// GifExpertApp.prototypes={
// 	
// }

export default GifExpertApp;