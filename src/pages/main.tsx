import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.scss';
import AdminNav from '../components/admin-nav';
import useFetchData from '../hooks/use-fetch-articles';
import { baseUrl } from '../types/base-url';
import useFetchMails from '../hooks/use-fetch-mails';
// import art from '../types/items';

export default function Main() {
  const [titre, setTitre] = useState<string>('');
  const [resumer, setResumes] = useState<string>('');
  const [date_article, setDats] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [auteur, setAuthor] = useState<string>('');

  const navigator = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<string>('');

  const { art, isLoading } = useFetchData();
  const {error,Loading, mail} = useFetchMails()

  // Contrôle si l'utilisateur est connecté
  useEffect(() => {
    if (!localStorage.getItem('email')) {
      navigator('/admin/login');
    }
  }, [navigator]);

  // Gestion du changement de fichier
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation de l'image
    if (!image) {
      setError('Veuillez sélectionner une image.');
      return;
    }

    setLoading(true);
    const formData = new FormData();

    // Ajout des données au formulaire
    formData.append('titre', titre);
    formData.append('resumer', resumer);
    formData.append('date_article', date_article);
    formData.append('type', type);
    formData.append('image', image); // Ajout de l'image
    formData.append('auteur', auteur);

    // Debug des données dans FormData
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    try {
      const response = await fetch(`${baseUrl}/Insert-Article/`, {
        method: 'POST',
        body: formData,
      });

      // Vérification de la réponse du serveur
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la création de l\'article.');
      }

      const data = await response.json();
      if (data) {
        alert('Article créé avec succès !');
        setTitre('');
        setResumes('');
        setDats('');
        setType('');
        setImage(null);
        setAuthor('');
      }
    } catch (error: any) {
      setError(`Erreur : ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <AdminNav />
      <div className="container">
        <div className="article">
          <form onSubmit={handleSubmit}>
            <h4>Créer un article</h4>

            <div className="control">
              <label htmlFor="image">Photo</label>
              <input
                type="file"
                id="image"
                required
                onChange={handlePhotoChange}
                accept="image/*"
                className="file"
              />
            </div>

            <div className="control">
              <label htmlFor="titre">Titre</label>
              <input
                type="text"
                id="titre"
                value={titre}
                placeholder="Le titre ..."
                onChange={(e) => setTitre(e.target.value)}
              />
            </div>

            <div className="control">
              <label htmlFor="resumes">Résumé</label>
              <input
                type="text"
                id="resumes"
                value={resumer}
                placeholder="Le résumé ..."
                onChange={(e) => setResumes(e.target.value)}
                className='summary'
              />
            </div>

            <div className="control">
              <label htmlFor="dats">Date</label>
              <input
                type="date"
                id="dats"
                value={date_article}
                // placeholder="Date de publication ..."
                onChange={(e) => setDats(e.target.value)}
              />
            </div>

            <div className="control">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                id="type"
                value={type}
                placeholder="Type d'article ..."
                onChange={(e) => setType(e.target.value)}
              />
            </div>

            <div className="control">
              <label htmlFor="author">Auteur</label>
              <input
                type="text"
                id="author"
                value={auteur}
                placeholder="Auteur ..."
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            {isError && <div style={{ fontSize: '13px', color: 'red' }}>{isError}</div>}

            <button type="submit" disabled={loading}>
              {loading ? 'Ajout en cours...' : 'Ajouter'}
            </button>
          </form>
        </div>

        <div className="list-articles">
          <h3>Mes articles</h3>
          <p>Nombre d'articles : {art.length}</p>
          {isLoading && <p>Chargement des articles...</p>}
          {art && art.map((a) => (
            <div className='artic'>
              <p key={a.id}>
                {a.titre}
              </p>
              <span>Auteur : {a.auteur}</span>
            </div>
          ))}
          {/* {art.length} */}
        </div>
        <div className="list-articles">
        <h3>Mes abonnees news-letters</h3>
          <p>Nombre d'abonnes : {mail.length}</p>
          {mail.map((m)=>{return <p>{m.email}</p>})}
          {Loading && <p>Chargement en cours ...</p>}
          {error && <p>Acces impossible au serveur !</p>}
        </div>
      </div>
    </div>
  );
}
