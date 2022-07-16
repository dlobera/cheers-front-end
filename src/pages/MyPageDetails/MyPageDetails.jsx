import { useState } from 'react' 
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const MyPageDetails = ({user}) => {
  const location = useLocation()
  console.log(location)
  const [profile, setProfile] = useState(location.state.profile)
  console.log(user)
  return ( 
    <>
      <img src={profile.photo}
          alt={profile.name}
          className="profile-photo"
          style={{width:"300px"}}
        />
      <h1>{profile.name}</h1> 
      <Link
        className='button'
        to='/edit-profile'
        state={{profile}}
      >
        Edit
      </Link>
      {profile.favoriteSong}
      {profile.favoriteDrink}
      <h2>{profile.name}'s Boozy Tunes</h2>
      <div>
        song/drink card goes here
      </div>
      
    </>
  );
}

export default MyPageDetails;