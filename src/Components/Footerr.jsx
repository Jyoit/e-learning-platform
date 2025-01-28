import React from 'react'
// import "./Footerr.css";

export default function Footerr() {
  return (
    <div>
        <hr/>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">

          {/* Quick Links Section */}
          <div className="flex-1 min-w-[200px] mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="flex-1 min-w-[200px] mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 text-sm">Email: support@website.com</p>
            <p className="text-gray-300 text-sm">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-300 text-sm">Address: 123 Main Street, City, Country</p>
          </div>

          {/* Social Media Section */}
          <div className="flex-1 min-w-[200px] mb-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="ri-facebook-fill text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="ri-twitter-fill text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="ri-instagram-fill text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="ri-linkedin-fill text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center border-t border-gray-700 pt-4 text-sm">
          © 2025 YourWebsiteName. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
