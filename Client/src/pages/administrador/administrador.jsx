import { Layaout } from "../../components/templates/Layaout";
import { Route, Routes } from "react-router";
import { FirtsTitle, Titles } from "../../components/titles/Title";
import { DataTable } from "./DataTable"
import { Solicitud } from "./Solicitud";
import { Modalsol } from "./modalSol";
import { ModalUsu } from "./modalUsu";
import { IndexAdmin } from "./indexAdmin";
export function Administrador({ user="Silvana" }) {
  return (
    <>
      {/* <Menudiag></Menudiag> */}
      <div className="flex justify-between">
        <div>
          <Menudiag></Menudiag>
        </div>
        <div>
          {/* <Solicitud></Solicitud> */}
          {/* <DataTable></DataTable> */}
          <Routes>
            <Route path="/" element={<IndexAdmin/>}></Route>
            <Route path='/solicitudes' element={<Solicitud/>}></Route>
          </Routes>
        </div>
      </div>
      {/* <ModalUsu></ModalUsu> */}
      {/* <Modalsol></Modalsol> */}
      {/* <DataTable/> */}
      {/* <div className="">
        <FirtsTitle title="Administrador" descripcion={`Bienvenid@ ${user}`} />
      </div> */}
    </>
  );
}
