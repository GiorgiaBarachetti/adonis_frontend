import {Route, Routes} from "react-router-dom";
import Profile from "../../pages/doctor/Profile";
import Form from "../../components/Form";
import MedicalVisitHistory from "../../pages/medical-visit-history/MedicalVisitHistory";
import SignUpForm from "../../pages/sign_in/SignUpForm";
import Login from "../../pages/login/Login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/book-appointment" element={<Form/>}/>
            <Route path="/medical-visit-history" element={<MedicalVisitHistory/>}/>
            <Route path="/SignIn" element={<SignUpForm/>}/>
        </Routes>
    )
}
export default AppRoutes
