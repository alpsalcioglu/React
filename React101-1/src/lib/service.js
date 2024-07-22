import axios from "axios";
async function getData(user_id){
     new Promise(async (resolve,reject)=>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);
        resolve(data);
        console.log(data);
     })
     new Promise(async (resolve,reject)=>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/"+user_id);
        resolve(data);
        console.log(data);
     })
}

export default getData;