// map / search
import React from 'react'
import { uselocation } from "react-dom";

function Home(){
    let item = uselocation();
    console.log(item.state);
    return(
        <div className="App">
            <h2> Card comimg soon</h2>

        </div>
    )
}
  const search = (e) => {
    const filtered = data.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilterd(filtered);
  };
export default Home