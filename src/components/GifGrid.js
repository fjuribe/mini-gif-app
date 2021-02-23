import React,{Fragment,useState,useEffect} from 'react';
import GitGridItem from './GifGridItem';

const GifGrid=({category})=>{

	// const [count,setCount]=useState([]);

	const [imagenes,setImagenes]=useState([]);


   	useEffect(()=>{
		getGrif();
	},[])

	const getGrif=async()=>{
		const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=hiIA4aHTkwtvQ8Bg0HOAlLvg4TVzzm12`;
		const resp=await fetch(url);
		const {data}=await resp.json();

		const gifs=data.map(img=>{
			return {
				id:img.id,
				title:img.title,
				url:img.images?.downsized_medium.url

			}
		})
		console.log(gifs);
		setImagenes(gifs);
   }

	return (
		<Fragment>
			<h3>{category}</h3>
			<div className="card-grid">

				{
					imagenes.map(img=>(
						 <GitGridItem key={img.id} {...img} />
					))	
				}

				{/* <ol> */}
				{/* 	{ */}
				{/* 		imagenes.map(({id,title})=> */}
				{/* 			<li key={id}>{title}</li> */}
				{/* 		)	 */}
				{/* 	} */}
				{/* </ol> */}
			</div>	
		</Fragment>
	)
}

export default GifGrid;