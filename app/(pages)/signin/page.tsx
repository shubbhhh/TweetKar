import LoginCard from "@/components/LoginCard";


export default function SignIn() {

    return (
        <div className="flex h-[100vh] items-center">
            <div className="flex items-center justify-center w-full md:w-1/2">
                <LoginCard />
            </div>
            <div className="hidden md:block w-1/2">
                Quote
            </div>
        </div>
    )
}