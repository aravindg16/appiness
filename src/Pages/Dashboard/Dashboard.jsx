import React from 'react'
import { userState } from './state'
import {observer} from 'mobx-react'
import { Row, Button } from 'react-bootstrap'
import {UserListCard} from './UserListCard'

class AccountDashboard extends React.Component {

    checkSessionExpired = () => {
        const value = '; ' + document.cookie
        const parts = value.split('; ' + 'session-id' + '=')
        if (parts && parts.length !== 2) {
            this.props.history.push('/')
        }
    }

    componentWillMount() {
        this.checkSessionExpired()
    }
    componentDidUpdate() {
        this.checkSessionExpired()
    }
    componentDidMount() {
        fetch("https://api.myjson.com/bins/a1ezd", {
            method: 'GET',
        })
        .then(res => res.json())
        .then(
            (result) => {
                userState.userData = result && result.user
            },
            (error) => {
            }
        )
    }
    userListCard = (user) => {
        return <UserListCard user={user}/>
    }
    logOut = () => {
        document.cookie = 'session-id=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="m-4">
                <div className="d-flex justify-content-between pl-2">
                    <h2>Employee List</h2>
                    <Button className="mb-4 logout-button" onClick={this.logOut}>Logout</Button>
                </div>
                <Row noGutters={true} className="bg-light flex-column align-items-center">
                    {userState.userData && userState.userData.map(this.userListCard)}
                </Row>
            </div>
        )
    }
}

const Dashboard = observer(AccountDashboard)

export default Dashboard
export { Dashboard }