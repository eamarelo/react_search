import React, { Component } from 'react'
import '../../../index.scss'

class SearchBar extends Component {
  constructor() {
    super()

    this.state = { value: null }
  }

  handleOnClick(e) {
    e.preventDefault()

    const { searchResult } = this.props
    const { value } = this.state

    searchResult(value)
  }

  handleOnChange(value) {
    this.setState({ value })
  }

  render() {
    return (
      <form>
        <input className="inputSearch" type="text" placeholder="search" onChange={e => this.handleOnChange(e.currentTarget.value)} />
        <button className="button" type="submit" onClick={this.handleOnClick.bind(this)}>Click</button>
      </form>
    )
  }
}

export default SearchBar
