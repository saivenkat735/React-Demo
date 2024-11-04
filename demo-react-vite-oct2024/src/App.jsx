
import FruitObjectArray from "./components/FruitObjectArray";
import Person from "./components/Person";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ActorList from "./components/actor/ActorList";
import ProductList from "./components/product/ProductList";
import ButtonClick from "./components/ButtonClick";
import Counter from "./components/Counter";
import ToggleMovie from "./components/ToggleMovie";
import InputDemo from "./components/inputDemo";
import EcomList from "./components/ecommerce/EcomList";
import EcomAdd from "./components/ecommerce/EcomAdd";
import EcomEdit from "./components/ecommerce/EcomEdit";
import EcomAddValidation from "./components/ecommerce/EcomAddValidation";
import EcomAddValidationRef from "./components/ecommerce/EcomAddValidationRef";
import TodoList from "./todo-app/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ErrorComp from "./components/ErrorComp";
import HeaderApp from "./components/HeaderApp";
import HeaderTraining from "./components/training/HeaderTraining";
import VenueList from "./components/training/venue/VenueList";
import CohortList from "./components/training/cohort/CohortList";
import CohortAdd from "./components/training/cohort/CohortAdd";
import VenueAdd from "./components/training/venue/VenueAdd";
import CohortView from "./components/training/cohort/CohortView";
import JsonPlaceholder from "./components/JsonPlaceholder";
import HeaderTrainingHttp from "./components/training-Http/HeaderTrainingHttp";
import VenueListHttp from "./components/training-Http/venue-http/VenueListHttp";
import CohortListHttp from "./components/training-Http/cohort-http/CohortListHttp";
import CohortAddHttp from "./components/training-Http/cohort-http/CohortAddHttp";
import VenueAddHttp from "./components/training-Http/venue-http/VenueAddHttp";
import CohortViewHttp from "./components/training-Http/cohort-http/CohortViewHttp";

function App() {
  return (
    <>
      {/* <Person/> */}
      {/* <FruitObjectArray/> */}
      {/* <ActorList/> */}
      {/* <ProductList/> */}
      {/* <ButtonClick/> */}
      {/* <Counter/> */}
      {/* <ToggleMovie/> */}
      {/* <InputDemo/> */}
      {/* <EcomEdit/>
      <EcomAdd/> */}
      {/* <EcomList/> */}
      {/* <EcomAddValidation/> */}
      {/* <EcomAddValidationRef/> */}
      {/* <TodoList/> */}
      {/* <HeaderApp/> */}
      <BrowserRouter>
        <HeaderApp />
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="/todo" element={<TodoList></TodoList>}></Route>
          <Route path="/fruit-list" element={<FruitObjectArray />}></Route>
          <Route path="/ecom-list" element={<EcomList />}></Route>
          <Route path="/actor" element={<ActorList />}></Route>
          <Route path="/fake-api" element={<JsonPlaceholder />}></Route>
          <Route path="/training" element={<HeaderTraining />}>
            <Route path="venue-list" element={<VenueList />}></Route>
            <Route path="cohort-list" element={<CohortList />}></Route>
            <Route path="cohort-view/:cid" element={<CohortView />}></Route>
            <Route path="cohort-add" element={<CohortAdd />}></Route>
            <Route path="venue-add" element={<VenueAdd />}></Route>
          </Route>
          <Route path="/training-http" element={<HeaderTrainingHttp />}>
            <Route path="venue-list-http" element={<VenueListHttp />}></Route>
            <Route path="cohort-list-http" element={<CohortListHttp />}></Route>
            <Route
              path="cohort-view-http/:cid"
              element={<CohortViewHttp />}
            ></Route>
            <Route path="cohort-add-http" element={<CohortAddHttp />}></Route>
            <Route path="venue-add-http" element={<VenueAddHttp />}></Route>
          </Route>
          <Route path="/*" element={<ErrorComp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
