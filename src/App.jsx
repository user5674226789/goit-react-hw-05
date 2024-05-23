import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./components/MoviesCast/HomePage"
import MoviesPage from "./components/MoviesList/MoviesPage"

return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies">MoviesPage</NavLink>
                </li>
                <li>
                    <NavLink to="/movies/:moviedId">MovieDetailsPage</NavLink>
                </li>
            </ul>
        </nav>
         <Routes>
            <Route path="/" element={<div>Home Page</div>}></Route>
            <Route></Route>
         </Routes>
    </div>
)
