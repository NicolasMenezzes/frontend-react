import React from 'react'
import {FaAngleRight, FaAngleLeft} from "react-icons/fa"


const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {

    // Componente de Paginção 

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <tbody>
            <tr className="pagination">
                <td className="contentpagination"><p>Exbindo {postsPerPage} resultados</p></td>
                <td  className="page-item">
                    <FaAngleLeft className="icon"/>
                    {pageNumbers.map(number => (
                        <a className={`page-item ${ currentPage === number ?  "selected" : ""}`} key={number} onClick={() => paginate(number)} href="!#" >{number}</a>
                    ))}
                    <FaAngleRight/>
                </td>
            </tr>
        </tbody>
    )
}

export default Pagination