import React from 'react'
import { Link } from 'react-router-dom'
import hero_sec from '../assets/hero_sec.png'

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <section style={{ backgroundImage: `url(${hero_sec})` }} className="relative flex flex-col bg-blend-color bg-cover items-center justify-center flex-grow text-center text-white p-10">
        <div style={{backgroundColor: 'rgba(0,0,0,0.5)'}} className="absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">Take Control of Your Finances</h1>
          <p className="text-lg max-w-2xl mb-6">
            Track your expenses, manage budgets, and make informed financial decisions effortlessly.
          </p>
          <Link to="/auth">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:scale-105 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <section className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Expense Tracker</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Expense Tracker is designed to help you monitor your spending habits and gain financial freedom. With an intuitive interface and powerful features, tracking your expenses has never been easier.
        </p>
      </section>
    </div>
  )
}

export default HomePage