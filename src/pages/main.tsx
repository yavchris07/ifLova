import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import '../styles/main.scss'
import AdminNav from '../components/admin-nav'
import useFetchData from '../hooks/use-fetch-articles'
import { baseUrl } from '../types/base-url'


export default function Main() {
  const [titre,setTitre] = useState<string>('')
  const [resumes,setResumes] = useState<string>('')
  const [dats,setDats] = useState<string>('')
  const [type,setType] = useState<string>('')
  const [cover,setCover] = useState(null)
  const [author,setAuthor] = useState<string>('')

  const navigator = useNavigate()
  const [loading,setLoading] = useState<boolean>()
  const [isError,setError] = useState<string>('')

  const {arti,isLoading,error} = useFetchData()

  useEffect(()=>{
    if(!localStorage.getItem('email')){
      navigator('/admin/login')
    }
  })

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const formData = new FormData();
        formData.append('titre', titre);
        formData.append('resumes', resumes);
        formData.append('dats', dats);
        formData.append('type', type);
        formData.append('author', author);
        formData.append('cover', cover); // Ajoute le fichier ici
   
    try {
      setLoading(true)
      const response = await fetch(`${baseUrl}/articles`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: formData
      });

      // console.log(titre,resumes,dats,heure,type,cover,author)
      console.log(await response.text())
      const data = await response.json();
     
     
      if (data.status === 'Article created') {
        alert('Succes !')
      }

      if (!response.ok) {
        throw new Error(`Erreur lors de tentative de creation de news letters !`);
      }
  
    } catch (error) {
      setError(`Erreur : ${error}`);
    } finally {
      setLoading(false);
    }
  }

// //id,titre,resumes,dats,heure,type,cover,author 
  return (
    <div className='main'>

      <AdminNav />

      <div className='container'>
        <div className='article'>
          <form onSubmit={handleSubmit}>
          <h4>Article</h4>
            <div className='control'>
              <label htmlFor="">Titre</label>
              <br />
              <input 
                type="text" 
                value={titre}
                placeholder='Le titre ...' 
                onChange={(e)=> setTitre(e.target.value)}
              />
            </div>
            <div className='control'>
              <label htmlFor="">Resumes</label>
              <br />
              <input 
                type="text" 
                value={resumes}
                placeholder='Le resume ...' 
                onChange={(e)=> setResumes(e.target.value)}
              />
            </div>
            <div className='control'>
              <label htmlFor="">Date</label>
              <br />
              <input 
                type="date" 
                value={dats}
                placeholder='Le titre ...' 
                onChange={(e)=> setDats(e.target.value)}
              />
            </div>
            <div className='control'>
              <label htmlFor="">Type</label>
              <br />
              <input 
                type="text" 
                value={type}
                placeholder='Le type ...' 
                onChange={(e)=> setType(e.target.value)}
              />
            </div>
            <div className='control'>
              <label htmlFor="">Photo</label>
              <br />
              <input 
                type="file" 
                accept="image/*"
                placeholder='La photo ...' 
                onChange={(e)=> setCover(e.target.files[0])}
              />
            </div>
            <div className='control'>
              <label htmlFor="">Auteur</label>
              <br />
              <input 
                type="text" 
                value={author}
                placeholder='Auteur ...' 
                onChange={(e)=> setAuthor(e.target.value)}
              />
            </div>
              <div style={{fontSize:'13px',color:'red'}}>{isError}</div>
            <button type='submit'>Ajouter</button>
          </form>
        </div>

        <div className='list-artilces'>
          <h3>Mes articles</h3>
          <p>Nombre d'articles : {arti.length}</p>
          {isLoading && <> En cours de </> }
          {arti.map((a)=> {return <><p style={{fontSize:'10px'}}>{a.titre}</p></>})}
        </div>
      </div>
     
    </div>
  )
}
