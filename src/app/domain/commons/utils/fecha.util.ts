// Calcular días hábiles, validar fechas judiciales, etc.
export class FechaUtil {
  static esDiaHabil(fecha: Date): boolean {
    const dia = fecha.getDay();
    return dia !== 0 && dia !== 6; // No es domingo (0) ni sábado (6)
  }
}
