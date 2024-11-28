import React, { useState } from 'react'

const Test = () => {
    const [titre, setTitre] = useState('');
    const [resumes, setResumes] = useState('');
    const [dats, setDats] = useState('');
    const [type, setType] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('titre', titre);
        formData.append('resumes', resumes);
        formData.append('dats', dats);
        formData.append('type', type);
        formData.append('author', author);
        formData.append('image', image); // Ajoute le fichier ici

        try {
            const response = await fetch(`${''}`, {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Erreur lors de l\'upload :', error);
        }
    };


  return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
    />
    <textarea
        placeholder="Résumé"
        value={resumes}
        onChange={(e) => setResumes(e.target.value)}
    />
    <input
        type="date"
        value={dats}
        onChange={(e) => setDats(e.target.value)}
    />
    <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
    />
    <input
        type="text"
        placeholder="Auteur"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
    />
    <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])} // Assure-toi de ne prendre que le premier fichier
    />
    <button type="submit">Envoyer</button>
</form>
  )
}

export default Test
