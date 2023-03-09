import React, { useState } from "react";
import './DisplayInfor.scss'

// class DisplayInfor extends React.Component {
//     state = {
//         isShowListUser: true
//     }

//     handleShowHideList = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }

//     render() {
//         const { listUser } = this.props;
//         return (
//             <div className="display-infor-container">
//                 <div>
//                     <span onClick={this.handleShowHideList}>{
//                         this.state.isShowListUser ? 'Hide List User' : 'Show List User'
//                     }</span>
//                 </div>

//                 {this.state.isShowListUser &&
//                     <div>
//                         {listUser.map((item) => {
//                             return (
//                                 <div key={item.id} className={+item.age > 18 ? 'green' : 'red'}>
//                                     <div>
//                                         My name's {item.name}
//                                     </div>
//                                     <div>
//                                         My name's {item.age}
//                                     </div>
//                                     <div><button onClick={() => { this.props.handleDeleteUser(item.id) }}>Delete</button></div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div>

//         )
//     }
// };

const DisplayInfor = (props) => {
    const { listUser } = props;
    const [isShowListUser, setIsShowListUser] = useState(true)

    const handleShowHideList = () => {
        setIsShowListUser(!isShowListUser)
    }

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => { handleShowHideList() }}>
                    {isShowListUser ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {isShowListUser &&
                <div>
                    {listUser.map((item) => {
                        return (
                            <div key={item.id} className={+item.age > 18 ? 'green' : 'red'}>
                                <div>
                                    My name's {item.name}
                                </div>
                                <div>
                                    My name's {item.age}
                                </div>
                                <div><button onClick={() => { props.handleDeleteUser(item.id) }}>Delete</button></div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            }
        </div>

    )
}

export default DisplayInfor;
