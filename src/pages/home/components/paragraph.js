import React from 'react'
import '../../../index.scss'

const Paragraph = ({ data }) => (
  <div>
    {data.map(item => (
      <div className="test" key={item.id}>
        <div className="title">
          {`${item.title} :`}
        </div>
        <img className="floatLeft" src={item.image} alt="img-event" height="40%" width="40%" />
        <div>
          {`Start: ${item.dateStart}`}
        </div>
        <div>
          {`End: ${item.dateEnd}`}
        </div>
        <div>
          {`City: ${item.city}`}
        </div>
        <div>
          {`Address: ${item.address}`}
        </div>
        <div>
          {`Description: ${item.description}`}
        </div>
      </div>
    ))}
  </div>
)

export default Paragraph
