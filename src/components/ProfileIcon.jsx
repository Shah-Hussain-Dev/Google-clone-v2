import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/shah.png";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className=" animate__animated animate__fadeInDown h-10 w-10 flex items-center  hidden justify-center rounded-full hover:scale-125 cursor-pointer hover:bg-black/[0.05] hover:shadow-md">
        <TbGridDots size={20} color="#5f6368" />
      </span>
      <span className=" animate__animated animate__fadeInDown h-10 w-10 relative flex justify-center items-center">
        {/* <img src={ProfileRing} alt="profile" className="absolute" /> */}
        <span className="h-10 w-10 rounded-full overflow-hidden  hover:scale-125 drop-shadow-lg transition-transform">
          <img className="h-full w-full object-cover" src={Profile} />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
