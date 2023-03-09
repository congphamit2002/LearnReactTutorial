import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUser: [
//             { id: '1', name: 'CongPham', age: 18 },
//             { id: '2', name: 'CongPham2', age: 19 },
//             { id: '3', name: 'CongPham3', age: 20 },
//         ]
//     }

//     handleAddUser = (userObj) => {
//         this.setState({
//             listUser: [userObj, ...this.state.listUser]
//         })
//         console.log(userObj)
//     }

//     handleDeleteUser = (userId) => {
//         let listClone = this.state.listUser
//         listClone = listClone.filter(item => item.id !== userId)
//         this.setState({
//             listUser: listClone
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <AddUserInfor handleAddUser={this.handleAddUser} />
//                 <br /><br />
//                 <DisplayInfor listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser} />

//             </div>
//         );
//     }
// }

const MyComponent = () => {

    const [listUser, setListUser] = useState([
        { id: '1', name: 'CongPham', age: 18 },
        { id: '2', name: 'CongPham2', age: 19 },
        { id: '3', name: 'CongPham3', age: 20 },
    ])

    const handleAddUser = (userObj) => {
        setListUser([userObj, ...listUser])
    }

    const handleDeleteUser = (userId) => {
        let listClone = listUser.filter(item => item.id != userId)
        setListUser(listClone)
    }
    return (
        <div>
            <AddUserInfor handleAddUser={handleAddUser} />
            <br /><br />
            <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} />

        </div>
    );
}

export default MyComponent;