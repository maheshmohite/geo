import { Outlet } from 'react-router-dom'
import UtilityBar from './UtilityBar'
import Navbar from './Navbar'
import Footer from './Footer'
import ChatWidget from '../ui/ChatWidget'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <UtilityBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
