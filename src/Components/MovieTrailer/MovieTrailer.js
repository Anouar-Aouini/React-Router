import React from 'react';
import { useParams } from 'react-router-dom';
import TrailerCard from "./TrailerCard"

export default function MovieTrailer({data}) {
    const { Id } = useParams();
    console.log(data)
    return (
    <div>{data.filter((el)=>el.id==Id).map((el,key)=><TrailerCard key={key} el={el}/>)}
    </div>
    );
}
