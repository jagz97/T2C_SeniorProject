import React from 'react'
import { Session } from '@talkjs/react'
import { Inbox } from '@talkjs/react'
import Talk from 'talkjs'
import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useWindowWidth } from '../../breakpoints'
import './chat.css'




const Chat = (props) => {

  const screenWidth = useWindowWidth()

  const { user } = useAuth()
  const location = useLocation()

  const data = location.state;
  console.log(data.id)
  console.log(user)
  const user1id = user.username
  
  const id = data.id;
  const name = data.username
  

  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: user1id,
        name: user1id,
        role: 'default',
      }),
    [user1id]
  );


  const syncConversation = useCallback((session) => {
    // JavaScript SDK code here
    const conversation = session.getOrCreateConversation(name);
  
    const other = new Talk.User({
      id:id ,
      name: name,
      role: 'default',
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);
  
    return conversation;
  }, [id, name]);
  




  return (
    


    <>
    <div className="macbook-pro">
      <div
        className="iphone-pro-max"
        style={{
          height:
            screenWidth < 834
              ? "932px"
              : screenWidth >= 834 && screenWidth < 1512
              ? "300px"
              : screenWidth >= 1512
              ? "300px"
              : undefined,
          width:
            screenWidth < 834
              ? "430px"
              : screenWidth >= 834 && screenWidth < 1512
              ? "px"
              : screenWidth >= 1512
              ? "1512px"
              : undefined,
        }}
      >
        <div
          className="group"
          style={{
            backgroundImage:
              screenWidth < 834
                ? "url(/img/pexels-james-wheeler-1486974-1-1.png)"
                : screenWidth >= 834 && screenWidth < 1512
                ? "url(/img/pexels-james-wheeler-1486974-1-2.png)"
                : screenWidth >= 1512
                ? "url(/img/pexels-james-wheeler-1486974-1.png)"
                : undefined,
            height:
              screenWidth < 834
                ? "219px"
                : screenWidth >= 834 && screenWidth < 1512
                ? "300px"
                : screenWidth >= 1512
                ? "311px"
                : undefined,
          }}
        >
          <div
            className="title"
            style={{
              height:
                screenWidth < 834
                  ? "80px"
                  : screenWidth >= 834 && screenWidth < 1512
                  ? "91px"
                  : screenWidth >= 1512
                  ? "104px"
                  : undefined,
              left:
                screenWidth < 834
                  ? "41px"
                  : screenWidth >= 834 && screenWidth < 1512
                  ? "34px"
                  : screenWidth >= 1512
                  ? "201px"
                  : undefined,
              top:
                screenWidth < 834
                  ? "110px"
                  : screenWidth >= 834 && screenWidth < 1512
                  ? "159px"
                  : screenWidth >= 1512
                  ? "207px"
                  : undefined,
              width:
                screenWidth < 834
                  ? "236px"
                  : screenWidth >= 1512 || (screenWidth >= 834 && screenWidth < 1512)
                  ? "665px"
                  : undefined,
            }}
          >
            <div
              className="text-wrapper-40"
              style={{
                whiteSpace: screenWidth < 834 ? "nowrap" : undefined,
                width:
                  screenWidth < 834
                    ? "234px"
                    : screenWidth >= 1512 || (screenWidth >= 834 && screenWidth < 1512)
                    ? "663px"
                    : undefined,
              }}
            >
              Chat
            </div>
          </div>
        </div>
      </div>
    </div>

    <Session appId="tURa5OP0" syncUser={syncUser} >
      <Inbox
      syncConversation={syncConversation}
  feedFilter={{ custom: { state: ['!=', 'hidden'] } }}
  showMobileBackButton={false}
  messageField={{ placeholder: 'Write a message..' }}
  style={{ marginTop:50, height: 600 }}
  className="chat-container"
  //...
/>


    </Session>



    </>





  )
}



export default Chat
