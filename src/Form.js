import React from 'react';

const  Form = (props) => {

    // const {name, email, role, salary } = props;
    const handleChange = e =>{
       const {name, value} = e.target;
       props.change(name,value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.submit();
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:               
                <input
                name='name'
                onChange={handleChange}
                type='text'
                placeholder='enter full name'
                value={props.values.name}
                />
            </label>
            <label>
                Email:
                <input
                name='email'
                onChange={handleChange}
                type='email'
                placeholder='enter valid email'
                value={props.values.email}
                />
            </label>
            <label>
                Role:
                <input
                name='role'
                onChange={handleChange}
                type='text'
                value={props.values.role}
                />
            </label>
            <label>
                Salary: $
                <input
                name='salary'
                onChange={handleChange}
                type='number'
                value={props.values.salary}
                />
            </label>
            <input type='submit' value='create your team' />
        </form>
    )
}

export default Form;