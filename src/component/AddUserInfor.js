import React, { useState } from "react";

// class UserInfor extends React.Component {
//     state = {
//         name: '',
//         age: 0,
//         address: 'Quang Nam'
//     }

//     handleOnClick(event) {
//         console.log('Handle Click')
//         this.setState({
//             name: 'Cong clicked',
//             age: 20
//         })
//     }

//     handleOnMouseOver(event) {
//         console.log('Handle On mouse Over')
//         this.setState({
//             name: 'Cong on mouse over',
//             age: 22
//         })
//     }

//     handleOnChangeName = (event) => {
//         // console.log(event.target.value)
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         // console.log(event.target.value)
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault()
//         this.props.handleAddUser({
//             id: Math.floor(Math.random() * 100 + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         })
//     }

//     render() {
//         return (
//             <>
//                 My name is {this.state.name} and I'm {this.state.age} years old
//                 <button onClick={(event) => { this.handleOnClick(event) }}>Click Me</button>
//                 <br></br>
//                 <button onMouseOver={(event) => { this.handleOnMouseOver(event) }}>Hover me</button>
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name:</label>
//                     <input type="text" onChange={(event) => this.handleOnChangeName(event)}></input>
//                     <label>Your age:</label>
//                     <input type="text" onChange={(event) => this.handleOnChangeAge(event)}></input>
//                     <button>Submit</button>
//                 </form>

//             </>
//         );


//     }
// }

const UserInfor = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [address, setAddress] = useState('Quang Name')

    const handleOnClick = (event) => {
        console.log('Handle Click')
        setName('Cong clicked')
        setAge(20)
    }

    const handleOnMouseOver = (event) => {
        console.log('Handle On mouse Over')
        setName('Cong on mouse over')
        setAge(22)
    }

    const handleOnChangeName = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        console.log(event.target.value)
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        // this.props.handleAddUser({
        //     id: Math.floor(Math.random() * 100 + 1) + '-random',
        //     name: this.state.name,
        //     age: this.state.age
        // })
        props.handleAddUser({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            name: name,
            age: age
        })

    }


    return (
        <>
            My name is {name} and I'm {age} years old
            <button onClick={(event) => { handleOnClick(event) }}>Click Me</button>
            <br></br>
            <button onMouseOver={(event) => { handleOnMouseOver(event) }}>Hover me</button>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <input type="text" onChange={(event) => handleOnChangeName(event)}></input>
                <label>Your age:</label>
                <input type="text" onChange={(event) => handleOnChangeAge(event)}></input>
                <button>Submit</button>
            </form>

        </>
    );
}
export default UserInfor;