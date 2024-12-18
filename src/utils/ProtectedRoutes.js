import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRouter = () => {
    const isAuth = useSelector((state) => state.login.isAuth);
    const location = useLocation();

    return isAuth ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default ProtectedRouter;
