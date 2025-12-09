"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Carlos. All rights reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            {/* GitHub */}
            <Link
              href="https://github.com/hypnoticdata777"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl font-bold"
              aria-label="GitHub"
              style={{
                display: 'inline-block',
                width: '40px',
                height: '40px',
                backgroundColor: '#333',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '40px'
              }}
            >
              GH
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/in/hypnoticdata777"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl font-bold"
              aria-label="LinkedIn"
              style={{
                display: 'inline-block',
                width: '40px',
                height: '40px',
                backgroundColor: '#0077b5',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '40px'
              }}
            >
              in
            </Link>
          </div>

          {/* Email */}
          <div className="text-gray-400 text-sm">
            <Link
              href="mailto:contact@carlos.dev"
              className="hover:text-white transition-colors"
            >
              contact@carlos.dev
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
