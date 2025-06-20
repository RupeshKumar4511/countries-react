import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();
  return (
    <div>
      Something went Wrong {error.status}
    </div>
  )
}

export default ErrorPage
