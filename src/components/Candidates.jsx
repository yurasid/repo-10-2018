import React from 'react'
import PropType from 'prop-types'
import Candidate from './Candidate'

export class Candidates extends React.Component {
  render () {
    const { filter, candidates, moveToLeft, moveToRight, className } = this.props
    return (
      <div className={`candidates ${className}`}>
        {candidates
          .filter(candidate => candidate.interviewState === filter)
          .map(candidate => (
            <Candidate
              key={candidate.login.uuid}
              title={candidate.name.title}
              firstName={candidate.name.first}
              lastName={candidate.name.last}
              city={candidate.location.city}
              imgSrc={candidate.picture.thumbnail}
              uuid={candidate.login.uuid}
              moveToLeft={moveToLeft}
              moveToRight={moveToRight}
            />
          ))}
      </div>
    )
  }
}

Candidates.propTypes = {
  filter: PropType.string.isRequired,
  candidates: PropType.arrayOf(PropType.object).isRequired,
  moveToLeft: PropType.func,
  moveToRight: PropType.func
}

Candidates.defaultProps = {
  moveToLeft: null,
  moveToRight: null
}

export default Candidates
