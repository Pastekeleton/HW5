import React from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <a href={row.URL}>{row.URL}</a>
        </td>
        <td>
          <button style={{
        color: 'white',backgroundColor: 'blue',
        width: '100px',
        height: '30px'}} onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  {
    return (<table>
      <TableHeader/>
      <TableBody linkData={props.linkData} removeLink={props.removeLink}/>
    </table>)
  }
}

export default Table
