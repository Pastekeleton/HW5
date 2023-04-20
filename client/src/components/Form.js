import { useState } from 'react'

const Form = (props) => {
  const [name, setName] = useState('');
  const [URL, setURL] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(name, URL);
    setName('');
    setURL('');
  }

  return (
    <form style={{color: 'lightgray'}} onSubmit={onFormSubmit}>
      <label htmlFor='name'>Name</label><br/>
      <input type='text' name='name' value={name} onChange={(event)=> setName(event.target.value)}/>
      
      <br/>
      
      <label htmlFor='URL'>URL</label><br/>
      <input type='text' name='URL' value={URL} onChange={(event)=> setURL(event.target.value)}/><br/>
      
      <button type='submit' style={{
        color: 'white',backgroundColor: 'blue',
        width: '100px',
        height: '50px'}}>Submit</button>
    </form>
  )
}

export default Form
