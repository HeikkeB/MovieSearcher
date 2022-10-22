import React from 'react'
import styles from './Search.module.scss'

export class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  }

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type)
      }
    )
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  handleClick = () => {
    this.props.searchMovies(this.state.search, this.state.type)
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
        <div className={styles.containerSearch}>
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

        <div className={styles.radioInput}>
          <input
            type="radio"
            id="All"
            data-type="all"
            onChange={this.handleFilter}
            checked={this.state.type === 'all'}
          />
          <label htmlFor="All">All</label>
          <input
            type="radio"
            id="Movies"
            data-type="movie"
            onChange={this.handleFilter}
            checked={this.state.type === 'movie'}
          />
          <label htmlFor="Movies">Movies</label>
          <input
            type="radio"
            id="Series"
            data-type="series"
            onChange={this.handleFilter}
            checked={this.state.type === 'series'}
          />
          <label htmlFor="Series">Series</label>
          <input
            type="radio"
            id="Episode"
            data-type="episode"
            onChange={this.handleFilter}
            checked={this.state.type === 'episode'}
          />
          <label htmlFor="Episode">Episode</label>
        </div>
      </div>
    )
  }
}
