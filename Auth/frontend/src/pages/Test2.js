import React from 'react'
import { Link } from 'react-router-dom'

import Logout from '../components/Logout'
import UserInfo from '../components/UserInfo'

const Test2 = () => {
    return (
        <div>
            <h1>Hello test2</h1>
            <Link to="/test">test</Link>
            <Link to="/test1">test1</Link>
            <Link to="/test2">test2</Link>
            <Logout />
            <UserInfo />
        </div>
    )
}

export default Test2