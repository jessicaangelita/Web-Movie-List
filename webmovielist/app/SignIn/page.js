import SignInPage from "../Components/SignInPage";
import { AuthProvider } from "../Providers";
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