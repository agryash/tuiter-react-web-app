import { useSelector } from "react-redux";
import ProfileBanner from "./profile-banner";


const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    
    return (
        <div className="list-group rounded-4">
            <ProfileBanner profile={profile} />
        </div>
    );
};

export default ProfileComponent;