import React from 'react'
import { Form } from 'react-advanced-form'
import { Input } from 'react-advanced-form-addons'
import { Button } from 'react-bootstrap'
import { rules, messages } from './Validation'
import './style.css'

const loginDetails = {
    "username": "hruday@gmail.com",
    "password" : "hruday123"
}

class Login extends React.Component {

    componentWillMount() {
        const value = '; ' + document.cookie
        const parts = value.split('; ' + 'session-id' + '=')
        if (parts && parts.length === 2) {
            const sessionValue = parts
            .pop()
            .split(';')
            .shift()
            sessionValue && this.props.history.push('/dashboard')
        }  
    }

    setSessionValue = () => {
        const now = new Date()
        const time = now.getTime()
        const expireTime = time + 10*36000
        now.setTime(expireTime)
        const sessionValue = Math.random().toString(36).replace('0.', '') 
        document.cookie = `session-id=${sessionValue};expires=${now.toGMTString()};path=/`
    }

    login = async(data: serialized) => {
        const { username, password} = data.serialized
        if(loginDetails.username === username && loginDetails.password === password) {
            this.setSessionValue()
            this.props.history.push('/dashboard')
        }
        else if (loginDetails.username === username || loginDetails.password === password) {
            alert('Username/Password is incorrect')
        }
        else {
            alert('User does not exist')
        }
    }
    render() {
        return (
            <div>
                <h1 className="d-flex justify-content-center pt-5">Login</h1>
                <Form className="d-flex flex-column align-items-center p-5 login-form" rules={rules} messages={messages} action={this.login}>
                    <label className="font-weight-bolder text-uppercase">User Name</label>
                    <Input placeholder="Enter mail id" type="email" name="username" required={true} pattern="[A-Za-z]{3}" />
                    <label className="font-weight-bolder text-uppercase">Password</label>
                    <Input placeholder="Enter Password" type="password" name="password" required={true} pattern="[A-Za-z]{3}" />
                    <Button className="my-4 submit-button" type="submit">LOGIN</Button>
                </Form>
            </div>
        )
    }
}

export default Login
export { Login }