import axios from 'axios';

export const lista = async () => {
axios.get('https://users-app-two.vercel.app/api/usuario/lista')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}