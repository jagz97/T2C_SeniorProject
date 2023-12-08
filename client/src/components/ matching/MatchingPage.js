import { React, useEffect,useState} from 'react'
import { useWindowWidth } from '../../breakpoints';
import "./matching.css";
import { api } from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';







const MatchingPage = () => {
    const screenWidth = useWindowWidth();
    const [userData, setUserData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const { user } = useAuth()
    // fetch pfp and bio
    useEffect(() => {

        
       
        const getMatches = async () => {
            const headerOptions = {
                headers: {
                    Authorization: `${user.accesstoken}`,
                }
            }
            try {
                const response = await api.get("/getUsersWithSameInterest", headerOptions)
                console.log(response.data);
                setUserData(response.data);
                setCurrentIndex(0);

                
        
            } catch (error) {
                const errorMessage = error.response?.data?.message
                
                if(errorMessage) {
                    console.log(errorMessage)
                }
                else {
                    console.log(error.message)
                }
            }finally {
                setIsLoading(false);
            }
        }

        getMatches()
    }, [user.accesstoken, userData.length])

    if (isLoading) {
      
        return <div>Loading...</div>;
    }


    const handleNextButtonClick = () => {
        
        
    
        setUserData((prevData) => {
            const newIndex = (currentIndex + 1) % prevData.length;
            setCurrentIndex(newIndex);
            return prevData;
        });
    
       
    };


    const handleMatchUser = async () => {
        // Check if userData array is not empty
        if (userData.length > 0) {
            const userId = userData[currentIndex].userId;

            const headerOptions = {
                headers: {
                    Authorization: `${user.accesstoken}`,
                }
            }

            // Assuming you have an endpoint to send the userId to the server
            try {
                const response = await api.post("/createMatch", { user2Id: userId },headerOptions);
                console.log('User matched successfully:', response.data);
            } catch (error) {
                console.log('Error matching user:', error.message);
            }
        }
    };



    const handleGetUserProfile = () => {
        // Check if userData array is not empty
        if (userData.length > 0) {
          const currentUserId = userData[currentIndex]?.userId;
          
          // Navigate to the ProfilePage with the user's ID
          navigate(`/profile/${currentUserId}`);
        }
      };


      const navigateToChat = () => {
       
        if (userData.length > 0) {
            const currentUserId = userData[currentIndex]?.userId;
            const currentUsername = userData[currentIndex]?.username;
            const data = {id: currentUserId, username: currentUsername};

            navigate('/chat', {state : data});
        }
    };



    

    return (
      <>

      <div
            className="matching"
            style={{
                backgroundColor: (screenWidth >= 1280 && screenWidth < 1920) || (screenWidth >= 834 && screenWidth < 1280) || screenWidth < 834
                    ? "#ffffff"
                    : screenWidth >= 1920
                        ? "#f2f2ff"
                        : undefined,
            }}
        >
            <div
                className="iphone-pro-max"
                style={{
                    backgroundColor: (screenWidth >= 1280 && screenWidth < 1920) ||
                        (screenWidth >= 834 && screenWidth < 1280) ||
                        screenWidth < 834
                        ? "#ffffff"
                        : screenWidth >= 1920
                            ? "#f2f2ff"
                            : undefined,
                    height: screenWidth < 834
                        ? "932px"
                        : screenWidth >= 834 && screenWidth < 1280
                            ? "1194px"
                            : screenWidth >= 1280 && screenWidth < 1920
                                ? "832px"
                                : screenWidth >= 1920
                                    ? "1104px"
                                    : undefined,
                    width: screenWidth < 834
                        ? "430px"
                        : screenWidth >= 834 && screenWidth < 1280
                            ? "834px"
                            : screenWidth >= 1280 && screenWidth < 1920
                                ? "1800px"
                                : screenWidth >= 1920
                                    ? "1920px"
                                    : undefined,
                }}
            >
                <div
                    className="overlap"
                    style={{
                        backgroundImage: screenWidth < 834
                            ? "url(/img/group-1000001900.png)"
                            : screenWidth >= 834 && screenWidth < 1280
                                ? "url(/img/group-1000001900-1.png)"
                                : screenWidth >= 1280 && screenWidth < 1920
                                    ? "url(/img/group-1000001901.png)"
                                    : screenWidth >= 1920
                                        ? "url(/img/group-1000001899.png)"
                                        : undefined,
                        height: screenWidth < 834
                            ? "932px"
                            : screenWidth >= 834 && screenWidth < 1280
                                ? "1194px"
                                : screenWidth >= 1280 && screenWidth < 1920
                                    ? "832px"
                                    : screenWidth >= 1920
                                        ? "1104px"
                                        : undefined,
                        left: screenWidth >= 1920 ? "7px" : undefined,
                        position: (screenWidth >= 1280 && screenWidth < 1920) ||
                            screenWidth >= 1920 ||
                            (screenWidth >= 834 && screenWidth < 1280)
                            ? "relative"
                            : undefined,
                        width: screenWidth >= 1920 ? "1913px" : undefined,
                    }}
                >
                    {screenWidth < 834 && (
                        <div className="group">
                            <div className="overlap-group">
                                <div className="image-group">
                                    <div className="rectangle" />
                                </div>
                                <div className="description" />
                                <div className="bar-name" />
                                <div className="like-or-not">
                                    <div className="ellipse" />
                                    <div className="div" />
                                    <button className='btn' onClick={handleNextButtonClick} style={{ border: 'none', padding: 0, background: 'none' }}>
                                        <img className="icon-cancel" alt="Icon cancel" src="/img/icon-cancel-1.png" />
                                    </button>
                                    <button className='btn' onClick={handleMatchUser} style={{ border: 'none', padding: 0, background: 'none' }}>
                                        <img className="icon-heart" alt="Icon heart" src="/img/icon-heart-1.png" />
                                    </button>
                                </div>














                                <div className="category">
                                    <div className="frame-1">
                                        <button onClick={handleGetUserProfile} style={{ border: 'none', padding: 0, background: 'none' }}>
                                            <div className="text-wrapper">View Profile</div>
                                        </button>
                                    </div>
                                </div>

                                <div className="text-wrapper-2">{userData[currentIndex]?.username}</div>
                                <p className="female-hello-i-am">
                                    <span className="span-2">
                                        Interest:

                                        {userData[currentIndex]?.userPreferences.gender}
                                        <br />
                                    </span>
                                    <span className="text-wrapper-8">
                                        {userData[currentIndex]?.userPreferences.bio}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )}

                    {((screenWidth >= 1280 && screenWidth < 1920) ||
                        screenWidth >= 1920 ||
                        (screenWidth >= 834 && screenWidth < 1280)) && (
                            <>
                                <div
                                    className="rectangle-wrapper"
                                    style={{
                                        backgroundImage: screenWidth >= 834 && screenWidth < 1280
                                            ? "url(/img/rectangle-14-2.svg)"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "url(/img/rectangle-17.png)"
                                                : screenWidth >= 1920
                                                    ? "url(/img/rectangle-14.svg)"
                                                    : undefined,
                                        left: screenWidth >= 834 && screenWidth < 1280
                                            ? "189px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "350px"
                                                : screenWidth >= 1920
                                                    ? "726px"
                                                    : undefined,
                                        top: screenWidth >= 834 && screenWidth < 1280
                                            ? "246px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "72px"
                                                : screenWidth >= 1920
                                                    ? "212px"
                                                    : undefined,
                                    }}
                                >
                                    <div className="rectangle-2" />
                                </div>
                                <div
                                    className="description-2"
                                    style={{
                                        left: screenWidth >= 834 && screenWidth < 1280
                                            ? "191px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "352px"
                                                : screenWidth >= 1920
                                                    ? "728px"
                                                    : undefined,
                                        top: screenWidth >= 834 && screenWidth < 1280
                                            ? "500px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "326px"
                                                : screenWidth >= 1920
                                                    ? "466px"
                                                    : undefined,
                                    }} />
                                <div
                                    className="bar-name-2"
                                    style={{
                                        left: screenWidth >= 834 && screenWidth < 1280
                                            ? "240px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "401px"
                                                : screenWidth >= 1920
                                                    ? "777px"
                                                    : undefined,
                                        top: screenWidth >= 834 && screenWidth < 1280
                                            ? "447px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "273px"
                                                : screenWidth >= 1920
                                                    ? "413px"
                                                    : undefined,
                                    }} />
                                <div
                                    className="like-or-not-2"
                                    style={{
                                        left: screenWidth >= 834 && screenWidth < 1280
                                            ? "378px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "539px"
                                                : screenWidth >= 1920
                                                    ? "915px"
                                                    : undefined,
                                        top: screenWidth >= 834 && screenWidth < 1280
                                            ? "685px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "511px"
                                                : screenWidth >= 1920
                                                    ? "651px"
                                                    : undefined,
                                    }}
                                >
                                    <div className="ellipse-2" />
                                    <div className="ellipse-3" />
                                    <button className='btn' onClick={handleMatchUser} style={{ border: 'none', padding: 0, background: 'none' }}>
                                        <img className="icon-heart-2" alt="Icon heart" src="/img/icon-heart.png" />
                                    </button>

                                    <button className='btn' onClick={handleNextButtonClick} style={{ border: 'none', padding: 0, background: 'none' }}>
                                        <img className="img" alt="Icon cancel" src="/img/icon-cancel.png" />

                                    </button>
                                </div>
                                <div
                                    className="frame-wrapper"
                                    style={{
                                        left: screenWidth >= 834 && screenWidth < 1280
                                            ? "345px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "506px"
                                                : screenWidth >= 1920
                                                    ? "882px"
                                                    : undefined,
                                        top: screenWidth >= 834 && screenWidth < 1280
                                            ? "778px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "604px"
                                                : screenWidth >= 1920
                                                    ? "744px"
                                                    : undefined,
                                    }}
                                >
                                    <div className="frame">
                                        <button onClick={handleGetUserProfile} style={{ border: 'none', padding: 0, background: 'none' }}>
                                            <div className="text-wrapper-4">Profile</div>
                                        </button>
                                    </div>
                                    <div className="frame">
                                        <button onClick={navigateToChat} style={{ border: 'none', padding: 0, background: 'none' }}>
                                            <div className="text-wrapper-4">Chat</div>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="text-wrapper-5"
                                    style={{
                                        left: screenWidth >= 834 && screenWidth < 1280
                                            ? "301px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "462px"
                                                : screenWidth >= 1920
                                                    ? "838px"
                                                    : undefined,
                                        top: screenWidth >= 834 && screenWidth < 1280
                                            ? "485px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "311px"
                                                : screenWidth >= 1920
                                                    ? "451px"
                                                    : undefined,
                                    }}
                                >
                                    {userData[currentIndex]?.username}
                                </div>
                                <p
                                    className="p"
                                    style={{
                                        left: screenWidth >= 834 && screenWidth < 1280
                                            ? "301px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "462px"
                                                : screenWidth >= 1920
                                                    ? "838px"
                                                    : undefined,
                                        top: screenWidth >= 834 && screenWidth < 1280
                                            ? "516px"
                                            : screenWidth >= 1280 && screenWidth < 1920
                                                ? "342px"
                                                : screenWidth >= 1920
                                                    ? "482px"
                                                    : undefined,
                                    }}
                                >
                                    <div className='spandiv'>
                                        <span className="span">
                                            Interest: &nbsp;
                                            {userData[currentIndex]?.userPreferences.gender}
                                            <br />
                                        </span>

                                        <span className="text-wrapper-3">
                                            {userData[currentIndex]?.userPreferences.bio}
                                        </span>
                                    </div>
                                </p>

                            </>
                        )}
                </div>
            </div>
        </div>
        
        </> 
    )
}

export default MatchingPage
