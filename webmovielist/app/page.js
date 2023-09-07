import Header from "./Components/Header";
import { AuthProvider } from "./Context/AuthProvider";
import MovieList from "./Components/MovieList";

export default function Home() {
  return (
    <>
    <AuthProvider>
    <Header/>
    <MovieList/>
    </AuthProvider>
    </>
  )
}
