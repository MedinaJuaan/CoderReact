import NavBar from "../Components/NavBar";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <div>
      <NavBar />
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.id}
      />
    </div>
  );
}

export default Root;
