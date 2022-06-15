import React from 'react'


const Form =(props)=> {


    console.log(props.formData)

    return(
        <form onSubmit={props.handleSubmit}>
            <h1>Create an account</h1>
            <label htmlFor='fName'>
                <input type='text' onChange={props.handleChange} placeholder='first name' name='fName' value={props.formData.fName} required/>
            </label>
            <label htmlFor='lName'>
                <input type='text' onChange={props.handleChange} placeholder='last name' name='lName' value={props.formData.lName} required />
            </label>
            <label htmlFor='email'>
                <input type='text' onChange={props.handleChange} placeholder='email' name='email' value={props.formData.email} required />
            </label>
            <label htmlFor='password'>
                <input type='password' onChange={props.handleChange} placeholder='password' name='password' value={props.formData.password} required />
            </label>
            <button>Click to Submit</button>
        </form>
    )
}

export default Form