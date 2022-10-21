import React from 'react'
import styles from './Search.module.scss'

export class Search extends React.Component {
  state = {
    search: '',
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search)
    }
  }

  handleClick = () => {
    this.props.searchMovies(this.state.search)
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleClear = () => {
    this.setState({ search: '' })
  }

  render() {
    return (
      <div className={styles.searchRow}>
        <div className={styles.inputContainer}>
          <input
            placeholder="Search"
            type="text"
            className={styles.inputSearch}
            value={this.state.search}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
            //onBlur={this.handleClear}
          />
          <button
            className={styles.buttonRemove}
            onClick={this.handleClear}
          ></button>
        </div>

        <button className={styles.buttonSearch} onClick={this.handleClick}>
          Search
        </button>
      </div>
    )
  }
}
