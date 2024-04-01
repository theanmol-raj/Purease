import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Session } from "next-auth"

export default function Useravatar({name ,image} : { name? : string |null ,image? :string |null}) {
  return (
    <div>
      <Avatar>
      <AvatarImage src={image || "https://github.com/shadcn.png"} alt="@useravatar" />
      <AvatarFallback>{name?.split(" ").map(x=>x[0]).join("")}</AvatarFallback>
    </Avatar>
    </div>
  )
} ;