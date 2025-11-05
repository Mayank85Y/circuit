import { LoginForm } from "@/features/auth/components/login-form"
import { requireUnAuth } from "@/lib/auth-utils";

const Page = async() => {
    await requireUnAuth(); //if user go to /login he will not see login. Not done on Layout file as security layer can be compromised like middlewares
    return(
        <div>
            <LoginForm/>      
        </div>
    )
}
export default Page