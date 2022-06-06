import React from "react";

function TypeDepartments({ typeDepts, filterTypeDepts }) {
  console.log(typeDepts);
  return (
    <div className="container">
      {typeDepts.map((typeDept, index) => {
        console.log(typeDept);
        return (
          <button
            type="button"
            className="btn-primary m-2"
            key={index}
            onClick={() => filterTypeDepts(typeDept)}
          >
            {typeDept}
          </button>
        );
      })}
    </div>
  );
}

export default TypeDepartments;
