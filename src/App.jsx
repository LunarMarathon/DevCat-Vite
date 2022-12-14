import React from "react"
import Header from "./components/Header"
import TextContent from "./components/TextContent"
import Footer from "./components/Footer"
import './App.css'

export default function App() {
  return (
    <div className="AppContent">
      <Header />
      <TextContent />
      <Footer />
    </div>
  )
}