import React, { useEffect, useState } from 'react'

interface Props {
    
}

const Test = (props: Props) => {
    const [dataFetch, setdataFetch] = useState('')
    const makeAPICall = async () => {
        try {
          const response = await fetch('http://localhost:3001/ff', {mode:'cors'});
        //   const data = await response.json();
          console.log(response)
        //   setdataFetch(data)
        }
        catch (e) {
          console.log(e)
        }
      }
      useEffect(() => {
        makeAPICall();
      }, [])
    return (
        <div>
            <h1>Hay</h1>
            <h1>Data is {dataFetch}</h1>
            
        </div>
    )
}

export default Test
