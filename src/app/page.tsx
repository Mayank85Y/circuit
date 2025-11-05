
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { requireAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server"
import { LogOutButton } from "./logout"


const Page = async() => {
  await requireAuth();
  const data = await caller.getUsers();
  return (
    <div>
      Condom
      <div>
      {JSON.stringify(data)}
      </div>
      <LogOutButton/>
    </div>
  )
}

export default Page
