import Image from "next/image";

export default function Signup() {
  return (
    <div className="flex justify-center items-center h-screen w-screen overflow-hidden">
      {/* Centering Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          {/* Header Section */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            CREATE AN ACCOUNT
          </h2>
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>

          {/* Form Section */}
          <form className="mt-6">
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="yourname@example.com"
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

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Sign Up
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
                  src="/image/facebook.png"
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

        {/* Illustration Section */}
        <div className="hidden md:block md:ml-10">
          <Image
            src="/image/form.png" // Replace with the illustration image path
            alt="Sign Up Illustration"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
