import React, { useEffect, useState } from 'react'

const HookFetch = (props) => {
  const [data, setData] = useState([])
  const [error, hasError] = useState(false)
  const fetchURL = "http://eventsensei.com/wp-json/wp/v2/posts"



    const getWp = () => {
        fetch(`${fetchURL}`)
         .then((res) => res.json())
         //.then(wow => console.log(wow))
         .then(response => 
           setData(response))
           .catch(err => {
               hasError(true)
              console.log("Has Error!")
           }).finally(console.log("Fetch Request Attempted"))
       }
    
   useEffect(() => {
    getWp()

   },[]);

   console.log(data)

  //  console.log("props")
  //  console.log(this.props.data2)
 
  return (
    <div>
   {error ? 
   <div>Error occured fetching data</div> : 
   <div>
    { data?.map((item) => 
        <ul>
          <b style={titles}>{item.title.rendered}</b>
          <div dangerouslySetInnerHTML={{__html: item.content.rendered}}></div>
        </ul>
      ) }
      </div>
      }
     </div>
  )
}

export default HookFetch;

const titles = {
  display: "flex",
  fontSize: "25px",
 alignItems: "center",
 justifyContent: "center"
}