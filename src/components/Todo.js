import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem} from 'material-ui/List'
import ActionDone from 'material-ui/svg-icons/action/done'
import {blue200, lime500} from 'material-ui/styles/colors'

const Todo = ({ onClick, completed, text }) => (
  <ListItem
    primaryText={text}
    onClick={onClick}
    leftIcon={<ActionDone color={completed ? lime500 : blue200}/>}
  />
)

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
