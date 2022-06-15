import React from 'react'

const Home =(props)=> {

    console.log(props.formData)

    const userElements = props.formData.map(item => {
        return(
            <section className='user-section col-md-4' key={item.id}>
                <h2>{item.fName} {item.lName}</h2>
                <h3>{item.email}</h3>
            </section>
        )
    })
    return(
        <main>
            <h1>Home Page</h1>
            <div className="row">
                {userElements}
            </div>
        </main>
    )
}

export default Home