import React from 'react'



const App = () => {
  
  const relatives=[{name:'Ramesh',key:'relativeListItem1'},{name:'Rahul',key:'relativeListItem2'},{name:'Suresh',key:'relativeListItem3'},{name:'Ravi',key:'relativeListItem4'}]
    
  const items=relatives.map((relative)=>
  <li key={relative.key}>{relative.name}</li>
  );
  return (
    <div id="main">
      <h1>My Relatives</h1>
      <li>{items}</li>


    </div>
  )
}

export default App
