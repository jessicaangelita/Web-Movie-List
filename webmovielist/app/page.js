import Header from "./Components/Header";
import { AuthProvider } from "./Context/AuthProvider";

export default function Home() {
  return (
    <>
    <AuthProvider>
    <Header/>
    </AuthProvider>
    </>
  )
}
