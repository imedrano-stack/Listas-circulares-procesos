function proceso(nombre) {
    this.nombre = nombre
    this.tareas = Math.ceil(Math.random() * 14)
    this.siguiente = null

}
exports.module = proceso