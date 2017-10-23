import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return (
      <RaisedButton
        label={children}
        disabled={true}
      />
    )
  }

  return (
    <RaisedButton
      label={children}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    />
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
