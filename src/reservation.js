function reservationPage(div) {
    const reservations = document.createElement("div");
    reservations.classList.add("seat-reserve-confirmation");
    const seatReserved = document.createElement("div");

    const form = document.createElement("div");
    form.classList.add("reservation-form");    
    const nameSpace = document.createElement("input");
    nameSpace.setAttribute("type", "text");
    nameSpace.setAttribute("placeholder", "Name");
    nameSpace.setAttribute("name", "Fullname");
    nameSpace.setAttribute("id", "name");
    form.appendChild(nameSpace);

    
    const emailSpace = document.createElement("input");
    emailSpace.setAttribute("type", "email");
    emailSpace.setAttribute("placeholder", "you@gmail.com");
    emailSpace.setAttribute("name", "email");
    emailSpace.setAttribute("id", "email");
    form.appendChild(emailSpace);

    const dateWrapper = document.createElement("div");
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.textContent = "Expected Day of Visit";
    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("name", "dateOfReservation");
    date.setAttribute("id", "date");
    dateWrapper.appendChild(dateLabel);
    dateWrapper.appendChild(date);
    form.appendChild(dateWrapper);

    const timeWrapper = document.createElement("div");
    const timeLabel = document.createElement("label");
    timeLabel.textContent = "Expected time of Visit";
    timeLabel.setAttribute("for", "time")
    const time = document.createElement("input");
    time.setAttribute("type", "time");
    time.setAttribute("name", "time");
    time.setAttribute("id", "time");
    timeWrapper.appendChild(timeLabel);
    timeWrapper.appendChild(time);
    form.appendChild(timeWrapper);

    const guestWrapper = document.createElement('div');
    const guestLabel = document.createElement("label")
    guestLabel.setAttribute("for", "numberOfGuests");
    guestLabel.textContent = "Number of Guests";
    const numberOfGuests = document.createElement("input");
    numberOfGuests.setAttribute("type", "num");
    numberOfGuests.setAttribute("name", "numberOfGuests");
    numberOfGuests.setAttribute("id", "numberOfGuests");
    guestWrapper.appendChild(guestLabel);
    guestWrapper.appendChild(numberOfGuests);
    form.appendChild(guestWrapper);

    const ReserveSeatBtn = document.createElement("button");
    ReserveSeatBtn.textContent = "Make Reservation";
    form.appendChild(ReserveSeatBtn);

    div.appendChild(form);

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Go Back";
    cancelBtn.classList.add("cancel-btn");
    seatReserved.textContent = "Your seat is successfully reserved";
    reservations.appendChild(seatReserved);
    reservations.appendChild(cancelBtn);
    reservations.classList.add("inactive");
    div.appendChild(reservations);     


    function seatReserve() {
        form.classList.add("inactive");
        reservations.classList.remove("inactive");
        reservations.classList.add("active-tab");
    }

    function exitReservedSeatPage() {
        form.classList.remove("inactive");
        reservations.classList.remove("active-tab");
        reservations.classList.add("inactive");
    }


    ReserveSeatBtn.addEventListener("click", seatReserve);
    cancelBtn.addEventListener("click", exitReservedSeatPage);
}

export { reservationPage };