import React from "react";
import useSWR from "swr";

const fetcher = (args) => {
    return fetch(args[0], {
        method: "GET",
        headers: {
            'X-Api-Key': args[1],
            "Content-type": 'application/json'
        }
    }).then(async (res) => await res.json())
}


const Quotes = () => {
    const apiKey = "HenuphFhj4wtpwAoFc1eWQ==ZVbuWGOx4imWHLJN";
    const { data } = useSWR(["https://api.api-ninjas.com/v1/quotes?category=alone", apiKey], fetcher, { suspense: true });

    return <div className="quote-container">
        <p>{data && data[0].quote} </p>
        <h4>{data && data[0].author}</h4>
    </div>;
};

export default Quotes;
