import React from 'react'

const Results = ({ data }) => (
  <ul>
    {data.map(item => <li>{item.title}</li>)}
  </ul>
)

export default Results
