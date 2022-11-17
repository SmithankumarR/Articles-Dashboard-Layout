import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../data'
import { Link } from 'react-router-dom';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(data)

        return (
            <div className="w-full">
                <ul>
                    {
                        data.map((each) => (
                            <li key={each.slug} className=" border p-4 mb-4">
                                <NavLink to={`/post/${each.slug}`}>
                                    <h2 className="text-xl px-4 hover:bg-blue-300 py-2" >{each.title}</h2>
                                </NavLink>
                            </li>
                        ))
                    }
                    <Link to="/">
                        <button className="border mt-6 bg-black text-white rounded-md py-1 px-4">back</button>
                    </Link>
                </ul>
            </div>
        )
    }
}
export default Articles;