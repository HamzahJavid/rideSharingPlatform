import { globalId } from "./dummyData"

export class User {
    constructor(userid = globalId.idCount, username = "", password = "", email = "", pnumber = "") {
        globalId.idCount++
        this.userid = userid
        this.username = username
        this.password = password
        this.email = email
        this.pnumber = pnumber
    }
}

export class Ride {
    constructor(
        rideid = globalId.rideCount,
        driverid = "",
        driverName = "",
        from = "",
        to = "",
        date = "",
        time = "",
        seats = 0,
        vehicleType = "",
        contact = "",
        notes = ""
    ) {
        globalId.rideCount++
        this.rideid = rideid
        this.driverid = driverid
        this.driverName = driverName
        this.from = from
        this.to = to
        this.date = date
        this.time = time
        this.seats = seats
        this.vehicleType = vehicleType
        this.contact = contact
        this.notes = notes
    }
}

export class Booking {
    constructor(
        bookingid = globalId.bookingCount,
        rideid = "",
        passengerid = "",
    ) {
        globalId.bookingCount++
        this.bookingid = bookingid
        this.rideid = rideid
        this.passengerid = passengerid
    }
}

export class Request {
    constructor(
        requestid = globalId.requestCount,
        passengerid = "",
        passengerName = "",
        from = "",
        to = "",
        departureTime = "",
        notes = "",
        status = "pending"
    ) {
        globalId.requestCount++
        this.requestid = requestid
        this.passengerid = passengerid
        this.passengerName = passengerName
        this.from = from
        this.to = to
        this.departureTime = departureTime
        this.notes = notes
        this.status = status
    }
}