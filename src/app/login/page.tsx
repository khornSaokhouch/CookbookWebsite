import Image from "next/image";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Header Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          WELCOME BACK!
        </h2>
        <p className="text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>

        {/* Form Section */}
        <form className="mt-6">
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username or email
            </label>
            <input
              type="email"
              id="email"
              placeholder="deniel123@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="●●●●●●"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
              >
                👁
              </button>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-blue-500 focus:ring-blue-400 rounded mr-2"
              />
              <span className="text-gray-700 text-sm">Remember me</span>
            </label>
            <a
              href="#"
              className="text-blue-500 text-sm hover:underline font-semibold"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>

        {/* Or Continue With */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p className="mb-4">or continue with</p>
          <div className="flex justify-center gap-4">
            <button
              className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              <Image
                src="/facebook-icon.png"
                alt="Facebook Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign up with Facebook
            </button>
            <button
              className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              <Image
                src="/google-icon.png"
                alt="Google Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="hidden md:block ml-10">
        <Image
          src="/login-illustration.png" // Replace with the illustration image path
          alt="Login Illustration"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
