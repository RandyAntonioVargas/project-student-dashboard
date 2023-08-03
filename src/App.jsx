import data from "./data/data.json"


function App() {
//js
  // WILL use state

  const studentTorender = data.map(
    
    (eachStudentObj) => {
      return(<h4>MONEYYYYYYYYYY</h4>)
    }
  )
  return (

    <div>
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field."/>
      <h1>Student Dashboard</h1>

    </div>

  );
}

export default App;
