import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ChatProvider } from "./context/ChatContext";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Favorites from "./pages/Favorites";
import Archived from "./pages/Archived";
export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ChatProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/archived" element={<Archived />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ChatProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
