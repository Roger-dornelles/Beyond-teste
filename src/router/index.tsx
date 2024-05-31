import { Route, Routes } from "react-router-dom";
import AddBatch from "../pages/AddBatch";
import UpdateBatch from "../pages/UpdateBatch";
import Home from "../pages/Home";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adicionar" element={<AddBatch />} />
      <Route path="/editar/:id" element={<UpdateBatch />} />
    </Routes>
  );
};

export default index;
