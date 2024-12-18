import React from "react";
import { Article } from "../types/article";
import { baseUrl } from "../types/base-url";


export default function useFetchData(){
    const [art,setDeposit] = React.useState<Article[]>([]);
    const [isLoading,setIsloading] = React.useState(false);
    const [error,setError] = React.useState<string>('');

    React.useEffect(()=>{
        const handleFetchDeposits = async () => {
            setIsloading(true);
            try{
                const reponse = await fetch(`${baseUrl}`);
                const data = await reponse.json()
                setDeposit(data);
                console.log(data)
            }catch{
                setError('Erreur l\'hors de fetching de données au serveur.')
            }finally{
                setIsloading(false)
            }
        };
        handleFetchDeposits();
    },[]);
    return {art,isLoading,error};
}