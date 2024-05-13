import React from "react";

function BusquedaBoxClientes({ onSearch }) {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        aria-label="Search"
        aria-describedby="basic-addon2"
        //onChange={handleInputChange}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default BusquedaBoxClientes;
