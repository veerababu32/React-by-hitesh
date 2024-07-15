import { useParams } from "react-router-dom"

function User() {
  const { userId } = useParams()
  return (
    <div className="bg-cyan-400 text-2xl text-center py-5">User{ userId ? `: ${userId}` : "" }</div>
  )
}

export default User