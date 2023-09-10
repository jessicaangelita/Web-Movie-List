import SignInPage from "../Components/SignInPage";
import { AuthProvider } from "../Context/AuthProvider";
import Header from "../Components/Header";


export const metadata = {
    title: "Sign In",
};

export default function SignIn() {
    return(
        <div>
            <Header/>
            <SignInPage/>
        </div>
        
    )
}