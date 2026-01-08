import "./App.css";
import { Navbar } from "./Componet/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <Navbar />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
