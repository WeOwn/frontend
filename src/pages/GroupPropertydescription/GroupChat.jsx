import React, { useState, useEffect, useRef } from "react";
import styles from "./GroupChat.module.css";
import { FaPaperPlane, FaImage, FaSmile, FaUser, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import api from "../../service/apiGateway";

const GroupChat = ({ propertyId, propertyName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef(null);
  const userDetails = useSelector((store) => store.user);
  const [participants, setParticipants] = useState([]);
  const [showParticipants, setShowParticipants] = useState(false);

  // Mock data - replace with API calls in production
  useEffect(() => {
    // Simulate fetching messages
    setTimeout(() => {
      const mockMessages = [
        {
          id: 1,
          user: {
            id: "user1",
            name: "John Smith",
            avatar: null,
          },
          content: "Has anyone received the latest property report? I'm interested in seeing the updated cash flow projections.",
          timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
        },
        {
          id: 2,
          user: {
            id: "user2",
            name: "Sarah Johnson",
            avatar: null,
          },
          content: "I got it yesterday. The rental yields are better than initially projected!",
          timestamp: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          id: 3,
          user: {
            id: "admin",
            name: "WeOwn Admin",
            avatar: "/admin-avatar.png",
            isAdmin: true,
          },
          content: "We've uploaded the latest property report to the documents section. You can all access it now.",
          timestamp: new Date(Date.now() - 43200000).toISOString(),
        },
        {
          id: 4,
          user: {
            id: "user3",
            name: "Michael Chen",
            avatar: null,
          },
          content: "Thanks for the update! I'm curious about the property management situation. Are we staying with the current managers?",
          timestamp: new Date(Date.now() - 3600000).toISOString(),
        },
      ];
      
      setMessages(mockMessages);
      setIsLoading(false);
      
      // Mock participants
      setParticipants([
        { id: "user1", name: "John Smith", investmentAmount: "$25,000", joinDate: "Jan 15, 2023" },
        { id: "user2", name: "Sarah Johnson", investmentAmount: "$50,000", joinDate: "Jan 10, 2023" },
        { id: "user3", name: "Michael Chen", investmentAmount: "$15,000", joinDate: "Jan 18, 2023" },
        { id: "user4", name: "Emily Wilson", investmentAmount: "$30,000", joinDate: "Jan 12, 2023" },
        { id: "user5", name: "David Rodriguez", investmentAmount: "$20,000", joinDate: "Jan 20, 2023" },
        { id: "admin", name: "WeOwn Admin", isAdmin: true, joinDate: "Jan 1, 2023" },
      ]);
    }, 1000);
  }, [propertyId]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // In a real app, you would send this to the API
    const newMessageObj = {
      id: Date.now(),
      user: {
        id: userDetails?.user_id || "currentUser",
        name: userDetails?.user_name || "You",
        avatar: userDetails?.avatar || null,
      },
      content: newMessage.trim(),
      timestamp: new Date().toISOString(),
    };
    
    setMessages([...messages, newMessageObj]);
    setNewMessage("");
  };

  // Format timestamp to a readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (diffDays === 1) {
      return `Yesterday at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' }) + 
        ` at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
  };

  // Check if message is from current user
  const isCurrentUser = (userId) => {
    return userId === userDetails?.user_id || userId === "currentUser";
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.sectionTitle}>Investor Group Chat</h3>
        <div className={styles.chatInfo}>
          <button 
            className={styles.participantsButton}
            onClick={() => setShowParticipants(!showParticipants)}
          >
            <FaUser size={14} />
            <span>{participants.length} Investors</span>
          </button>
        </div>
      </div>
      
      <div className={styles.chatContainer}>
        {showParticipants ? (
          <div className={styles.participantsList}>
            <h4>Property Co-Investors</h4>
            <div className={styles.participantsContainer}>
              {participants.map(participant => (
                <div 
                  key={participant.id} 
                  className={`${styles.participantItem} ${participant.isAdmin ? styles.adminParticipant : ''}`}
                >
                  <div className={styles.participantAvatar}>
                    <FaUserCircle size={36} color="#7065f0" />
                    {participant.isAdmin && <div className={styles.adminBadge}>Admin</div>}
                  </div>
                  <div className={styles.participantInfo}>
                    <div className={styles.participantName}>{participant.name}</div>
                    {!participant.isAdmin && (
                      <div className={styles.participantInvestment}>{participant.investmentAmount}</div>
                    )}
                    <div className={styles.participantJoinDate}>Joined: {participant.joinDate}</div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className={styles.backToChatButton}
              onClick={() => setShowParticipants(false)}
            >
              Back to Chat
            </button>
          </div>
        ) : (
          <>
            <div className={styles.messagesContainer}>
              {isLoading ? (
                <div className={styles.loadingContainer}>
                  <div className={styles.loadingSpinner}></div>
                  <p>Loading conversation...</p>
                </div>
              ) : messages.length === 0 ? (
                <div className={styles.emptyStateContainer}>
                  <p>No messages yet. Be the first to start the conversation!</p>
                </div>
              ) : (
                <>
                  <div className={styles.chatStartMarker}>
                    <div className={styles.chatStartInfo}>
                      <div className={styles.propertyName}>
                        Welcome to the {propertyName} investor group chat
                      </div>
                      <div className={styles.chatPurpose}>
                        Connect with fellow investors, share insights, and stay updated on your investment.
                      </div>
                    </div>
                  </div>
                  
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`${styles.messageItem} ${
                        isCurrentUser(message.user.id) ? styles.currentUserMessage : ''
                      } ${message.user.isAdmin ? styles.adminMessage : ''}`}
                    >
                      {!isCurrentUser(message.user.id) && (
                        <div className={styles.messageAvatar}>
                          {message.user.avatar ? (
                            <img src={message.user.avatar} alt={message.user.name} />
                          ) : (
                            <FaUserCircle size={36} color={message.user.isAdmin ? "#7065f0" : "#555"} />
                          )}
                        </div>
                      )}
                      
                      <div className={styles.messageContent}>
                        <div className={styles.messageHeader}>
                          <div className={styles.messageSender}>
                            {isCurrentUser(message.user.id) ? 'You' : message.user.name}
                            {message.user.isAdmin && <span className={styles.adminTag}>Admin</span>}
                          </div>
                          <div className={styles.messageTime}>
                            {formatTimestamp(message.timestamp)}
                          </div>
                        </div>
                        <div className={styles.messageText}>{message.content}</div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>
            
            <form className={styles.messageInputContainer} onSubmit={handleSendMessage}>
              <button type="button" className={styles.attachButton}>
                <FaImage size={18} />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message here..."
                className={styles.messageInput}
                disabled={!userDetails?.isLoggedIn}
              />
              <button 
                type="submit" 
                className={styles.sendButton}
                disabled={!newMessage.trim() || !userDetails?.isLoggedIn}
              >
                <FaPaperPlane size={18} />
              </button>
            </form>
            
            {!userDetails?.isLoggedIn && (
              <div className={styles.loginPrompt}>
                <p>You need to <a href="/login">login</a> to participate in this conversation.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default GroupChat;