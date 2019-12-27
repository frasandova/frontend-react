let rol = sessionStorage.getItem('rol');
let Menu = [];

switch(rol){

    case 'user-upload':
         Menu = [{
            name: 'Archivos',
            icon: 'img/icons/navicon.svg',
            submenu: [{
                name: 'Subir Archivos',
                path: '/subir'
            },{
                name: 'Ver Archivos',
                path: '/ver'
            }]
        }
        ];
    break;
    case 'user-download':
         Menu = [{
            name: 'Archivos',
            icon: 'img/icons/navicon.svg',
            submenu: [{
                name: 'Ver Archivos',
                path: '/ver'
            }]
        }
        ];
        break;
}




export default Menu;