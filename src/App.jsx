import Header from "../components/header"
import Places from "../components/places"
import data from "./data"

function App() {
  const Place = data.map((place) => {
    return (
      <Places
        key={place.id}
        {...place}
      />
    )
  }) 

  return (
    <>
      <Header />
      {Place}
      
    </>
  )
}

export default App
