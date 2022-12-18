import React , {useState }from 'react'


const AddMovie = ({AddMovie}) => {
    const [name, setName] = useState("")

    const handleName =(e) => {
        setName (e.target.value)    
    }

    const handleAdd = () => {
        let newMovie ={name}
        AddMovie (newMovie)
    }
  return (
    <div>
        <input placeholder='movie name' onChange = {(e) => handleName(e)} value ={name}/>
        <button onClick = {() => handleAdd()}>Add movie</button>
    </div>
  )
}   

export default AddMovie