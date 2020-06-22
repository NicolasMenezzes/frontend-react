import React from 'react'


const  Table = ({posts, loading}) => {
	// Componente de Tabela
    if(loading) {
        return <h1 className="loading">Carregando Posts...</h1>
    }
    return (
       
				<table>
					<tbody>
							{posts.map((itens) => (
								<>
								<tr key={itens.id}>
									<td className="title"><p>{itens.title}</p></td>
									<td className="content"><p>{itens.body}</p></td>
								</tr>
								</>
							))}
						
					</tbody>
				</table>
			
    )
}

export default Table