// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //   .then((res) => res.json())
  //   .then((res) => setData(res))
  // }, [])

  // console.log(data);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github