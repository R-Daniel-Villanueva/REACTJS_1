
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
 constructor(props) {//props propiedades de las clases de react
   super(props);
   this.state = { liked: false };
 }
//[] si el render fue llamado entra en este metodo 
 render() {//cada vez que se cree un componente en el html lee el html y el js y lo pinta
   if (this.state.liked) {
    //return 'You liked this.';
    return e('button',{ onClick: () => this.setState({ liked: false }) },'Dislike');
   }

   return e(
     'button',
     { onClick: () => this.setState({ liked: true }) },
     'Like'                             //aqui hace un render []
   );
 }
}
//codigo del DOMV
const domContainer = document.querySelector('#like_button_container');//#id del elemento
ReactDOM.render(e(LikeButton), domContainer);
//                   nombre     hacia donde