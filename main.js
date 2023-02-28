const menuHamburguesa = document.getElementById('menu-hamburguesa');
const linea1 = document.getElementById('linea-1');
const linea2 = document.getElementById('linea-2');
const linea3 = document.getElementById('linea-3');
const menuDesplegable = document.getElementById('menu-desplegable');
const botonEnviar = document.getElementById('botoninput');

if (botonEnviar) {
botonEnviar.addEventListener('click', () => {
const nombreMail =document.getElementById('nombre').value;
const eMail =document.getElementById('email').value;
const asuntoMail =document.getElementById('asunto').value;
const contMail =document.getElementById('contenido').value;
		window.open( "mailto:" + escape('javier.mills@example.com')
			 + "?subject=" + escape(asuntoMail)
			 + "&body=" + escape(contMail),'_blank');
})}	
;
menuHamburguesa.addEventListener('click', () => {
  linea1.classList.toggle('rotar-1');
  linea2.classList.toggle('ocultar');
  linea3.classList.toggle('rotar-2');
  menuDesplegable.classList.toggle('mostrar');
});


