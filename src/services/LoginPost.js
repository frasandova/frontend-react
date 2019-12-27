import axios from 'axios';
import Swal from 'sweetalert2';
const config = require('../configuration')
const API_BASE_URL = config.get('API_API_BASE_URL')
const qs = require('querystring');

export function LoginPost(username, password) {

    /*const data = {
        email: username,
        password: password
    };*/

    const TokenUpload = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoxLCJuYW1lIjoibWd1ZXJyZXJvIiwiZW1haWwiOiJtYXR0aWFzLmd1ZXJyZXJvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDBDbEtlTzdtVnYwVmtoamxOVjRjb3U0RXgyREV1bGNySkFmdXFZZU1SUkMyNFlZUUZkR3dXIiwiYXBlbGxpZG9fcGF0ZXJubyI6Imd1ZXJyZXJvIiwiYXBlbGxpZG9fbWF0ZXJubyI6ImFodW1hZGEiLCJjcmVhdGVkX2F0IjoiMjAxOS0xMi0yMFQxNzo1Nzo0NS4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMTktMTItMjBUMTc6NTc6NDUuMDAwWiJ9LCJpYXQiOjE1NzczNzkzMjAsImV4cCI6MTU3NzM5MzcyMH0.rxxH1QnwO3EqgQ7sXdI0D3S7huW8ybwO-l2G8qZAdQY';
    const TokenDownload = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoxLCJuYW1lIjoibWd1ZXJyZXJvIiwiZW1haWwiOiJtYXR0aWFzLmd1ZXJyZXJvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDBDbEtlTzdtVnYwVmtoamxOVjRjb3U0RXgyREV1bGNySkFmdXFZZU1SUkMyNFlZUUZkR3dXIiwiYXBlbGxpZG9fcGF0ZXJubyI6Imd1ZXJyZXJvIiwiYXBlbGxpZG9fbWF0ZXJubyI6ImFodW1hZGEiLCJjcmVhdGVkX2F0IjoiMjAxOS0xMi0yMFQxNzo1Nzo0NS4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMTktMTItMjBUMTc6NTc6NDUuMDAwWiJ9LCJpYXQiOjE1NzczNzkzMjAsImV4cCI6MTU3NzM5MzcyMH0.rxxH75894759873495873948fjsddfjkhsdkjfhsjk';
    /* usuario y rol fijo aca */
    const users = [
        {
            email : 'user-upload@cadem.cl',
            password: 'AaBb1234#',
            rol: 'user-upload',
            token: TokenUpload,
            vista : 'subir',
            //bucket : 'archivos-demca'
            bucket : 'be-input'
        },
        {
            email : 'user-download@cadem.cl',
            password : 'BbAa1234#',
            rol : 'user-download',
            token : TokenDownload,
            vista : 'ver',
            //bucket : 'archivos-demca'
            bucket : 'be-clean'

        }
    ]

    let user  = users.find(elemento => elemento.email == username && elemento.password == password);

    if(!user)
    {
        Swal.fire('Oops...', 'Usuario o password invalido!', 'error')
        sessionStorage.setItem('NoAutorizado', 'No autorizado');
    }
    else if(user.rol.length > 0)
    {
        sessionStorage.setItem('userToken', user.token);
        sessionStorage.setItem('rol', user.rol);
        sessionStorage.setItem('bucket', user.bucket);
        sessionStorage.removeItem("NoAutorizado");
        window.location.href = '/' + user.vista;
    }

    /**para conectar via api node.js */
    /*let axiosConfig = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    axios.post(API_BASE_URL+'/login', qs.stringify(data), axiosConfig)
        .then(response => {
            sessionStorage.setItem('userToken', response.data.token);
            sessionStorage.removeItem("NoAutorizado");
            window.location.href = '/subir';
        })
        .catch(error => {
            sessionStorage.setItem('NoAutorizado', error.message);
        });*/
    
}