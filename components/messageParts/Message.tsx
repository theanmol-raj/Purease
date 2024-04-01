import { generateDate } from '@/utils/helpers';
import React from 'react'

 export type MessageType = {
    uid : string
    test : boolean ,
    textContent: string;
    multimediaContent?: MultimediaContent[];
    timestamp: Date;
    sender: UserInfo;
    status: MessageStatus;
    replyTo?: MessageType;
  }
  
  interface MultimediaContent {
    type: MediaType;
    url: string;
  }
  
  interface UserInfo {
    username: string;
    profilePictureUrl?: string;
    // Other identifiable information
  }
  
  type MessageStatus = "READ" | "UNREAD" ;
  
  type Emoji = string; // Assuming emojis are represented as strings
  
  type MediaType = "IMAGE" | "VIDEO" | "AUDIO" | undefined ;


  interface MessageProps {
    message: MessageType;
    test? : boolean
  }

function Message({message ,test}: MessageProps) {
    return (
        <div className={`" flex mb-4 ${test ? 'justify-end' : ' justify-start'}`}>
        {!test && <div className="hidden md:flex items-end">
          {message.sender.profilePictureUrl && (
            <img
              src={message.sender.profilePictureUrl}
              alt={message.sender.username}
              className="w-8 h-8 rounded-full mr-2"
            />
          )}
        </div>}
        <div className={`" ${ test ? " bg-gradient-to-br from-blue-800 to-purple-800 text-white" : ' bg-white dark:bg-black'} p-3 text-sm rounded-lg ${test ?'rounded-br-none' : 'rounded-bl-none'} max-w-72 md:max-w-sm`}>
          {message.textContent && <p className="">{message.textContent}</p>}
          {message.multimediaContent && (
            <div className=" mt-2">
              {message.multimediaContent.map((media, index) => (
                <div key={index} className=" mb-2">
                  {media.type === 'IMAGE' && (
                    <img src={media.url} alt={`Image ${index + 1}`} className="w-full h-auto rounded" />
                  )}
                  {media.type === 'VIDEO' && (
                    <video src={media.url} controls className="w-full h-auto rounded"></video>
                  )}
                  {media.type === 'AUDIO' && (
                    <audio src={media.url} controls className="w-full h-auto rounded"></audio>
                  )}
                </div>
              ))}
            </div>
          )}
          <div className=" flex items-center mt-2 text-xs">
            <span className="timestamp mr-2">{generateDate(message.timestamp.toISOString())}</span>
            <span className={`status ${message.status} capitalize`}>{message.status}</span>
          </div>
        </div>
        
        {/* {message.reactions && (
          <div className="reactions ml-2">
            {message.reactions.map((reaction, index) => (
              <span key={index} className="mr-1">
                {reaction}
              </span>
            ))}
          </div>
        )} */}
        {message.replyTo && (
          <div className="reply-info mt-2 bg-gray-100 p-2 rounded">
            <p className="text-sm mb-1">Replying to:</p>
            <div className="quoted-message">
              <span className="font-bold">{message.replyTo.sender.username}: </span>
              <span>{message.replyTo.textContent}</span>
            </div>
          </div>
        )}

{/* {test && <div className=" flex items-end ml-2">
          {message.sender.profilePictureUrl && (
            <img
              src={message.sender.profilePictureUrl}
              alt={message.sender.username}
              className="w-8 h-8 rounded-full mr-2"
            />
          )}
        </div>} */}
      </div>
  )
}

export default Message