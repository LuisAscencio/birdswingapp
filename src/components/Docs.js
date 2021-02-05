import React, {useState, useEffect} from 'react';
import {storage} from '../firebase'
import Link from '@material-ui/core/Link';
import PacmanLoader from "react-spinners/PacmanLoader";
const storageRef= storage.ref("documents").listAll()









const Docs = () => {
    
    console.log(storageRef)




    const [files, setFiles]= useState([])
    










    const getURLS = (x) => {
    
        const arr= x["items"]
        const path= []
        const results = []
      
         arr.map(  (element) => {
             path.push([element["location"]["path"], element["location"]["path"].substring(element["location"]["path"].lastIndexOf('/')+1) ])
            
          })
      
          path.map((item) => {
            storage.ref(item[0]).getDownloadURL().then((url) => {
              results.push([url, item[1]])
              results.sort(function(a, b) { 
             
                return  a > b  ? 1 : -1;
            })
              setFiles([...results])
            
      
            })
      
         
          })
      
      
       }

       const getFiles = async() => {
        let newFiles= await storage.ref(`documents`).list()
       
       
    
        getURLS(newFiles)
      }


      useEffect(() => {
        getFiles()
    
       
      }, []);


      console.log(files)




    
      
      
      
       









    return (
        <div>
            Docs


           {
        

        files.length<=0 ? 
        <PacmanLoader style={{color: "#182028"}}/>
        
        : files.map((item) => {
          return( <ul>
            <li>
                  <Link href={item[0]}>
                  {item[1]}
                  </Link>
            </li>
        </ul>)
        })
        
    }
        </div>
    );
}

export default Docs;
