import {Route, Routes} from "react-router-dom";
import Profile from "../../pages/profile/Profile";
import Form from "../../components/Form";
import MedicalVisitHistory from "../../pages/medical-visit-history/MedicalVisitHistory";
import SignUpForm from "../../pages/sign_in/SignUpForm";
import Login from "../../pages/login/Login";
import PrivateRoute from "../../pages/auth/PrivateRoute";
import EditUser from "../../components/EditUser";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/SignIn" element={<SignUpForm/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/book-appointment" element={<Form/>}/>
                <Route path="/medical-visit-history" element={<MedicalVisitHistory/>}/>
                <Route path="/edit-user" element={<EditUser/>}/>
            </Route>
        </Routes>
    )
}
export default AppRoutes
