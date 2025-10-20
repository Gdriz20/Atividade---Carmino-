import { Route, Routes} from "react-router-dom";
import Pagina from "./pagina";
import Login from "./Login";


export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Pagina/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )    
}
