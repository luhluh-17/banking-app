import React from 'react'

function Table({ headings, data }) {
  return (
    <table>
      <thead>
        <tr>
          {headings.map((text, index) => (
            <th key={index}>{text}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  )
}

export default Table
