import { useUsers } from "@/hooks/useUsers";
import Avatar from "./Avatar";

  
export default async function FollowBar() {
    // const {data: suggUsers, error} = useUsers();

    // console.log("Error", error)
    // console.log(suggUsers)
    

    const users = [
        {
            "id": "edd902d1-cedc-463f-913e-45797363397c",
            "email": "test@email.com",
            "name": "test",
            "details": null,
            "profilePic": null,
            "password": "$2b$12$hvSDMcx6fFQsFeA.l/jbWOeqkxLLE/jFjxldLpgK6IRWjP8EP9ZAS",
            "creationDate": "2024-09-29T06:28:15.472Z"
          },
          {
            "id": "6cb56382-506b-4875-bfd5-d0b4b0573e7b",
            "email": "random@email.com",
            "name": "random",
            "details": null,
            "profilePic": null,
            "password": "$2b$12$6pQSuXQ12liD9NxunW4NRuEu5.BvjwOJFhwdddifNXTktqkiBuIne",
            "creationDate": "2024-09-28T07:32:22.410Z"
          }
    ]

    return (
        <div className="px-6 py-4 hidden lg:block">
            <div className="bg-neutral-100 rounded-xl p-4">
                <h2 className=" text-xl font-semibold">Who to Follow!</h2>
                <div className="flex flex-col gap-6 mt-4">
                    {users.map((item, index) => (
                        <Avatar key={index} name={item.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}