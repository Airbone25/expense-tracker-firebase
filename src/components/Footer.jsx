import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 text-center py-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.</p>
        <p className="text-sm mt-2">“A budget is telling your money where to go instead of wondering where it went.”</p>
    </footer>
  )
}

export default Footer