"use client";
import Navbar from "@/components/Navbar";
import useLogin from "@/hooks/useLogin";
import React from "react";

const LoginPage: React.FC = () => {
	const handleGoogleLogin = () => {
		handleLogin();
	};

	const { handleLogin } = useLogin();

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-3xl font-bold mb-8">Login Page</h1>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={handleGoogleLogin}
			>
				Log in with Google
			</button>
		</div>
	);
};

export default LoginPage;
