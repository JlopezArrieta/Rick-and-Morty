import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Error = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate("/home"), 3000)
    });

    return (
        <div>
            <img
                src="https://rare-gallery.com/thumbs/4553772-rick-sanchez-morty-smith-beth-smith-jerry-smith-summer-smith-rick-and-morty.jpg"
                alt="error"
            />
            <h2>Error 404</h2>
            <h3>Not Found</h3>
        </div>
    );
}

export default Error;