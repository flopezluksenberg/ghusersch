export default class CalendarUtils {
  static formatDate(dateString, language = 'es-ES') {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(date);
  }
}
