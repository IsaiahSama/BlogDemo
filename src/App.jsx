import './App.css'
import React from "react"
import HomePage from "./pages/HomePage"
import NewPostPage from "./pages/NewPostPage"
import PostPage from "./pages/PostPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Posts from "./posts.json"

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom"

function App() {

	const posts = Posts

	return (
		<Router>
			<Header />
			<section className="section content">
				<Routes>
					<Route path="/" element={<HomePage posts={posts} />} />
					<Route path="/post/create" element={<NewPostPage />} />
					<Route path="/post/:id" element={<PostPage posts={posts} />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/profile" element={<ProfilePage />} />
				</Routes>
			</section>
			<Footer />
		</Router>
	);
}

export default App
