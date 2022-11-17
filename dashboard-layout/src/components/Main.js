import React from 'react';
import Articles from './Articles';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log("Articles")
        return (
            <div className=" w-full">
                <Articles />
            </div>
        )
    }
}
export default Main;