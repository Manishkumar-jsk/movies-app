import React,{useState} from 'react';
import { fetchData,movieOptions } from '../utills/fetchData';

const Navbar = ({setMovies}) => {
  const[search,setSearch] = useState('');
  const handleSearch = async (e) => {
    e.preventDefault()
    if(search){
      const movieData = await fetchData('https://movies-app1.p.rapidapi.com/api/movies',movieOptions);
      const searchedMovies = movieData.filter(
        (item) => item.titleOriginal.toLowerCase().includes(search)
      );
      setSearch('');
      setMovies(searchedMovies)
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MyShow</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cartoons</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">HBO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Events</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <button className="btn btn-outline-success"  onClick={handleSearch}>Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
