// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmZPJx2Ii8pY_F-Cd9tgwEdZ164U6peik",
    authDomain: "productosbd-ab4dc.firebaseapp.com",
    projectId: "productosbd-ab4dc",
    storageBucket: "productosbd-ab4dc.appspot.com",
    messagingSenderId: "534102002899",
    appId: "1:534102002899:web:ad24eb1c6514ffd7819826"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Funcion que agrega a FireBase usuarios

var Add2BD = (
    nombreRegistro,
    nombre,
    descripcion,
    precio,
    unidadMedida,
    stock
) => {
    set(ref(db, 'productos/' + nombreRegistro), {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        unidadMedida: unidadMedida,
        stock: stock
    });
};

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btnAgregar').addEventListener('click', (event) => {
        event.preventDefault();

        var nombre = document.getElementById('txtNombre').value;
        var descripcion = document.getElementById('txtDescripcion').value;
        var precio = document.getElementById('txtPrecio').value;
        var unidadMedida = document.getElementById('txtUnidadMedida').value;
        var stock = document.getElementById('txtStock').value;

        Add2BD(
            nombre.trim(),
            nombre,
            descripcion,
            precio,
            unidadMedida,
            stock
        );

        blackCampos();
    });
});