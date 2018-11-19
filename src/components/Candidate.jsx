import React from 'react'
import PropTypes from 'prop-types'

const Candidate = ({
  uuid,
  city,
  imgSrc,
  title,
  firstName,
  lastName,
  moveToLeft,
  moveToRight
}) => (
  <div className='candidate'>
    <div className='candidate__img'>
      <img src={imgSrc} alt={`${title} ${firstName} ${lastName}`} />
    </div>
    <div className='candidate__name'>
      <span>{title}</span>
      <span>{firstName}</span>
      <span>{lastName}</span>
    </div>
    <div className='candidate__city'>
      <span>City: {city}</span>
    </div>
    <div className='candidate__controls'>
      {moveToLeft && <button className='candidate__left' onClick={() => moveToLeft(uuid)}>&#9664;</button>}
      {moveToRight && <button className='candidate__right' onClick={() => moveToRight(uuid)}>&#9654;</button>}
    </div>
  </div>
)

Candidate.propTypes = {
  title: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  moveToLeft: PropTypes.func,
  moveToRight: PropTypes.func
}

Candidate.defaultProps = {
  moveToLeft: null,
  moveToRight: null
}

export default Candidate
