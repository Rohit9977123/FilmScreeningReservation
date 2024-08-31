import { welcomeMessage } from './helpers.js';

welcomeMessage();

class FilmScreening {
    constructor() {
        this.films = [
            { title: "Inception", showtimes: ["18:00", "21:00"], seatsAvailable: 50 },
            { title: "Interstellar", showtimes: ["17:00", "20:00"], seatsAvailable: 50 },
        ];
        this.reservations = [];
        this.ticketPrice = 10; // Fixed ticket price
    }

    listFilms() {
        this.films.map(film => {
            console.log(`Title: ${film.title}, Showtimes: ${film.showtimes.join(", ")}, Seats Available: ${film.seatsAvailable}`);
        });
    }

    reserveSeat(filmTitle, showtime, customerName) {
        const film = this.films.find(f => f.title === filmTitle && f.showtimes.includes(showtime));
        if (film && film.seatsAvailable > 0) {
            film.seatsAvailable -= 1;
            const reservation = {
                filmTitle,
                showtime,
                seatNumber: 51 - film.seatsAvailable,
                customerName,
            };
            this.reservations.push(reservation);
            console.log("Reservation successful!", reservation);
        } else {
            console.log("No seats available or invalid showtime.");
        }
    }

    cancelReservation(filmTitle, showtime, customerName) {
        const reservationIndex = this.reservations.findIndex(
            r => r.filmTitle === filmTitle && r.showtime === showtime && r.customerName === customerName
        );
        if (reservationIndex !== -1) {
            const [reservation] = this.reservations.splice(reservationIndex, 1);
            const film = this.films.find(f => f.title === reservation.filmTitle && f.showtimes.includes(reservation.showtime));
            if (film) {
                film.seatsAvailable += 1;
                console.log("Reservation cancelled.", reservation);
            }
        } else {
            console.log("Reservation not found.");
        }
    }

    calculateTotalRevenue() {
        const totalRevenue = this.reservations.reduce((sum, reservation) => {
            return sum + this.ticketPrice;
        }, 0);
        console.log("Total Revenue:", totalRevenue);
        return totalRevenue;
    }

    checkAvailability(filmTitle, showtime) {
        const film = this.films.find(f => f.title === filmTitle && f.showtimes.includes(showtime));
        if (film) {
            console.log(`Available seats for ${filmTitle} at ${showtime}: ${film.seatsAvailable}`);
            return film.seatsAvailable;
        } else {
            console.log("Film or showtime not found.");
            return 0;
        }
    }
}

export default FilmScreening;
