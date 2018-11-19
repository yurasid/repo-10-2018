import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  initUsers,
  moveToApplied,
  moveToInterviewing,
  moveToHired,
  filterBy,
  changeFilter
} from '../actions/userActions'
import { Candidates } from './Candidates'
import { INTERVIEW, FILTER } from '../constants/interviewState'

const mapDispatchToProps = dispatch => (bindActionCreators({
  initUsers,
  moveToApplied,
  moveToInterviewing,
  moveToHired,
  filterBy,
  changeFilter
}, dispatch))

const mapStateToProps = ({ candidates, filter, search }) => ({
  candidates,
  filter,
  search
})

class Board extends React.Component {
  constructor (props) {
    super(props)

    this.onFilterInput = this.onFilterInput.bind(this)
    this.onFilterTypeChange = this.onFilterTypeChange.bind(this)
  }
  componentDidMount () {
    const { initUsers } = this.props
    initUsers()
  }

  onFilterTypeChange (e) {
    const { changeFilter } = this.props
    changeFilter(e.target.value)
  }

  onFilterInput (e) {
    const { filterBy } = this.props
    filterBy(e.target.value)
  }

  getFilteredCadidates (filter = FILTER.CITY, search = '', candidates) {
    const filterByName = ({ name }) => (
      `${name.first} ${name.last}`
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    )
    const filterByCity = ({ location }) => (
      location.city
        .toLowerCase()
        .includes(search.toLocaleLowerCase())
    )

    switch (filter) {
      case FILTER.NAME: {
        return candidates.filter(filterByName)
      }

      case FILTER.CITY: {
        return candidates.filter(filterByCity)
      }

      default: {
        return candidates
      }
    }
  }

  render () {
    const {
      candidates,
      moveToApplied,
      moveToInterviewing,
      moveToHired,
      search,
      filter
    } = this.props

    let filteredCandidates = this.getFilteredCadidates(filter, search, candidates)

    return (
      <div className='board'>
        <section>
          <h1 className='board__header'>Hiring app</h1>
        </section>
        <section className='board__search'>
          <input className='board__input' type='text' onInput={this.onFilterInput} />
          <select className='board__filter' onChange={this.onFilterTypeChange}>
            <option name='City' value={FILTER.CITY}>City</option>
            <option name='Name' value={FILTER.NAME}>Name</option>
          </select>
        </section>
        <section>
          <div className='board__body board__body_col_3'>
            <div className='board__col'>
              <h2 className='board__subheader'>Applied</h2>
              <Candidates
                candidates={filteredCandidates}
                filter={INTERVIEW.APPLIED}
                moveToRight={moveToInterviewing}
              />
            </div>
            <div className='board__col'>
              <h2 className='board__subheaer'>Interviewing</h2>
              <Candidates
                candidates={filteredCandidates}
                filter={INTERVIEW.INTERVIEWING}
                moveToLeft={moveToApplied}
                moveToRight={moveToHired}
              />
            </div>
            <div className='board__col'>
              <h2 className='board__subheader'>Hired</h2>
              <Candidates
                candidates={filteredCandidates}
                filter={INTERVIEW.HIRED}
                moveToLeft={moveToInterviewing}
              />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
