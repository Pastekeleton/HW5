import { useState } from 'react'
import Table from './Table'
import Form from './Form';

const LinkContainer = (props) => {
  const [linkData, setLinkData] = useState([]);

  const handleRemove = (index) => {
    const arrCopy = linkData.filter((element, idx) => index !== idx);
    setLinkData(arrCopy);
  }

  const handleSubmit = (name, URL) => {
    setLinkData([...linkData, {name, URL}]);
    
  }
  
  const postLink = async () => {
    let testLink = {
      name: "Test 5/1/23",
      URL: "test.com"
    }
    try {
      let response = await fetch('/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testLink)
      })
      console.log(response)
      let message = response.text()
      console.log(message)
    } catch (error){
      console.log(error)
    }
  }

  useEffect(() =>{
    postLink()
  }, [])

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <Table linkData={linkData} removeLink={handleRemove}/>

      <br />

      <h3>Add New</h3>
      <Form handleSubmit={handleSubmit}/>
    </div>
  )
}

export default LinkContainer
