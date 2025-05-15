'use client'

import React, { useEffect, useState } from 'react'
import { useDisconnect, useAppKit, useAppKitNetwork, useWalletInfo } from '@reown/appkit/react'
import WalletBalance from '@/components/WalletBalance'

export default function Home() {
  const { disconnect } = useDisconnect()
  const { open } = useAppKit()
  const { switchNetwork } = useAppKitNetwork()
  const { walletInfo } = useWalletInfo()

  const handleDisconnect = async () => {
    try {
      await disconnect()
    } catch (error) {
      console.error("Failed to disconnect:", error)
    }
  }

  // Countdown logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Set your pre-sale end date here
  const endDate = new Date('2025-07-01T00:00:00Z') // Change as needed

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = endDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [endDate])



  return (
 

    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>UDP - Unified Decentralized Platform</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: 'Orbitron', sans-serif;\n            background-color: #000;\n            color: white;\n            overflow-x: hidden;\n        }\n        \n        .bg-gradient {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            background: radial-gradient(circle at center, \n                rgba(131, 56, 236, 0.6) 0%, \n                rgba(58, 134, 255, 0.6) 40%, \n                rgba(42, 157, 143, 0.6) 70%, \n                rgba(0, 0, 0, 0.8) 100%);\n            z-index: -1;\n        }\n        \n        .countdown-value {\n            font-size: 3.5rem;\n            font-weight: 700;\n            line-height: 1;\n        }\n        \n        .countdown-label {\n            font-size: 1.2rem;\n            vertical-align: text-top;\n            font-weight: 500;\n        }\n        \n        .countdown-separator {\n            font-size: 3.5rem;\n            font-weight: 700;\n            margin: 0 0.5rem;\n        }\n        \n        .progress-bar {\n            background: rgba(255, 255, 255, 0.1);\n            border-radius: 9999px;\n            height: 12px;\n            overflow: hidden;\n        }\n        \n        .progress-fill {\n            background: #4361ee;\n            height: 100%;\n            border-radius: 9999px;\n        }\n        \n        .buy-now-btn {\n            background: linear-gradient(90deg, #d53f8c 0%, #4361ee 100%);\n            transition: all 0.3s ease;\n        }\n        \n        .buy-now-btn:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n        }\n        \n        .social-icon {\n            background: rgba(255, 255, 255, 0.1);\n            transition: all 0.3s ease;\n        }\n        \n        .social-icon:hover {\n            background: rgba(255, 255, 255, 0.2);\n            transform: translateY(-2px);\n        }\n        \n        @media (max-width: 640px) {\n            .countdown-value {\n                font-size: 2rem;\n            }\n            .countdown-label {\n                font-size: 0.8rem;\n            }\n            .countdown-separator {\n                font-size: 2rem;\n                margin: 0 0.25rem;\n            }\n        }\n    "
    }}
  />
  <div className="bg-gradient" />
  <div className="container mx-auto px-4 py-6 relative z-10">
    {/* Header */}
    <header className="flex justify-between items-center mb-16">
      <div className="flex items-center">
        <svg
          width={40}
          height={40}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M4 8L12 4L20 8L12 12L4 8Z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(255,255,255,0.2)"
          />
          <path
            d="M4 16L12 12L20 16L12 20L4 16Z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(255,255,255,0.2)"
          />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wider">UDP</h1>
      </div>
      <div className="flex items-center">
        <a
          onClick={() => open()}
          className="hidden md:block mr-4 text-sm font-medium tracking-wider hover:text-opacity-80 transition-all"
        >
          WHITEPAPER
        </a>
        <button onClick={() => open()} className="bg-white bg-opacity-20 text-xs md:text-sm font-medium tracking-wider py-2 px-3 md:px-4 rounded-full mr-4 hover:bg-opacity-30 transition-all">
          CONNECT WALLET
        </button>
        <button onClick={() => open()} className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x={4} y={5} width={16} height={2} rx={1} fill="white" />
            <rect x={4} y={11} width={16} height={2} rx={1} fill="white" />
            <rect x={4} y={17} width={16} height={2} rx={1} fill="white" />
          </svg>
        </button>
      </div>
    </header>
    {/* Main Content */}
    <main className="text-center max-w-4xl mx-auto">
      {/* Countdown */}
      <div className="mb-12">
        <p className="text-lg mb-6 tracking-wider">PRE-SALE ENDS IN</p>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <span className="countdown-value">{timeLeft.days}</span>
            <span className="countdown-label">d</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="text-center">
            <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="countdown-label">h</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="text-center">
            <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="countdown-label">m</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="text-center">
            <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="countdown-label">s</span>
          </div>
        </div>
      </div>
      {/* Main Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 leading-tight tracking-wider">
        Unified Decentralized
        <br />
        Platform
      </h2>
      {/* Tagline */}
      <p className="text-base md:text-lg mb-16">
        Buy tokens now and reap the benefits of the blockchain revolution!
      </p>
        {/* Wallet Balance */}
        <WalletBalance />
      {/* Sale Progress */}
      <div className="mb-10 max-w-3xl mx-auto">
        <div className="flex justify-between mb-2 text-sm md:text-base">
          <div className="font-bold tracking-wider">STAGE 1: 20% BONUS!</div>
          <div className="font-bold">201,014 / 2,000,000</div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "10%" }} />
        </div>
        <div className="bg-blue-600 text-xs font-bold py-1 px-2 rounded-full inline-block -mt-3 ml-2">
          10%
        </div>
      </div>
      {/* Token Info */}
      <div className="mb-10 text-center">
        <p className="mb-1 tracking-wider">1 UDP = 0.0001 USD</p>
        <p className="tracking-wider">NEXT STAGE = 0.0002 USD</p>
      </div>
      {/* Buy Button */}
      <div className="mb-20">
        <button onClick={() => open()} className="buy-now-btn text-white font-bold py-3 px-16 rounded-full text-lg tracking-wider">
          BUY NOW
        </button>
      </div>
      {/* Social Links */}
      <div className="flex justify-center space-x-4 flex-wrap">
        <a href="#" className="social-icon p-3 rounded-full">
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="#" className="social-icon p-3 rounded-full">
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 13H12M8 17H16"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="#" className="social-icon p-3 rounded-full">
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 4.01C21 4.5 20.02 4.69 19 5C17.879 3.735 16.217 3.665 14.62 4.263C13.023 4.861 11.977 6.323 12 8.01V9.01C8.755 9.083 5.865 7.605 4 5.01C4 5.01 0 13.01 8 17.01C6.214 18.169 4.122 18.85 2 19.01C10 24.01 20 19.01 20 8.01C19.9991 7.7248 19.9723 7.44049 19.92 7.16C20.94 6.1 22 4.01 22 4.01Z"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="#" className="social-icon p-3 rounded-full">
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={12} cy={12} r={10} stroke="white" strokeWidth={2} />
            <circle cx={12} cy={12} r={4} stroke="white" strokeWidth={2} />
          </svg>
        </a>
        <a href="#" className="social-icon p-3 rounded-full">
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x={2}
              y={2}
              width={20}
              height={20}
              rx={5}
              stroke="white"
              strokeWidth={2}
            />
            <circle cx={12} cy={12} r={4} stroke="white" strokeWidth={2} />
            <circle cx={18} cy={6} r={1} fill="white" />
          </svg>
        </a>
        <a href="#" className="social-icon p-3 rounded-full">
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 9H2V21H6V9Z"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </main>
  </div>
</>


  
  )
}
