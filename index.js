// When the file input with the ID 'fileInput' undergoes a change 
// (i.e., a file is selected), execute the readFile function.
document.querySelector("#fileInput").addEventListener("change",readFile);
//creating the readFile function
function readFile(){
    //get reference to file input and output
    const fileInputEl=document.querySelector("#fileInput"),
    outputEl=document.querySelector("#output"),
    // accessing the first file in the FileList. If a user selects multiple files and storing in const file
    file=fileInputEl.files[0];
    //asynchronous process for reading the content of a file selected by the user
  if (file){
    //The FileReader object allows you to read the contents of a file asynchronously.
     const reader=new FileReader();
     // The onload event is triggered when the reading operation is successfully completed.
     //creation of a function with parameter "e"
    reader.onload=(e)=>{
        //fetching the data in the file and storing it in a const var called content 
        const content=e.target.result;
        //conditions
        if(file.name.endsWith(".pdf")){
            //handles the pdf content display
          displayPDF(content);
        }
      else if(file.name.endsWith(".txt")){
        //handles text content and displays it
        displayText(content);
      }
      else{
         // Handle other formats by displaying an error message
         outputEl.innerHTML = '<div style="color: red;">Error: Unsupported file format.Please ensure the document has .pdf or .txt extension.</div>';
      }
    };
    // how to read the content of the selected file based on its type
    if(file.name.endsWith(".pdf")){
         // Read PDF as data URL
        reader.readAsDataURL(file);
    }
  else{
        // Read text-based files
        reader.readAsText(file);
  }
  }
}
//embedding the PDF content
function displayPDF(content){
    //displaying content
    document.querySelector("#output").innerHTML = `<iframe width="100%" height="600px" src="${content}"></iframe>`;
}
function displayText(content){
    //displaying content
    document.querySelector("#output").textContent = content;
}