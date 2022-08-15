import "./App.css";
import PersonCard from "./components/PersonCard";

const peopleArr = [
  {
    firstName: "Ollie",
    lastName: "Rodrigo",
    age: 19,
    hairColor: "brown",
  },
  {
    firstName: "Emily",
    lastName: "Chang",
    age: 42,
    hairColor: "brown",
  },
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <PersonCard
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.age}
          hairColor={personObj.hairColor}
        />
      ))}
    </div>
  );
}

export default App;
