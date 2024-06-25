import {createContext, useContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null);
        const [token, setToken] = useState(sessionStorage.getItem("token") || "")
        const navigate = useNavigate();

        const login = async (data) => {
            try {
                const res = await axios.post('http://localhost:3333/login',
                    data)
                sessionStorage.setItem('user', JSON.stringify(res.data.patient))
                sessionStorage.setItem('token', res.data.token.token)
                setUser(res.data.patient)
                setToken(res.data.token.token)
                navigate("/profile"/*, {state: {item: normalizeUserForSessionStorage(res.data)}}*/);

            } catch (e) {
                console.log(e)
            }

        }
        const register = async (data) => {
            try {
                // await validator.validate({email: values.email, password: values.password})
                await axios.post("http://localhost:3333/registration", data)
                    .then((res) => {
                        navigate("/")
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } catch (e) {
                console.log(e)
            }

        }
        return <AuthContext.Provider value={{token, user, login, register}}>
            {children}
        </AuthContext.Provider>
    }
;

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
