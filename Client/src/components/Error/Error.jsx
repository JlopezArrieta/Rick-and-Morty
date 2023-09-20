import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Error() {
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(() => navigate("/"),3000)
  });

  return (
    <div>
      <img
        src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1684371895/Error_404_m6fj3t.gif"
        alt="error"
      />
    </div>
  );
}

export default Error;