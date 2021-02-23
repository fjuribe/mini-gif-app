import React,{useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory=({setCategoria})=>{

	const [inputValue,setInputValue]=useState('')

	const handInputChange=(e)=>{

		setInputValue(e.target.value)

	}

	const handleSubmit=(e)=>{
		e.preventDefault()
		//console.log(inputValue)
		if (inputValue.trim().length>2) {

			setCategoria(cats=>[inputValue,...cats])
			setInputValue('')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={inputValue} onChange={handInputChange} />
		</form>
	)
}

AddCategory.prototypes={
	setCategoria:PropTypes.func.isRequired
}

export default AddCategory;