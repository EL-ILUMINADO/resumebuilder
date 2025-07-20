import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className="flex items-center">
        {user.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="User Profile Image"
            className="w-11 h-11 bg-gray-300 rounded-full mr-3"
          />
        ) : (
          <div className="w-11 h-11 bg-gray-300 rounded-full mr-3" />
        )}

        <div>
          <div className="text-[15px] font-bold leading-3">
            {user.name || ""}
          </div>
          <button
            onClick={handleLogout}
            className="text-purple-500 text-sm font-semibold cursor-pointer hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
