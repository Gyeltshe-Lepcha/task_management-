import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (res.ok) {
      router.push('/dashboard')
    } else {
      setErrorMessage(data.message || 'Login failed, please try again.')
    }
  }

  return (
    <>
      <Head>
        <title>Login | Task Manager</title>
        <meta name="theme-color" content="#b0dfff" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-[#b0dfff] px-4 overflow-hidden relative">
        {/* Decorative light blue orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 opacity-30 blur-[80px] animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-300 opacity-30 blur-[80px] animate-float-delay"></div>

        <div className="w-full max-w-md p-8 bg-white rounded-2xl border border-blue-200 shadow-xl z-10 transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
            Login to your account
          </h2>
          {errorMessage && (
            <div className="bg-red-100 text-red-600 p-2 rounded mb-4 border border-red-300">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-800">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900 placeholder:text-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-black-700">
            Dont have an account?{' '}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register
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
