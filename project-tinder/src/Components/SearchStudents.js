import React, { useContext, useState } from 'react'
import { StudentsContext } from './Students'
import "./Components.css";


const SearchStudents = () => {

    const {setDescription, setTag, setSubject, click, setClick} = useContext(StudentsContext);

    const handleDescription = (e) => {
      setDescription(e.target.value);
    } 

    const handleTag = (e) => {
      setTag(e.target.value);
    } 

    const handleSubject = (e) => {
      setSubject(e.target.value);
    } 


  return (
    <div className="searchStudents__container">

      <input 
      id='desc'
      className='searchStudents__input' 
      type="text" 
      onChange={handleDescription} 
      spellCheck="false" 
      placeholder="find by description..."/>

      <input 
      id='tag'
      className='searchStudents__input' 
      type="text" 
      onChange={handleTag} 
      spellCheck="false" 
      placeholder="find by tag..."/>

      <input 
      id='subj'
      className='searchStudents__input' 
      type="text" 
      onChange={handleSubject} 
      spellCheck="false" 
      placeholder="find by subject..."/>

      <button
        name='filterButton'
        className='searchStudents__button' 
        onClick={() => setClick(!click)}
      > Find </button>
      
    </div>
  )
}

export default SearchStudents