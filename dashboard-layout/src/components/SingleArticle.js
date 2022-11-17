import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data'

function SingleArticle(props) {
    var { slug } = props.match.params;
    console.log(props)

    var eachData = data.filter((each) => {
        return (each.slug === slug)
    })
    console.log(eachData)

    return (
        <div className="w-full">

            {
                eachData.map((each) => (
                    <div className="mt-4 space-y-5 py-4 px-5">
                        <h2 className="text-2xl">{each.title}</h2>
                        <h2 className="text-xl text-green-500">{each.author}</h2>
                        <h2 className="text-xl text-green-500">{each.slug}</h2>

                        <Link to="/articles">
                            <button className="border mt-6 bg-black text-white rounded-md py-1 px-4">back</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default SingleArticle