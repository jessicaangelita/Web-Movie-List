import SignInPage from "../Components/SignInPage";
import { AuthProvider } from "../Context/AuthProvider";

export const metadata = {
    title: "Sign In",
};

export default function SignIn() {
    return(
        <AuthProvider>
            <div className="SignIn">
                <SignInPage/>
            </div>
        </AuthProvider>
    )
}