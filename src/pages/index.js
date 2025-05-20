import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="theme-color" content="#b0dfff" />
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" async />
      </Head>
      
      <main className="flex items-center justify-center min-h-screen bg-[#b0dfff] overflow-hidden">
        {/* Decorative light blue orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 opacity-30 blur-[80px] animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-300 opacity-30 blur-[80px] animate-float-delay"></div>

        <div className="relative text-center p-12 bg-white rounded-2xl border border-blue-200 shadow-xl max-w-xl z-10 transition-all duration-500 hover:shadow-2xl">
          {/* No inner glassmorphism effects */}

          <h1 className="text-5xl font-bold text-blue-800 mb-6 tracking-tight">
            Task Manager
          </h1>
          <p className="text-blue-700/80 mb-10 text-lg font-light max-w-md mx-auto">
            Elevate your productivity with our sleek task management system
          </p>
          
          <div className="flex justify-center gap-5">
            <Link
              href="/login"
              className="px-8 py-3.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Login
            </Link>
            <Link
              href="/register"
              className="px-8 py-3.5 bg-white border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 transition-all duration-300 font-medium flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
              </svg>
              Register
            </Link>
          </div>
        </div>
      </main>

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
  );
}
