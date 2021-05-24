import React from 'react'
import SelectSearch from "react-select-search";

function SearchBox(props) {

    console.log("herer")
    console.log(props.datar)
    console.log("here-endr")

    const array = props.datar.map(arr => arr.slug)
    const objectarray = array.map(i=>({name:i, value:i}))


    const options = [
        {name: 'Swedish'},
        {name: 'English'}
    ];

    console.log(options)

    return (

        <SelectSearch
        options={objectarray}
        value={objectarray}
        search={true}
        placeholder="Search"
        
    />


        // <div>
        //     <div style ={{border: '.5px solid black', background: '#D8BFD8', color: "#382CAF"}}>Search Guest</div>
        //     <input onChange={props.handleInput} type ="text"
        //     style= {{flex: '0 0 100%', width: '100%', padding:'5px', border: '.5px solid black'}}
        //     placeholder="Search Guest..."/>
        // </div>
    )
}

export default SearchBox;