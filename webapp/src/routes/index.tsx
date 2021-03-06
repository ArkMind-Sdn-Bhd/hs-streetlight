import {
    BrowserRouter,
    Route,
    Routes, Navigate
} from "react-router-dom";
import {Login} from "../pages/Login";
import {DefaultView} from "../pages/Default";
import {MainLayout} from "../layout";
import {Dashboard} from "../pages/Dashboard";
import {ForgetPassword} from "../pages/ForgetPassword";
import {NotFound} from "../pages/NotFound";

export const Routing = () => {
    return (
        <>
            <BrowserRouter>
                {
                    <Routes>
                        <Route element={<Login/>} path="/login"/>
                        <Route element={<Login/>} path="/"/>
                        <Route element={<ForgetPassword/>} path="/forget-password"/>
                        <Route element={<DefaultView/>} path="/default"/>
                        <Route element={<NotFound/>} path="/404"/>
                        <Route path="/app" element={<MainLayout/>}>
                            <Route path="/app/dashboard" element={<Dashboard/>}/>
                        </Route>
                        <Route path="*" element={<Navigate to={"/404"}/>}/>
                    </Routes>
                }
            </BrowserRouter>
        </>
    )
}
