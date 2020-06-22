import React, { useState, useEffect } from 'react'
import './App.scss'
import { api } from "./services/Api"
import Table from "./components/Table"
import Pagination from "./components/Pagination"
import logoMoovin from "./images/logo.svg"


const App = () => {

	// Criando todos os estados de posts, loading e paginação e posts por paginação
	
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(9)

	// Criando Efeito para consumir a api com Axios.

	const token = "-uJl9pjnZ-BDq2ryyfYoEJiuLSF-FdyHfaz2"

	useEffect(() => {
		setLoading(true)
		api.get(`posts?access-token=${token}&page=1`)
			.then((content) => {
				setPosts(content.data.result);
				setLoading(false)
			})
			.catch((err) => console.log(err));
	}, []);

	// Paginação

	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

	const paginate = pageNumber => setCurrentPage(pageNumber)

	// Conteudo da pagina principal

	return (
		<>
			<header className='Header'>
				<div className="App">
					<img alt='Logo da Moovin' src={logoMoovin} />
				</div>
			</header>

			<main className="Card">
				<div className="Headercard">
					<h2>Últimas postagens</h2>
				</div>
			</main>
			<div className="HeaderContent">
				<div className="titleHeader"> <p>Titulo</p></div>
				<div className="contentHeader"><p>Conteúdo</p></div>
			</div>
			<div className="table-container">
				<Table posts={currentPosts} loading={loading} />
				<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
			</div>
		</>
	)
}

export default App
