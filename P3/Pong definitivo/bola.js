
class Bola {
  constructor(ctx){
    // Guarda el contexto del dibujo
    this.ctx = ctx;
    this.size = 5; // Tamaño de la Bola
    this.x_ini = 100; // posicion inicial en x
    this.y_ini = 200; // posicion inicial en y
    this.x = 0; // posicion generica bola en x
    this.y = 0; // posicion generica bola en y
    this.vx_ini = 3; // velocidad inicial bola en x
    this.vy_ini = 3; // velocidad inicial bola en y
    this.vx = 0; // velocidad generica de la bola en x
    this.vy = 0; // velocidad generica de la bola en y
    // Inicializar todo
    this.init();
  }
  draw(){
    // Para dibujar la bola
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.rect(this.x, this.y, this.size, this.size);
    this.ctx.fill();
  }
  init(){
    // Inicializar posicion y velocidad de la bola
    this.x = this.x_ini;
    this.y = this.y_ini;
  }
  update(){
    // Actualiza las posiciones de la bola
    this.x += this.vx;
    this.y += this.vy;
  }
}
