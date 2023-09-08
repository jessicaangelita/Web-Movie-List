import { AuthProvider } from "../Context/AuthProvider";
import MovieList from "../Components/MovieList";
import HomeBanner from "../Components/HomeBanner";
import HeaderHome from "../Components/HeaderHome";

export default function Home() {
  return (
    <>
    <AuthProvider>
        <HeaderHome/>
      <HomeBanner/>
      <MovieList/>
    </AuthProvider>
    </>
  )
}
