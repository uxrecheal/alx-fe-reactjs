import React from 'react'
import { useState } from 'react'


const RegistrationForm = () => {

    const [formData, setFormData] = useState({name: '', email: '', password: ''})
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleChange = (event) => {
        const { name, value} =event.target;
        setFormData(prevState => ({...prevState, [name]: value}))
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Username
                <input type="name" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <label htmlFor="email">Email
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            </label>
            <label htmlFor="password" value={formData.password} onChange={handleChange}>Password
                <input type="password" name="password" />
            </label>

            <button type='submit'>Submit</button>

        </form>

    )
}

export default RegistrationForm;