import React from "react";
import UseFetch from "./UseFetch";

const FetchYogaData = () => {

    const url = "https://api.npoint.io/4459a9a10e43812e1152"
    const [data] = UseFetch(url)

    console.log("[fetch yoga]", data)

    return (

        <ul>
            {data?.map((item, index) => (
                <li key={index} className='list_data'>
                    <h3>name: {item.name}</h3>
                    <p>benefits: {item.benefits}</p>
                    <p><b>time_duration</b>: {item.time_duration}</p>
                </li>
            ))}
        </ul>

    )
}
export default FetchYogaData;