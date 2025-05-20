import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    setMessage(data.message || data.error)
  }

  return (
    <>
      <Head>
        <title>Register | Task Manager</title>
        <meta name="theme-color" content="#b0dfff" />
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" async />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-[#b0dfff] px-4 overflow-hidden relative">
        {/* Decorative blue orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 opacity-30 blur-[80px] animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-300 opacity-30 blur-[80px] animate-float-delay"></div>

        <div className="w-full max-w-md p-8 bg-white rounded-2xl border border-blue-200 shadow-xl z-10 transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Create an account</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-800">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900 placeholder:text-blue-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-800">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900 placeholder:text-blue-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-blue-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="mt-1 w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900 placeholder:text-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Register
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-sm text-green-600">
              {message}
            </p>
          )}
          <p className="mt-4 text-center text-sm text-black-700">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
      `}</style>
    </>
  )
}
