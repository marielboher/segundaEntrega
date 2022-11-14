const interes = 1.20

class Cuota{
  constructor(precio, intereses, cantCuotas){
      this.precio = precio
      this.intereses = intereses
      this.cantCuotas = cantCuotas
  }

  cuotaMensual(){
    if(isNaN(this.cantCuotas)){
      alert("Error en las cuotas ingresadas") 
    }
    return((this.precio * this.intereses) / this.cantCuotas)
  }

}