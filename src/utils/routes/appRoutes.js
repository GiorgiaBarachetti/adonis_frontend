import {Route, Routes} from "react-router-dom";
import Profile from "../../pages/doctor/Doctor";
import Form from "../../components/Form";
import MedicalVisitHistory from "../../pages/medical-visit-history/MedicalVisitHistory";
import SignInForm from "../../pages/sign_in/SignInForm";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Profile/>}/>
            <Route path="/book-appointment" element={<Form/>}/>
            <Route path="/medical-visit-history" element={<MedicalVisitHistory/>}/>
            {/*<Route path="/login" element={<Login/>}/>*/}
            <Route path="/SignIn" element={<SignInForm/>}/>
        </Routes>
    )
}
export default AppRoutes