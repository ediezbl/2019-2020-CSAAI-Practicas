class Raqueta{
  constructor(ctx){
    // guardar el contexto
    this.ctx = ctx;
    // Tamaño de la raqueta
    this.width = 10;
    this.height = 40;
    // Posicion inicial
    this.x_ini = 50;
    this.y_ini = 100;
    // Velocidad iniciales
    this.v_ini = 3;
    // Velocidad variable inicialmente a 0
    this.v = 0;
    // Inicializador
    this.init();
  }
  init(){
    // Establece la posicion inicial de las raquetas
    this.x = this.x_ini;
    this.y = this.y_ini;
  }
  update(){
    // Actualiza la posicion de la bola
    this.y += this.v;
  }
  draw(){
    // Dibujar las raquetas
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fill();
  }
}
