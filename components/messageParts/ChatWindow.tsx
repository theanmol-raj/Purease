import React from 'react'
import Message, { MessageType } from './Message'

type Props = {}

function ChatWindow({}: Props) {
  const generateRandomUid = () => {
    return Math.random().toString(36).substring(7);
  };
  
  const messages = [
    {
      uid: generateRandomUid(),
      test: true,
      textContent: "Hi there! I've been feeling a bit overwhelmed lately.",
      timestamp: new Date(),
      sender: {
        username: 'User123',
        profilePictureUrl: 'https://example.com/user.jpg',
      },
      status: 'READ',
    },
    {
      uid: generateRandomUid(),
      test: false,
      textContent: "I'm here to help and listen. What has been on your mind?",
      timestamp: new Date(),
      sender: {
        username: 'MentalHealthAssistant',
        profilePictureUrl: 'https://example.com/assistant.jpg',
      },
      status: 'UNREAD',
    },
    {
      uid: generateRandomUid(),
      test: true,
      textContent: "It feels like everything is too much right now, and I can't focus.",
      timestamp: new Date(),
      sender: {
        username: 'User123',
        profilePictureUrl: 'https://example.com/user.jpg',
      },
      status: 'READ',
    },
    {
      uid: generateRandomUid(),
      test: false,
      textContent: "I understand. It's okay to feel that way. Can you tell me more about what's going on?",
      timestamp: new Date(),
      sender: {
        username: 'MentalHealthAssistant',
        profilePictureUrl: 'https://example.com/assistant.jpg',
      },
      status: 'UNREAD',
    },
    {
      uid: generateRandomUid(),
      test: true,
      textContent: "I've been having trouble sleeping and often feel anxious.",
      timestamp: new Date(),
      sender: {
        username: 'User123',
        profilePictureUrl: 'https://example.com/user.jpg',
      },
      status: 'READ',
    },
    {
      uid: generateRandomUid(),
      test: false,
      textContent: 'Thank you for sharing. It\'s important to address these feelings. Have you noticed any specific triggers?',
      timestamp: new Date(),
      sender: {
        username: 'MentalHealthAssistant',
        profilePictureUrl: 'https://example.com/assistant.jpg',
      },
      status: 'UNREAD',
    },
    {
      uid: generateRandomUid(),
      textContent: 'Yes, certain situations at work trigger my anxiety.',
      timestamp: new Date(),
      sender: {
        username: 'User123',
        profilePictureUrl: 'https://example.com/user.jpg',
      },
      status: 'READ',
      test: true,
    },
    {
      uid: generateRandomUid(),
      textContent: 'Understanding your triggers is a crucial step. How do you usually cope with workplace stress?',
      timestamp: new Date(),
      sender: {
        username: 'MentalHealthAssistant',
        profilePictureUrl: 'https://example.com/assistant.jpg',
      },
      status: 'UNREAD',
      test: false,
    },
    {
      uid: generateRandomUid(),
      textContent: 'I try deep breathing exercises, but sometimes it feels overwhelming.',
      timestamp: new Date(),
      sender: {
        username: 'User123',
        profilePictureUrl: 'https://example.com/user.jpg',
      },
      status: 'READ',
      test: true,
    },
    {
      uid: generateRandomUid(),
      textContent: 'Deep breathing is a great technique. Let me share some additional stress management strategies with you.',
      timestamp: new Date(),
      sender: {
        username: 'MentalHealthAssistant',
        profilePictureUrl: 'https://example.com/assistant.jpg',
      },
      status: 'UNREAD',
      test: false,
    },
    {
      uid: generateRandomUid(),
      textContent: 'That would be helpful. I appreciate your support.',
      timestamp: new Date(),
      sender: {
        username: 'User123',
        profilePictureUrl: 'https://example.com/user.jpg',
      },
      status: 'READ',
      test: true,
    },
    {
      uid: generateRandomUid(),
      textContent: "You're welcome! We're in this together. Feel free to reach out whenever you need assistance.",
      timestamp: new Date(),
      sender: {
        username: 'MentalHealthAssistant',
        profilePictureUrl: 'https://example.com/assistant.jpg',
      },
      status: 'UNREAD',
      test: false,
    },
  ];

  return (
    <div className=" w-full  flex-1 flex flex-col-reverse overflow-y-scroll relative scrollbar-hide ">
          
          <div className=" flex-1 " />
          {messages.reverse().map((message, index) => (
          <Message key={message.uid} test={message.test} message={message as MessageType} />
        ))}
        
        
        
        </div>
  )
}

export default ChatWindow