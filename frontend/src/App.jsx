import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { restoreSession } from "./redux/slices/authSlice";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  return <AppRoutes />;
}
