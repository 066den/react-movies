import { lazy, Suspense } from "react"
import Loading from "../../lib/Loading"

const Movies = lazy(() => import("../../pages/Movies"));

const Content = (props) => {
  return (
    <div className="content">
      <Suspense fallback={<Loading/>}>
        <Movies movies={props.movies}/>
      </Suspense>
    </div>
  )
}

export default Content