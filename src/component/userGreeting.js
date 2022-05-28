import React from 'react'

function userGreeting(props) {
    return (
        <div>
            <h2 className="greeting">{props.grade}</h2>
        </div>
    )
}

export default userGreeting
