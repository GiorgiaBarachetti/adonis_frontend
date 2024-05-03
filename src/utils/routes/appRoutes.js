import {Route, Routes} from "react-router-dom";
import Profile from "../../pages/doctor/Doctor";
import MedicalVisitHistory from "../../pages/medical-visit-history/MedicalVisitHistory";
import Form from "../../components/Form";

const AppRoutes = () => {
    return (
        <Routes>
            {/*<Route element={<MainLayout/>}>*/}
            <Route path="/" element={<Profile/>}/>
            <Route path="/book-appointment" element={<Form/>}/>
            <Route path="/medical-visit-history" element={<MedicalVisitHistory/>}/>
            {/*<Route path="/login" element={<Login/>}/>*/}
            {/*</Route>*/}
        </Routes>
    )
}
export default AppRoutes