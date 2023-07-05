
      const upFiles = [];
      const defobj = {};
      
      const serverURL1 = window.location.hostname.includes("127.0.0.1")?"http://127.0.0.1:8080":"https://expresstoo-jzam6yvx3q-ez.a.run.app";
      const serverURL2 = "https://script.google.com/macros/s/AKfycbzjs7HpmrKbjIcpJo1QTr2azPEYTlHl31ka0C17bl268J8L3mHd2azKz4BkC9cvqUwAQQ/exec"
      //const paraOne = "test";
      class server {
          
          constructor(){
              this.startFetch = fetchInfoWithFilter;
              this.getFile = getFile;
              this.url1 = serverURL1;
              this.url2 = serverURL2;
              this.defobj = defobj;
              this.readForm = readAllInputs;
              this.postForm = postForm;
          
              
          }
      }
      
      
      const fetchInfoWithFilter = async (
        data = JSON.stringify(defobj),
        paraOne="?paraOne=one",
        method="POST",
        credentials="omit",
        serverUrl = serverURL2,
        )=>{
          var myRequest = new Request(serverUrl+""+paraOne);
          const responseVal = await fetch(myRequest,{
              method: method, // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: credentials, // include, *same-origin, omit
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: method==="POST"?data:null// body data type must match "Content-Type" header
            }).then(async(response)=>{
              if (!response.ok){
                  throw new Error("HTTP error, status = " + response.status); 
                }
                return await response.text();
            }).catch(e=>{
              console.log(e);
          })
          return responseVal;
      }
      
      
      const readAsb64 = async (file)=>{
      
      
        const b64file = file => new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
      });
        return await b64file(file);
      }
      
      
      const getFile = async(e)=>{
        const rawFile = e.target.files[0];
        const fileSize = rawFile.size;
        const fileName = rawFile.name;
        const fileMime = rawFile.type;
        const fileSrc = e.target.id;
        const fileDataB64 = await readAsb64(rawFile);
        const fileToUpload = {fileSize,fileName,fileMime,fileSrc,fileDataB64}
        upFiles.push(fileToUpload);
      
      
        if(e.target.id==="inputPic"){
          e.target.parentNode.querySelectorAll("img")[0].src=fileDataB64;
        }
      
      
      }
      
      
      
      const readAllInputs = async(e)=>{
        const form = e.target.parentNode;
        let newArr = [];
        const id = e.target.parentNode.parentNode.querySelectorAll(".action-icons")[0].querySelectorAll("div")[0].id;

        for(key of Object.keys(localVar.cloudRes.data)){
          newArr = newArr.concat(localVar.cloudRes.data[key]);
        }

        const itemDetails = searchArrById(id,newArr)
        console.log(itemDetails)
        const arrObj = {};
        form.querySelectorAll("input").forEach(async(input)=>{
          const name = input.name;
          if(name==="inputPic"){
            upFiles.forEach(obj=>{
              if(obj.fileSrc===name){
                arrObj[name] = obj
              }
            })
          }else if(name==="cheekyone"){}else{
            const value = input.value;
            arrObj[name] = value
          }
        })
        return arrObj;
      }


      function searchArrById(id,arr){
         for(item of arr){
          if(item.id===id){
            return item
            }
        }
        return {"not":"found"}
      }


      const postForm = async (e)=>{
        e.stopPropagation();
        e.preventDefault();
        const obj = {"0":await readAllInputs(e)}
          fetchInfoWithFilter(JSON.stringify(obj),"?paraOne=four").then(e=>{
        console.log(JSON.parse(e));
      })
      }
      
      
      
      
      