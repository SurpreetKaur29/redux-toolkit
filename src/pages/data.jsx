import { deleteTodo, getUser, updateTodo } from '@/redux/reducers/todoSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Data = ({ setEdit }) => {

  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  return (
    <table className='max-w-xl mx-auto p-5 bg-gray-400 w-full border mt-5'>
      <tbody>
        <tr className='border-b'>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {todos?.length > 0 ? (
          todos?.map((item, idx) => (
            <tr key={idx} className='text-center'>
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button className='mr-3' onClick={() => { dispatch(updateTodo(item)), setEdit(true), dispatch(getUser(item.email)) }}>Edit</button>
                <button onClick={() => dispatch(deleteTodo(item.email))}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className='text-center'>
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}