
export const FormatDate=(date:any)=>{
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

}


export const downloadMedia=(e:any,image:any)=>{
    e.preventDefault();
    try{
fetch(image).then(res=>res.blob())
.then(blob=>{
    const url=window.URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.style.display="none";
    a.href=url;
    const nameSplit=image.split("/");
    const duplicateName=nameSplit.pop();
    a.download=""+duplicateName+"";

    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url)
}).catch(err=>console.log("error while downloading the image",err.message));
    }catch(error:any){
        console.log("error while downloading the image",error.message)
    }
}