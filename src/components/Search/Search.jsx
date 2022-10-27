import React from 'react'
import styles from './Search.module.scss'

export function Search({ searchMovies }) {
  const [search, setSearch] = React.useState('')
  const [type, setType] = React.useState('all')

  const handleFilter = (e) => {
    setType(() => e.target.dataset.type)
    searchMovies(search, e.target.dataset.type)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      searchMovies(search, type)
    }
  }

  const handleClick = () => {
    searchMovies(search, type)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleClear = () => {
    setSearch({ search: '' })
  }

  return (
    <div className={styles.searchRow}>
      <div className={styles.containerSearch}>
        <div className={styles.inputContainer}>
          <input
            placeholder="Search"
            type="text"
            className={styles.inputSearch}
            value={search}
            onChange={handleChange}
            onKeyDown={handleKey}
            //onBlur={this.handleClear}
          />
          <button
            className={styles.buttonRemove}
            onClick={handleClear}
          ></button>
        </div>

        <button className={styles.buttonSearch} onClick={handleClick}>
          Search
        </button>
      </div>

      <div className={styles.radioInput}>
        <input
          type="radio"
          id="All"
          data-type="all"
          onChange={handleFilter}
          checked={type === 'all'}
        />
        <label htmlFor="All">All</label>
        <input
          type="radio"
          id="Movies"
          data-type="movie"
          onChange={handleFilter}
          checked={type === 'movie'}
        />
        <label htmlFor="Movies">Movies</label>
        <input
          type="radio"
          id="Series"
          data-type="series"
          onChange={handleFilter}
          checked={type === 'series'}
        />
        <label htmlFor="Series">Series</label>
        {/* <input
          type="radio"
          id="Episode"
          data-type="episode"
          onChange={handleFilter}
          checked={type === 'episode'}
        />
        <label htmlFor="Episode">Episode</label> */}
        <input
          type="radio"
          id="Game"
          data-type="game"
          onChange={handleFilter}
          checked={type === 'game'}
        />
        <label htmlFor="Game">Game</label>
      </div>
    </div>
  )
}

// export class Search extends React.Component {
//   state = {
//     search: '',
//     type: 'all',
//   }

//   handleFilter = (e) => {
//     this.setState(
//       () => ({ type: e.target.dataset.type }),
//       () => {
//         this.props.searchMovies(this.state.search, this.state.type)
//       }
//     )
//   }

//   handleKey = (e) => {
//     if (e.key === 'Enter') {
//       this.props.searchMovies(this.state.search, this.state.type)
//     }
//   }

//   handleClick = () => {
//     this.props.searchMovies(this.state.search, this.state.type)
//   }

//   handleChange = (e) => {
//     this.setState({ search: e.target.value })
//   }

//   handleClear = () => {
//     this.setState({ search: '' })
//   }

//   render() {
//     return (
//       <div className={styles.searchRow}>
//         <div className={styles.containerSearch}>
//           <div className={styles.inputContainer}>
//             <input
//               placeholder="Search"
//               type="text"
//               className={styles.inputSearch}
//               value={this.state.search}
//               onChange={this.handleChange}
//               onKeyDown={this.handleKey}
//               //onBlur={this.handleClear}
//             />
//             <button
//               className={styles.buttonRemove}
//               onClick={this.handleClear}
//             ></button>
//           </div>

//           <button className={styles.buttonSearch} onClick={this.handleClick}>
//             Search
//           </button>
//         </div>

//         <div className={styles.radioInput}>
//           <input
//             type="radio"
//             id="All"
//             data-type="all"
//             onChange={this.handleFilter}
//             checked={this.state.type === 'all'}
//           />
//           <label htmlFor="All">All</label>
//           <input
//             type="radio"
//             id="Movies"
//             data-type="movie"
//             onChange={this.handleFilter}
//             checked={this.state.type === 'movie'}
//           />
//           <label htmlFor="Movies">Movies</label>
//           <input
//             type="radio"
//             id="Series"
//             data-type="series"
//             onChange={this.handleFilter}
//             checked={this.state.type === 'series'}
//           />
//           <label htmlFor="Series">Series</label>
//           <input
//             type="radio"
//             id="Episode"
//             data-type="episode"
//             onChange={this.handleFilter}
//             checked={this.state.type === 'episode'}
//           />
//           <label htmlFor="Episode">Episode</label>
//         </div>
//       </div>
//     )
//   }
// }
