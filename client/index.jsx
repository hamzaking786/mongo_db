import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function FrontPage() {
    return (
    <div>
        <h1>Movie Database</h1>
        <ul>
            <li>
                <Link to={"/movies"}>List Movies</Link>
            </li>
            <li>
                <Link to={"/movies/new"}>Add new Movies</Link>
            </li>
        </ul>
    </div>
    );
}

function ListMovies() {
    return <div>
        <h1>Movies in the database</h1>
    </div>;
}

function AddNewMovies() {
    return <form>
        <h1>Add new movies</h1>
    </form>;
}

function Application() {
    return <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/movies"} element={<ListMovies />} />
        <Route path={"/movies/new"} element={<AddNewMovies />} />
    </Routes>
    </BrowserRouter>;
}

ReactDOM.render(<Application />, document.getElementById('app'));