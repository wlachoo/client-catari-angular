
export class ServiceStudents { 
 
    getService() {
      return fetch(`http://127.0.0.1:5000/servicio`)
      .then(response => response.json())
      .then(data => data); 
    }  
    
}