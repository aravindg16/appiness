import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './style.css'

class UserListCard extends React.Component {
    render() {
        const {user} = this.props
        const { id, name, age, gender, email, phoneNo } = user
        return (
            <Row noGutters={true} className="m-2 p-3 py-3 bg-white flex-row align-items-center justify-content-around card-container shadow rounded">
                <Col lg="4">
                    <Row noGutters={true} className="py-1">
                        <span className="font-weight-bolder pl-5">ID:</span>
                        <span className="pl-2">{id}</span>
                    </Row>
                    <Row noGutters={true} className="py-1">
                        <span className="font-weight-bolder pl-5">Name:</span>
                        <span className="pl-2 text-capitalize">{name}</span>
                    </Row>
                </Col>

                <Col lg="4">
                    <Row noGutters={true} className="py-1">
                        <span className="font-weight-bolder pl-5">Age:</span>
                        <span className="pl-2">{age}</span>
                    </Row>
                    <Row noGutters={true} className="py-1">
                        <span className="font-weight-bolder pl-5">Gender:</span>
                        <span className="pl-2 text-capitalize">{gender}</span>
                    </Row>
                </Col>

                <Col lg="4">
                    <Row noGutters={true} className="py-1">
                        <span className="font-weight-bolder pl-5">Email:</span>
                        <span className="pl-2">{email}</span>
                    </Row>
                    <Row noGutters={true} className="py-1">
                        <span className="font-weight-bolder pl-5">Phone:</span>
                        <span className="pl-2">{phoneNo}</span>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default UserListCard
export {UserListCard}