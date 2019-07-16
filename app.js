

/*let nombres=['ryan','joe','david'];

for (let i = 0; i < nombres.length; i++) {

console.log(nombres[i]);
}
*/
/*class Productos {
  constructor( nombre,precio,descripcion) {
    this.nombre=nombre;
    this.precio=precio;
    this.descripcion=descripcion;
  };
} ;

 var obj = new Productos("Laptop Toshiba",436.90,"asus");{
   document.write(obj.nombre );
   document.write(": s/." );
   document.write(obj.precio );
   document.write(obj.descripcion );
 };

var fecha = new  Date();
document.write(fecha.getMinutes());*/


 /*uno=78+3;
document.write(uno);*/

/*n1=30;
n2=30;

document.write(n1==n2 ? "son iguales":"no son iguales");*/

/*function weas(n,m,x){
  var nombre= document.write("Mi nombre es: "+n +" "+ m +" "+ x);
  return nombre;
};
weas("David","Huapaya","Pisconte");*/

/*function NombreApellido(nombre,apellido){
  if (nombre !=null && apellido != null){
     var NombreCompleto= document.write(nombre,apellido);
  }else {
    var NombreCompleto=document.write("Los Datos estan vacios");
  };
  return NombreCompleto;
}

NombreApellido("david","Huapaya");*/
class Producto {
  constructor(Nombre,Precio,Fecha) {
    this.Nombre=Nombre;
    this.Precio=Precio;
    this.Fecha=Fecha;
  }
}

class UI {
  addProducto(product){
       const ProductList=document.getElementById('product-list')
       const element = document.createElement('div');
       element.innerHTML =`
           <div class="card text-center mb-8">
           <div  class="card-body">
               <strong>Producto Name</strong>: ${product.Nombre}
               <strong>Producto Price</strong>: ${product.Precio}
               <strong>Producto Year</strong> : ${product.Fecha}
               <a href="#"  class="btn btn-danger" name="delete">Delete</a>
           </div>
                     </div>

       `;
       ProductList.appendChild(element);


  }
resetForm(){
  document.getElementById('product-form').reset();
}

  deleteProducto(element){
       if (element.name==='delete') {
             element.parentElement.parentElement.parentElement.remove();
             this.Mensaje('Producto Eliminado satisfactoriamente','info');
       }
  }

  Mensaje(message, cssClass){
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass}`;
    div.appendChild(document.createTextNode(message));
    //mostrando en el doom
    const container = document.querySelector('.container');
    const app = document.querySelector('#app');
    container.insertBefore(div, app);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);

  }
}

document.getElementById('product-form')
.addEventListener('submit', function(e){
 const name=document.getElementById('name').value;
 const price=document.getElementById('price').value;
 const year=document.getElementById('year').value;
   const product = new Producto(name,price,year);

   const ui= new UI();

   if (name ==='' || price=== '' || year=== '' ) {
     return ui.Mensaje("complete los campos porfavor",'danger')

   }
   ui.addProducto(product);
   ui.resetForm();
   ui.Mensaje('Producto Agregado satisfactoriamente','success');
   e.preventDefault();
});

document.getElementById('product-list')
.addEventListener('click', function(e){
  const ui= new UI();
  ui.deleteProducto(e.target);

});
