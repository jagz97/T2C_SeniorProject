import React, {useState, useEffect, useCallback} from 'react'
import { useWindowWidth } from '../../breakpoints'
import './post.css'
import { api } from '../../api/axios'
import useAuth from '../../hooks/useAuth'
import { useParams } from "react-router-dom"


const PostView = () => {
    const screenWidth = useWindowWidth();
    const [ post, setPost ] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [postPicture, setPostPicture] = useState("")
    const params = useParams();
    const { user } = useAuth()
    const [commentText, setCommentText] = useState('')
    const [isCommentInputVisible, setCommentInputVisible] = useState(false)
    const [isLiked, setIsLiked] = useState(false);


    const handleAddCommentClick = () => {
        setCommentInputVisible(true);
    };


    const likePost = useCallback(async () => {
        try {
            const headerOptions = {
                headers: {
                    Authorization: user?.accesstoken || '', // Check if user exists before accessing accesstoken
                }
            };
    
            console.log(`${user?.accesstoken}`); // Optional chaining to avoid errors if user is undefined
    
            const response = await api.post(`/posts/${params.id}/like`, {}, headerOptions);
    
            console.log('Post liked successfully:', response.data);
            setIsLiked(true);
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
    
            console.error('Error liking post:', errorMessage);
            // Handle the error as needed, you may want to show a user-friendly message or perform other actions.
        }
    }, [params.id, user?.accesstoken]);
    
    const handleLikeClick = async () => {
        await likePost();
    };
    

    


    const sendCommentToServer = (async (comment) => {
        const headerOptions = {
            headers: {
                Authorization: `${user.accesstoken}`,
            }
        }
        console.log(`${user.accesstoken}`)
        try {
            const response = await api.post(`/posts/${params.id}/comment`,{text: comment}, headerOptions)
            console.log('Comment sent successfully:', response.data);
    
        } catch (error) {
            const errorMessage = error.response?.data?.message
            if(errorMessage) {
                console.log(errorMessage)
            }
            else {
                console.log(error.message)
            }
        }
    });

  const handlePostComment = () => {
    sendCommentToServer(commentText);
    setCommentText('');
    setCommentInputVisible(false);
  };


    useEffect(() => {
        const getPost = async () => {
            
            try {
                const response = await api.get(`/posts/${params.id}/getPostDetails`);
                console.log(response.data)
                
                setPost(response.data)
                const postPicture = await response.data.postPicture
                console.log(postPicture.type)
                setPostPicture(`data:${postPicture.type};base64,${postPicture.data}`) 
                
            } catch (error) {
                const errorMessage = error.response?.data?.message
                // if we get a an error response from server display it
                // otherwise we display error directly from axios library
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

        getPost()
    },[user.accesstoken, isCommentInputVisible, isLiked, params.id])

    if (isLoading) {
      
        return <div>Loading...</div>;
    }




    return (
      <div className="macbook-post">
        <div
          className="iphone-pro-max"
          style={{
            height:
              screenWidth < 834
                ? "1224px"
                : screenWidth >= 834 && screenWidth < 1280
                ? "194px"
                : screenWidth >= 1280
                ? "1451px"
                : undefined,
            width:
              screenWidth < 834
                ? "430px"
                : screenWidth >= 834 && screenWidth < 1280
                ? "834px"
                : screenWidth >= 1280
                ? "1280px"
                : undefined,
          }}
        >
          <img
            className="tempimagejbglxr"
            style={{
              height:
                screenWidth >= 834 && screenWidth < 1280
                  ? "462px"
                  : screenWidth >= 1280
                  ? "560px"
                  : screenWidth < 834
                  ? "207px"
                  : undefined,
              width:
                screenWidth >= 834 && screenWidth < 1280
                  ? "1400px"
                  : screenWidth >= 1480
                  ? "1800px"
                  : screenWidth < 834
                  ? "900px"
                  : undefined,
            }}
            alt="Tempimagejbglxr"
            src="/img/tempimagejbglxr-1.png"
          />
          {((screenWidth >= 834 && screenWidth < 1280) || screenWidth < 834) && (
            <div
              className="instagram-post-full"
              style={{
                height: screenWidth < 834 ? "1017px" : screenWidth >= 834 && screenWidth < 1280 ? "1102px" : undefined,
                left: screenWidth < 834 ? "0" : screenWidth >= 834 && screenWidth < 1280 ? "31px" : undefined,
                top: screenWidth < 834 ? "207px" : screenWidth >= 834 && screenWidth < 1280 ? "607px" : undefined,
                width: screenWidth < 834 ? "430px" : screenWidth >= 834 && screenWidth < 1280 ? "772px" : undefined,
              }}
            >
              {screenWidth < 834 && (
                <div className="overlap-group">
                  <img className="instagram-post-web" alt="Instagram post web" src={postPicture} />
                  <div className="container">

  
                    <div className="actions-wrapper">
                    <div className="actions-2">
                        <img
                            className={`like ${isLiked ? 'liked' : ''}`}
                            alt="Like"
                            src="/img/like.svg"
                            onClick={handleLikeClick}
                        />
                        <div className="like" />
                        <div className="space" />
                    </div>
                        </div>
                        <div className="date">
                        <div className="text-wrapper-4">{post.likeCount} likes</div>
                        </div>
                        <div className="frame-2">
                            {isCommentInputVisible ? (
                                <input
                                type="text"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Type your comment..."
                                />
                            ) : (
                                <p className="add-a-comment" onClick={handleAddCommentClick}>
                                <span className="text-wrapper-5">Add a comment…</span>
                                </p>
                            )}

                            {isCommentInputVisible && (
                                <div className="div-wrapper">
                                <div className="text-wrapper-6" onClick={handlePostComment}>
                                    Post
                                </div>
                                </div>
                            )}
                        </div>
                        <table className="comments-table">
                                <tbody>

                                    {post.comments.map((comment, index) => (
                                    <tr key={index}>
                                    <td>
                                        <div className="div">
                                        <div className="image">
                                            <img className="avatar" alt="Avatar" src="/img/avatar.png" />
                                        </div>
                                        <div className="container-2">
                                            <div className="text">
                                            <div className="text-wrapper-2">
                                                <span className="span">{comment.username} </span>
                                                <span className="text-wrapper-3">{comment.text}</span>
                                                </div>
                                            </div>
                                            <div className="actions" />
                                        </div>
                                        </div>
                                    </td>
                                    </tr>
                                    ))}
                                </tbody>
                        </table>
                            
                    </div>
                </div>
              )}
  
              
              {screenWidth < 834 && <img className="img" alt="Prev" src="/img/prev-1.png" />}
  
              {screenWidth >= 834 && screenWidth < 1280 && (

<div className="overlap-group-3">
<div className="instagram-post-web-wrapper-3">
  <img className="instagram-post-web-3" alt="Instagram post web" src={postPicture} />
</div>

                


                <div className="container-3">
                

                    <div className="actions-3">
                    <div className="actions-2">
                    <img
                            className={`like ${isLiked ? 'liked' : ''}`}
                            alt="Like"
                            src="/img/like.svg"
                            onClick={handleLikeClick}
                        />
                      <div className="like" />
                      <div className="space" />
                    </div>
                  </div>
                  <div className="date">
                    <div className="text-wrapper-4">{post.likeCount} likes</div>
                  </div>
                  
                  
                  
                  
                  
                  
                  
                  
                  <div className="frame-2">
                  {isCommentInputVisible ? (
                                <input className="add-a-comment"
                                type="text"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Type your comment..."
                                />
                            ) : (
                                <p className="add-a-comment" onClick={handleAddCommentClick}>
                                <span className="text-wrapper-5">Add a comment…</span>
                                </p>
                            )}

                            {isCommentInputVisible && (
                                <div className="div-wrapper">
                                <button className="text-wrapper-6" onClick={handlePostComment}>
                                    Post
                                </button>
                                </div>
                            )}
                  </div>



                    <div className='table-div'>
                        <table className="comments-table">
                                                        <tbody>

                                    {post.comments.map((comment, index) => (
                                    <tr key={index}>
                                    <td>
                                        <div className="div">
                                        <div className="image">
                                            <img className="avatar" alt="Avatar" src="/img/avatar.png" />
                                        </div>
                                        <div className="container-2">
                                            <div className="text">
                                            <div className="text-wrapper-2">
                                                <span className="span">{comment.username} </span>
                                                <span className="text-wrapper-3">{comment.text}</span>
                                                </div>
                                            </div>
                                            <div className="actions" />
                                        </div>
                                        </div>
                                    </td>
                                    </tr>
                                    ))}
                                </tbody>
                        </table> 
                        
                    </div>



                  
                </div>
                </div>
              )}
            </div>
          )}

          
  
          {screenWidth >= 1280 && (
            <div className="overlap-group-2">
              <div className="instagram-post-web-wrapper">
                <img className="instagram-post-web-2" alt="Instagram post web" src={postPicture} />
              </div>

              <div className="container-5">

  

                    <div className="actions-3">
                        <img
                            className={`like ${isLiked ? 'liked' : ''}`}
                            alt="Like"
                            src="/img/like.svg"
                            onClick={handleLikeClick}
                        />
                    
                    </div>
  
    <div className="date-2">
    <div className="text-wrapper-5">{post.likeCount} likes</div>
    </div>
    <div className="frame-2">
        {isCommentInputVisible ? (
            <input
            type="text" className="add-a-comment" 
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Type your comment..."
            />
        ) : (
            <p className="add-a-comment" onClick={handleAddCommentClick}>
            <span className="text-wrapper-5">Add a comment…</span>
            </p>
        )}

        {isCommentInputVisible && (
            <div className="div-wrapper">
            <div className="text-wrapper-6" onClick={handlePostComment}>
                Post
            </div>
            </div>
        )}
    </div>
    <table className="comments-table">
            <tbody>

                {post.comments.map((comment, index) => (
                <tr key={index}>
                <td>
                    <div className="div">
                    <div className="image">
                        <img className="avatar" alt="Avatar" src="/img/avatar.png" />
                    </div>
                    <div className="container-2">
                        <div className="text">
                        <div className="text-wrapper-2">
                            <span className="span">{comment.username} </span>
                            <span className="text-wrapper-3">{comment.text}</span>
                            </div>
                        </div>
                        <div className="actions" />
                    </div>
                    </div>
                </td>
                </tr>
                ))}
            </tbody>
    </table>
        
</div>     
            </div>
            
          )}
         
        </div>
      </div>
    );
}

export default PostView
