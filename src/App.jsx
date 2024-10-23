import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  const handleSearch = (query) => {
    console.log(query)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSearch}/>
    </div>
  )
}

export default App
