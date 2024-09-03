import { addTodo, updateTodo } from '../redux/reducers/todoSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Form = ({ edit, setEdit }) => {
    const [input, setInput] = useState({
        name: '',
        email: '',
    })

    const dispatch = useDispatch()
    const getUser = useSelector((state) => state.user)

    useEffect(() => {
        if (edit) {
            setInput({
                name: getUser.name,
                email: getUser.email,
            })
        } else {
            setInput({
                name: '',
                email: '',
            })
        }
    }, [edit])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit) {
            setEdit(false)
            dispatch(updateTodo(input))
        } else {
            dispatch(addTodo(input))
            setInput({
                name: '',
                email: '',
            })
        }
    }

    return (
        <form className='flex flex-col gap-4 max-w-lg mx-auto p-5 bg-gray-700 mt-2' onSubmit={handleSubmit}>
            <h2>{edit ? 'Edit User' : 'Add User'}</h2>
            <input type='text' name='name' placeholder='Name' value={input.name} onChange={handleChange} className='p-2 text-black' />
            <input disabled={edit} type='text' name='email' placeholder='Email' value={input.email} onChange={handleChange} className='p-2 text-black' />
            <button type='submit' className='bg-black py-2'>{edit ? 'Update' : 'Add'}</button>
        </form>
    )
}

export default Form;