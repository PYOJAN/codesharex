import { useRouteError } from "react-router-dom"

const Error404 = () => {

  const error = useRouteError()

  console.error(error)

  return (
    <div>Error404</div>
  )
}

export default Error404