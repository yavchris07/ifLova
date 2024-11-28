import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/main.scss'
import AdminNav from '../components/admin-nav'
import useFetchData from '../hooks/use-fetch-articles'
import { baseUrl } from '../types/base-url'


export default function Main() {

  const [titre, setTitre] = useState<string>('')
  const [resumes, setResumes] = useState<string>('')
  const [dats, setDats] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [image, setImage] = useState<File>()
  const [author, setAuthor] = useState<string>('')

  const navigator = useNavigate()
  const [loading, setLoading] = useState<boolean>()
  const [isError, setError] = useState<string>('')

  const { arti, isLoading } = useFetchData()

  //Control if the user is logged !
  useEffect(() => {
    if (!localStorage.getItem('email')) {
      navigator('/admin/login')
    }
  })

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    const formData = new FormData();

    formData.append('titre', titre);
    formData.append('resumes', resumes);
    formData.append('dats', dats);
    formData.append('type', type);
    if (image) {

      formData.append("image", image);
    }
    formData.append('author', author);
    // formData.append('cover', cover); // Ajoute le fichier ici

    try {
      setLoading(true)
      const response = await fetch(`${baseUrl}/articles`, {
        method: 'POST',
        headers: { 'Content-Type': "multipart/form-data" },
        body: formData
      });

      // console.log(titre, resumes, dats, type, image, author)
      // console.log(await response.text())
      const data = await response.json();


      if (data.status === 'Article created') {
        alert('Succes !')
        // formData.set('','')
      }

      if (!response.ok) {
        throw new Error(`Erreur lors de tentative de creation d\'article !`);
      }

    } catch (error) {
      setError(`Erreur : ${error}`);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className='main'>

      <AdminNav />

      <div className='container'>
        <div className='article'>
          <form onSubmit={handleSubmit}>
            <h4>Article</h4>
            <div className='control'>
              <label htmlFor="">Photo</label>
              <br />
              <input
                type="file"
                required
                onChange={handlePhotoChange}
                accept="image/*"
                className='file'
              />
            </div>
            <div className='control'>
              <label htmlFor="">Titre</label>
              <br />
              <input
                type="text"
                value={titre}
                placeholder='Le titre ...'
                onChange={(e) => setTitre(e.target.value)}
              />
            </div>
            <div className='control'>
              <label htmlFor="">Resumes</label>
              <br />
              <input
                type="text"
                value={resumes}
                placeholder='Le resume ...'
                onChange={(e) => setResumes(e.target.value)}
              />
            </div>
            <div className='control'>
              <label htmlFor="">Date</label>
              <br />
              <input
                type="date"
                value={dats}
                placeholder='Le titre ...'
                onChange={(e) => setDats(e.target.value)}
              />
            </div>
            <div className='control'>
              <label htmlFor="">Type</label>
              <br />
              <input
                type="text"
                value={type}
                placeholder='Le type ...'
                onChange={(e) => setType(e.target.value)}
              />
            </div>

            <div className='control'>
              <label htmlFor="">Auteur</label>
              <br />
              <input
                type="text"
                value={author}
                placeholder='Auteur ...'
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div style={{ fontSize: '13px', color: 'red' }}>{isError}</div>
            <button type='submit'>{loading ? 'Ajoute en cours' : 'Ajouter'}</button>
          </form>
        </div>

        <div className='list-artilces'>
          <h3>Mes articles</h3>
          <p>Nombre d'articles : {arti.length}</p>
          {isLoading && <> En cours de </>}
          {arti.map((a) => { return <><p style={{ fontSize: '10px' }}>{a.titre}</p></> })}
        </div>
      </div>

    </div>
  )
}


