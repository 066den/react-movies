import { lazy, Suspense } from "react";
import Loading from "../../lib/Loading";

//const Movies = lazy(() => import("../../pages/Movies"));
const Shop = lazy(() => import("../../pages/Shop"));

const Content = () => {
  return (
    <div className="content">
      <Suspense fallback={<Loading />}>
        {/*<Movies/>*/}
        <Shop />
      </Suspense>
    </div>
  );
};

export default Content;
