import React from "react";
import { News } from "../types/article";
import { baseUrl } from "../types/base-url";


export default function useFetchMails(){
    const [mail,setMails] = React.useState<News[]>([]);
    const [Loading,setIsloading] = React.useState(false);
    const [error,setError] = React.useState<string>('');

    React.useEffect(()=>{
        const handleFetchMails = async () => {
            setIsloading(true);
            try{
                const reponse = await fetch(`${baseUrl}/All-New/`);
                const data = await reponse.json()
                setMails(data);
                // console.log(data)
            }catch{
                setError('Erreur l\'hors de fetching de données au serveur.')
            }finally{
                setIsloading(false)
            }
        };
        handleFetchMails();
    },[]);
    return {mail,Loading,error};
}