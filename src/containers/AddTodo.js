import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import IconButton from 'material-ui/IconButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import TextField from 'material-ui/TextField'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.getValue().trim()) {
            return
          }
          dispatch(addTodo(input.getValue()))
          input.getInputNode().value = ''
        }}
      >
        <TextField
          ref={node => {
            input = node
          }}
        />
        <IconButton type="submit">
          <ContentAdd/>
        </IconButton>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
