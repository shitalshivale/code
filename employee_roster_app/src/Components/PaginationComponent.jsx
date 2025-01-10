import React from "react";

const PaginationComponent = ({
    currentPage,
    totalPages,
    handlePageChange,
}) =>{
    return(
        <div className="pagination">
            <button onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===1}>
                Prev
            </button>
            <span>
                Page {currentPage} / {totalPages}
            </span>
            <button onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage>=totalPages}>
                Next
            </button>
        </div>
    );
}

export default PaginationComponent;