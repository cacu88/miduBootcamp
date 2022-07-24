import React from "react";

export const Courses = ({courses}) => {
    return(
        <div>
          {courses.map(cursos =>
          <div key={cursos.id}> 
          <h2> {cursos.name} </h2>
          {cursos.parts.map(partes =>
          <ul key = {partes.id}> 
            <li> {partes.name} {partes.exercises} </li>
          </ul>)}
          <p>Number of Exercises {cursos.parts.map(partes => partes.exercises).reduce((prev, curr) => prev + curr, 0)}</p>
          </div>
        )}
        </div>)}

