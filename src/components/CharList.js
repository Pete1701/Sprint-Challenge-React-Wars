import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "./CharCard";
import './CharList.css';
//import { Card } from "reactstrap";

function CharList() {
    const [char, setChar] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            console.log(response.data.results);
            setChar(response.data.results);
        })
        .catch(error => {
            console.log('Nothing', error);
        });
    }, []);
    return (
        <div>
            {char.map(item => {
                return (
                    <CharCard
                        name={item.name}
                        birth_year={item.birth_year}               
                    />
                );
            })}
        </div>
    );
};


export default CharList;