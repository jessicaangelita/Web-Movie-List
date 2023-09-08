import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import HomeBanner from "./Components/HomeBanner";

export default function Home() {
  return (
    <>
    <AuthProvider>
      <Header/>
      <HomeBanner/>
      <MovieList/>
    </AuthProvider>
    </>
  )
}
