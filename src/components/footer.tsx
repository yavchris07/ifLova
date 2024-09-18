import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='form'>
        <div className='txt'>
            <p>Vous etes passioné par la lecture ? </p>
            <p>Nous avons plusieurs articles , en sécurités, divertissement, sport et beaucoup d'autres</p>
            <p>Priere de nous laisser votre adresse mail !</p>
        </div>
        
        <div className='ins'>
            <p>Inscription aux news letters</p>
            <form action="" method="get">
                <input type="text" name="" id="" placeholder='Votre email ici !'/>
                <button>Valider</button>
            </form>
        </div>
        
      </div>
      

      <div className='foot'>
        <p>Tout droit réservé | IFlova | 2024</p>
      </div>
    </div>
  )
}
