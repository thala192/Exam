import React from 'react';
import { CheckIcon, StarIcon, ShieldCheck, Eye, BookOpenIcon, GraduationCapIcon, ClockIcon, TrophyIcon, LightbulbIcon } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col w-full bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Main content */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        {/* Left side - Information */}
        <div className="max-w-md w-full mb-8 md:mb-0 md:mr-8">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg p-8 border-t-4 border-emerald-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-10 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome to <span className="text-emerald-600">AI Proctor</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mb-4 rounded-full"></div>
            <p className="text-gray-600 mb-6">
              Advanced AI-powered exam proctoring system that ensures academic integrity 
              with real-time monitoring and intelligent violation detection.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-emerald-700">
                    Real-time Monitoring
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Live video analysis with advanced face detection and gaze tracking
                    to monitor student behavior during exams.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-md">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-blue-700">
                    Secure Platform
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    End-to-end encryption and device detection to prevent cheating
                    and maintain exam integrity.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
                  <TrophyIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-amber-700">
                    AI-Powered Detection
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Intelligent algorithms detect multiple faces, head pose deviations,
                    and unauthorized devices automatically.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-70 rounded-lg"></div>
              <img src="/interview.jpg" alt="AI Proctoring System in Action" className="w-full h-48 object-cover rounded-lg shadow-md relative z-10 mix-blend-overlay" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg z-20">
                <p className="text-white font-medium">
                  Start your secure exam journey today
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Sign in form */}
        <div className="max-w-md w-full space-y-8 bg-gradient-to-br from-white to-indigo-50 p-8 rounded-lg shadow-lg border-t-4 border-purple-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 -mt-20 -mr-20 bg-gradient-to-br from-purple-400 to-pink-500 opacity-10 rounded-full"></div>
          <div className="text-center relative z-10">
            <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center shadow-lg border-2 border-white">
              <BookOpenIcon className="h-8 w-8 text-white" />
          </div>
            <h2 className="mt-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Access your exams and monitoring dashboard
            </p>
          </div>
          <div className="mt-8 space-y-6 relative z-10">
            <div className="rounded-md -space-y-px">
              <div className="mb-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <input 
                    id="email-address" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    required 
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="Email address" 
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    autoComplete="current-password" 
                    required 
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pr-10" 
                    placeholder="Password" 
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500 transition-colors duration-200">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <Link
                to="/signin"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition-all duration-200"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LightbulbIcon className="h-5 w-5 text-indigo-300 group-hover:text-indigo-200" />
                </span>
                Sign in
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-2 mt-6">
              <span className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full"></span>
              <span className="text-sm text-gray-500">or</span>
              <span className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full"></span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center transition-colors duration-200">
                <svg className="h-5 w-5 mr-2" fill="#4285F4" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                </svg>
                Google
              </button>
              <button type="button" className="py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center transition-colors duration-200">
                <svg className="h-5 w-5 mr-2" fill="#3b5998" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>
          <div className="text-center mt-4 relative z-10">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500 transition-colors duration-200">
                Register now
              </a>
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-gray-200 relative z-10">
            <p className="text-xs text-gray-500 text-center flex items-center justify-center">
              <ShieldCheck className="h-4 w-4 mr-1 text-emerald-500" />
              Secure, encrypted connection
            </p>
          </div>
        </div>
      </main>
        </div>
  );
}