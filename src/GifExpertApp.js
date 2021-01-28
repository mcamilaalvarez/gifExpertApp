import React from 'react'
import { useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X','Meliodas']
    const [categories, setCategories] = useState(['Meliodas']);
    
    // const handleAdd = () =>{
    //     // setCategories([...categories, 'Levi']);
    //     setCategories(cats => [...cats, 'HunterXHunter']);

    // }
    return (
        <>
            <h2> Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {/* <button onClick={handleAdd}> Agregar</button> */}
            <ul>
                {
                    categories.map( category=> 
                         <GifGrid  
                         key= {category}
                         category={category}/> 
                    )
                }
            </ul>
        </>
    )
}
