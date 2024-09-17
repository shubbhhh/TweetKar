import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";


export default function LoginCard() {
    return (
        <Card className="w-[350px]">
      <CardHeader className="items-center">
        <CardTitle>Welcome back!!</CardTitle>
        <CardDescription>
            Don't have an account?
            <Link href={"/sinup"} className="px-1 hover:underline">sign-up</Link>
        </CardDescription>
      </CardHeader>
      <div className="border m-2"></div>
      <CardContent>
        <form className="pt-4">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name">Username</label>
              <input id="name" placeholder="username or email" className="outline-none" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="framework">Password</label>
              <input type="password" placeholder="password" className="outline-none" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex">
        <Button className="w-full">Login</Button>
      </CardFooter>
    </Card>
    )
}