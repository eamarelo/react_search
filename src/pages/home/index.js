import axios from 'axios'
import React, { Component } from 'react'

import initialState from './initial-state'
import Paragraph from './components/paragraph'

class Home extends Component {
  constructor() {
    super()

    this.state = initialState
  }

  /**
   * Get data
   * @param {string} query
   * @return {Object} dataFormatted
   */
  getData() {
    const apiUrl = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info'

    axios.get(apiUrl)
      .then((response) => {
        this.setState({
          data: this.formatEvents(response.data.records)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  /**
   * Format events
   * @param {Array} events
   * @return {Array} eventsFormatted
   */
  formatEvents(events) {
    return events.map(event => ({
      id: event.recordid,
      address: event.fields.address,
      city: event.fields.city,
      dateEnd: event.fields.date_end,
      dateStart: event.fields.date_start,
      description: event.fields.description,
      image: event.fields.image,
      title: event.fields.title
    }))
  }

  render() {
    const { data } = this.state

    return (
      <div>
        {this.getData()}
        <Paragraph data={data} />
      </div>
    )
  }
}

export default Home
