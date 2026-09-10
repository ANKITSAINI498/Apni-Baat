import { useChat } from "../../context/ChatContext";
import Topbar from "./Topbar";
import Sidebar from "../sidebar/Sidebar";
import ChatHeader from "../chat/ChatHeader";
import MessageList from "../chat/MessageList";
import MessageComposer from "../chat/MessageComposer";
import DetailsPanel from "../details/DetailsPanel";
import MobileNavbar from "./MobileNavbar";
import Toast from "../common/Toast";
export default function MainLayout() {
  const { selected, detailsOpen } = useChat();
  return (
    <div className="app-shell">
      <Topbar />
      <main className="main">
        <div className={`sidebar-wrap ${selected ? "mobile-hidden" : ""}`}>
          <Sidebar />
        </div>
        <section className={`chat-wrap ${!selected ? "no-chat" : ""}`}>
          {selected ? (
            <>
              <ChatHeader />
              <MessageList />
              <MessageComposer />
            </>
          ) : (
            <div className="welcome">
              <div className="welcome-orb">💬</div>
              <h1>Welcome to Apni-Baat</h1>
              <p>Select a conversation and start connecting.</p>
              <span>Connect. Chat. Share. Repeat.</span>
            </div>
          )}
        </section>
        {selected && detailsOpen && <DetailsPanel />}
      </main>
      <MobileNavbar />
      <Toast />
    </div>
  );
}
