const posts =[
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post Two'}
    ];
    function getPosts(){
        setTimeout(()=>{
    let output ='';
    posts.forEach((post,index)=>{
        output+=`<li>${post.title}</li>`;
    });
    document.body.innerHTML=output;
        },1000)
    }
    function createPost(post) {
        return new Promise((resolve, reject)=>{
setTimeout(()=>{
    posts.push(post);
    const error=false;
    if (!error){
        resolve();
    }else{
        reject('Error: Something wnet wrong');
    }
},2000)
    })
     }
    //  createPost({title:'Post Three',body:'This is post three'})
    //  .then(getPosts)
    //  .catch(err=>console.log(err));
    
    //Async /await
    // async function init(){
        // await createPost({title:'Post Three',body:'This is post three'});
        // getPosts();
    // }
    // init();
    // 
    //Async /await/fetch
    
    async function fetchUsers(){
        const res =await fetch('https://jsonplaceholder.typicode.com/users');
        const data= await res.json();
        console.log(data);
    }
    fetchUsers();
    
    
    
    
    
    
    
    
    //promise.all
    // const promise1 = Promise.resolve('Hello world!');
    // const promise2 = 10;
    // const promise3 = new Promise((resolve,reject)=>
    // setTimeout(resolve,2000,'Goodbye'));
    // const promise4 = fetch ('https://jsonplaceholder.typicode.com/users')
    // .then((res)=>res.json());
    // 
    // Promise.all([promise1,promise2,promise3]).then((values)=>
    // console.log(values));


