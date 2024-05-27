import { Route, Routes } from "react-router-dom";
 import Navigation from "../components/Navigation/Navigation.jsx";
 import HomePage from "../pages/HomePage/HomePage.jsx";
import MoviesPage from "../pages/MoviesPage/MoviesPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage.jsx";
// import BankInfo from "../BankInfo";
// import PaymentReceipt from "../PaymentReceipt";
import css from "./App.module.css";

export default function App() {


  return (
    <div>    
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}> */}
         {/* <Route path="bank" element={<BankInfo />} />
          <Route path="receipt" element={<PaymentReceipt />} />
        </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
