import prisma from "@/lib/db"

const Page = async () => {
  const db = await prisma.user.findMany();
  return (
    <div>
      {JSON.stringify(db)}
    </div>
  )
}

export default Page
