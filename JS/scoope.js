var arregloProductos = new Array();
var countRegTab = 0;

function blackCampos() {
    document.getElementById('txtDescripcion').value = '';
    document.getElementById('txtNombre').value = '';
    document.getElementById('txtPrecio').value = '';
    document.getElementById('txtUnidadMedida').value = '';
    document.getElementById('txtStock').value = '';
    document.getElementById('txtCodigoBarras').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    
    Inicialicer();

    const botonAgregar = document.getElementById('btnAgregar');

    botonAgregar.addEventListener('click', (event) => {
        event.preventDefault();

        var nombre = document.getElementById('txtNombre').value;
        var descripcion = document.getElementById('txtDescripcion').value;
        var precio = document.getElementById('txtPrecio').value;
        var unidadMedida = document.getElementById('txtUnidadMedida').value;
        var stock = document.getElementById('txtStock').value;

        //Crear una nueva fila y celdas
        var table = document.getElementById('productoTabla').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow();

        var nameCell = newRow.insertCell(0);
        var descriptionCell = newRow.insertCell(1);
        var priceCell = newRow.insertCell(2);
        var unidadMedidaCell = newRow.insertCell(3);
        var stockCell = newRow.insertCell(4);
        var btnDelCol = newRow.insertCell(5);
        countRegTab++;

        //Añadir Texto a las Celdas
        nameCell.textContent = nombre;
        descriptionCell.textContent = descripcion;
        priceCell.textContent = precio;
        unidadMedidaCell.textContent = unidadMedida;
        stockCell.textContent = stock;
        btnDelCol.id = 'columnaBtnDel' + countRegTab;
        var btnDel = crearElementoHTML('button', btnDelCol.id, '', 'X');
        newRow.id = 'registro' + countRegTab + 'id';

        var producto = {
            nombre: "",
            descripcion: "",
            precio: "",
            unidadMedida: "",
            id: countRegTab
        };

        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.precio = precio;
        producto.unidadMedida = unidadMedida;
        producto.stock = stock;
        arregloProductos.push(producto);
        btnDel.setAttribute('onclick', 'EliminarElemento("' + newRow.id + '", "' + producto.id + '")');

        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-start",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
        Toast.fire({
            icon: "success",
            title: "Registro Agregado Correctamente",
            iconColor: '#0c993f',
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
            },
            hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
            }
        });
    });

    //Eventos KEYUP
    var txtNombre = document.getElementById('txtNombre');
    var txtDescripcion = document.getElementById('txtDescripcion');
    var txtUnidadMedida = document.getElementById('txtUnidadMedida');
    var txtPrecio = document.getElementById('txtPrecio');
    var txtStock = document.getElementById('txtStock');
    var txtCodigoBarras = document.getElementById('txtCodigoBarras');
    var buttonAgregar = document.getElementById('btnAgregar');

    document.addEventListener('input', () => {
        if (txtNombre.value.trim() != '') {
            txtDescripcion.disabled = false;
            if (txtDescripcion.value.trim() != '') {
                txtUnidadMedida.disabled = false;
                if (txtUnidadMedida.value.trim() != '') {
                    txtPrecio.disabled = false;
                    if (txtPrecio.value.trim() != '') {
                        txtStock.disabled = false;
                        if (txtStock.value.trim() != '') {
                            txtCodigoBarras.disabled = false;
                            if (txtCodigoBarras.value.trim() != '') {
                                buttonAgregar.disabled = false;
                            } else {
                                buttonAgregar.disabled = true;
                            }
                        } else {
                            buttonAgregar.disabled = true;
                            txtCodigoBarras.disabled = true;
                        }
                    } else {
                        txtStock.disabled = true;
                        buttonAgregar.disabled = true;
                        txtCodigoBarras.disabled = true;
                    }
                } else {
                    txtPrecio.disabled = true;
                    txtStock.disabled = true;
                    buttonAgregar.disabled = true;
                    txtCodigoBarras.disabled = true;
                }
            } else {
                txtUnidadMedida.disabled = true;
                txtPrecio.disabled = true;
                txtStock.disabled = true;
                buttonAgregar.disabled = true;
                txtCodigoBarras.disabled = true;
            }
        } else {
            txtDescripcion.disabled = true;
            txtUnidadMedida.disabled = true;
            txtPrecio.disabled = true;
            txtStock.disabled = true;
            buttonAgregar.disabled = true;
            txtCodigoBarras.disabled = true;
        }

    });

    function Inicialicer() {
        document.getElementById('txtDescripcion').disabled = true;
        document.getElementById('txtPrecio').disabled = true;
        document.getElementById('txtUnidadMedida').disabled = true;
        document.getElementById('txtStock').disabled = true;
        document.getElementById('txtCodigoBarras').disabled = true;
        document.getElementById('btnAgregar').disabled = true;
    }

    document.getElementById('btnCalcular').addEventListener('click', () => {
        var dineroSinIVA = 0;
        var IVA = 0;
        var txtIva = document.getElementById('txtIva');
        var txtPrecioTotal = document.getElementById('txtPrecioTotal');

        for (var i = 0; i < arregloProductos.length; i++) {
            dineroSinIVA += (parseFloat(arregloProductos[i].precio) * parseInt(arregloProductos[i].stock));
        }

        IVA = dineroSinIVA * 0.16;
        console.log(IVA);
        txtIva.value = IVA + '$';
        txtPrecioTotal.value = (dineroSinIVA + IVA) + '$';

        if (arregloProductos.length > 0) {
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-start",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            Toast.fire({
                icon: "success",
                title: "IVA y Precio Calculados!",
                iconColor: '#0c993f',
                showClass: {
                    popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
                },
                hideClass: {
                    popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `
                }
            });
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-start",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            Toast.fire({
                icon: "error",
                title: "Ingresa un Producto Primero!",
                iconColor: '#971919',
                showClass: {
                    popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
                },
                hideClass: {
                    popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `
                }
            });
        }
    });

    var crearElementoHTML = (etiqueta, idPadre, idHijo = '', contenido = '') => {
        var elemento = document.createElement(etiqueta);
        if (idHijo != '') {
            elemento.id = idHijo;
        }
        document.getElementById(idPadre).appendChild(elemento);
        if (contenido != '') {
            elemento.innerHTML = contenido;
        }
        return elemento;
    };
});

var EliminarElemento = (id, idProducto) => {
    document.getElementById(id).remove();
    for (var i = 0; i < arregloProductos.length; i++) {
        if (arregloProductos[i].id == idProducto) {
            arregloProductos.splice(i, 1);
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-start",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            Toast.fire({
                icon: "success",
                title: "Registro Eliminado Correctamente",
                iconColor: '#971919',
                showClass: {
                    popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
                },
                hideClass: {
                    popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `
                }
            });
        }
    }
}