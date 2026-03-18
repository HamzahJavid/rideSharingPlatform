import { User, Ride, Booking, Request } from "./schema"

export const globalId = {
    idCount: 1,
    rideCount: 1,
    bookingCount: 1,
    requestCount: 1,
}

export const UsersData = [
    new User(globalId.idCount, "Ali Hassan", "ali123", "ali@gmail.com", "03001234567"),
    new User(globalId.idCount, "Sara Khan", "sara123", "sara@gmail.com", "03011234567"),
    new User(globalId.idCount, "Ahmed Raza", "ahmed123", "ahmed@gmail.com", "03021234567"),
    new User(globalId.idCount, "Fatima Malik", "fati123", "fati@gmail.com", "03031234567"),
    new User(globalId.idCount, "Usman Tariq", "usman123", "usman@gmail.com", "03041234567"),
]

export const RidesData = [
    new Ride(globalId.rideCount, 1, "Ali Hassan", "Faisal Town", "Wapda Town", "2026-04-01", "08:00", 2, "cd 70", "03001234567", "assas"),
    new Ride(globalId.rideCount, 2, "Sara Khan", "Johar Town", "Faisla Town", "2026-04-02", "09:00", 5, "toyota", "03011234567", "No smoking"),
    new Ride(globalId.rideCount, 3, "Ahmed Raza", "Gulberg", "Johar Town", "2026-04-03", "10:00", 2, "cd 125", "03021234567", "sdsd"),
    new Ride(globalId.rideCount, 1, "Ali Hassan", "Askari", "Faisal Town", "2026-04-04", "07:00", 2, "cd 70", "03001234567", "abcdef"),
    new Ride(globalId.rideCount, 4, "Fatima Malik", "Faisal Town", "Johar Town", "2026-04-05", "11:00", 5, "corola", "03031234567", "Female passengers only"),
]

export const BookingData = [
    new Booking(globalId.bookingCount, 1, 2),
    new Booking(globalId.bookingCount, 1, 3),
    new Booking(globalId.bookingCount, 2, 4),
    new Booking(globalId.bookingCount, 3, 5),
    new Booking(globalId.bookingCount, 4, 3),
]

export const RequestsData = [
    new Request(globalId.requestCount, 2, "Sara Khan", "Karachi", "Islamabad", "2024-04-06T09:00", "Morning preferred"),
    new Request(globalId.requestCount, 3, "Ahmed Raza", "Lahore", "Karachi", "2024-04-07T08:00", "Need luggage space"),
    new Request(globalId.requestCount, 4, "Fatima Malik", "Islamabad", "Lahore", "2024-04-08T10:00", "Female driver preferred"),
    new Request(globalId.requestCount, 5, "Usman Tariq", "Peshawar", "Islamabad", "2024-04-09T07:00", "Early morning only"),
    new Request(globalId.requestCount, 1, "Ali Hassan", "Multan", "Karachi", "2024-04-10T11:00", "AC required"),
]