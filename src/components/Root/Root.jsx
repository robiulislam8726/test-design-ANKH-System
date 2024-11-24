import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-5xl max-h-96">
            <Outlet></Outlet>

          
        </div>
    );
};
export default Root;