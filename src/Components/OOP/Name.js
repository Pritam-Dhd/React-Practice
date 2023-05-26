import React from 'react'

class Name extends React.Component {
    constructor (props) {
        super(props)
    }
    render  () {
        return(
            <p>{this.props.name}</p>
        )
    }
}

export default Name