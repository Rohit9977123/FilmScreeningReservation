import FilmScreening from './FilmScreening.js';


const screening = new FilmScreening();
screening.listFilms();
screening.reserveSeat("Inception", "18:00", "John Doe");
screening.checkAvailability("Inception", "18:00");
screening.cancelReservation("Inception", "18:00", "John Doe");
screening.calculateTotalRevenue();
