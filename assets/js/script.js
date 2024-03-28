let postData = document.querySelector('#post-data');
postData.classList.add('d-none');

//Fetch API

const consultarDatos = async () => 
{
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await fetch(url);
        const datos = await response.json();
        console.log(datos);

        let dataTitle;
        let dataBody;
        let lista = "";

        for(let i = 1; i <= 20; i++) 
        {
            dataTitle = datos[i].title;
            dataBody = datos[i].body;

            lista += `
                <ul>
                    <h3>${dataTitle}</h3>
                    <li>${dataBody}</li>
                </ul>
            `;
        }

        let ol = "";

        ol = `
            <ol>
                ${lista}
            </ol>
        `;

        postData.innerHTML = ol;
        
    } catch (error) {
        console.log("ERROR: ", error);
    }
    
};


function getPosts()
{
    consultarDatos();
    postData.classList.remove('d-none');
}