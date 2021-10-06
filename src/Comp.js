import React from 'react'
import ChildCmp from './ChildCmp';
import Clients from './Data'
export default function Comp() {
    var obj=[]
//   useEffect(() => {
   
    let count=1;
    let data;
    Clients.sort()
    // console.log(Clients)
     for(let i=0; i<Clients.length; i++){
         count=1;
         for(let j=i+1; j<Clients.length; j++){
             if(Clients[i]===Clients[j]){
                 count++;
             }
         }
         i+=count-1;
         let addableCount =(7/100)*Clients.length;
         if(count>addableCount){
            data={
                names:Clients[i],
                Counts:count
            }
            obj.push(data) 
         }
    //    console.log(obj)
     }
//   }, [])
    return (
        <div>
            <ChildCmp val={obj}/>
        </div>
    )
}
