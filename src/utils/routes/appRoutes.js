import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "../../pages/doctor/Doctor";
import MainLayout from "../../pages/MainLayout";
import Form from "../../components/Form";
import MedicalVisitHistory from "../../pages/medical-visit-history/MedicalVisitHistory";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/book-appointment" element={<Form/>}/>
                    <Route path="/medical-visit-history" element={<MedicalVisitHistory/>}/>
                    {/*<Route path="/login" element={<Login/>}/>*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes