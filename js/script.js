const sectionNotifications = document.getElementById("sectionNotifications");
const headerCounting = document.querySelector(".headerCounting");

class Notifications {
    constructor(STATE, USER, USERPHOTO, NOTI, POST, GROUP, IMG, IMGPROP, MESSAGE, TIME) {
        this.state = STATE;
        this.user = USER;
        this.userPhoto = USERPHOTO;
        this.noti = NOTI;
        this.post = POST;
        this.group = GROUP;
        this.img = IMG;
        this.imgProp = IMGPROP;
        this.message = MESSAGE;
        this.time = TIME;
    }
}

const noti1 = new Notifications("unread", "Mark Webber", "./assets/images/avatar-mark-webber.webp", "reacted to your recent post", "My first tournament today!", "", "", "", "", "1m ago");

const noti2 = new Notifications("unread", "Angela Gray", "./assets/images/avatar-angela-gray.webp", "followed you", "", "", "", "", "", "5m ago");

const noti3 = new Notifications("unread", "Jacob Thompson", "./assets/images/avatar-jacob-thompson.webp", "has joined your group", "", "Chess Club", "", "", "", "1 day ago");

const noti4 = new Notifications("", "Rizky Hasanuddin", "./assets/images/avatar-rizky-hasanuddin.webp", "sent you a private message", "", "", "", "", "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.", "5 days ago");

const noti5 = new Notifications("", "Kimberly Smith", "./assets/images/avatar-kimberly-smith.webp", "commented on your picture", "", "", "./assets/images/image-chess.webp", "marginDiv", "", "1 week ago");

const noti6 = new Notifications("", "Nathan Peterson", "./assets/images/avatar-nathan-peterson.webp", "reacted to your recent post ", "5 end-game strategies to increase your win rate", "", "", "", "", "2 weeks ago");

const noti7 = new Notifications("", "Anna Kim", "./assets/images/avatar-anna-kim.webp", "left the group", "", "Chess Club", "", "", "", "2 weeks ago");


const database = [noti1, noti2, noti3, noti4, noti5, noti6, noti7];
const notifications = [];
database.forEach(e => {
    notifications.push(e)
})


notifications.forEach(e => {
    sectionNotifications.innerHTML += `
    <div class="notification ${e.state}">
      <img class="userProfilePicture" src="${e.userPhoto}" alt="userProfilePicture">

      <div class="notificationTextContainer">
        <div class="notificationText ${e.imgProp}">
          <span id="user" class="notificationText userHover">${e.user} </span>${e.noti}
          
          <span class="notificationText post">${e.post}</span>
          <span class="notificationText group">${e.group}</span>
          <img class="imageNotif" src="${e.img}">
          <img class="unreadDot" src="./assets/images/dot.svg">
        </div>
        
        <span id="time" class="notificationText">${e.time}</span>

        <p class="message">
          ${e.message}
        </p>
      </div>
    </div>
    `
})


const notification = document.querySelectorAll(".notification");
const unreadDot = document.querySelectorAll(".unreadDot");
const marginDiv = document.querySelectorAll(".marginDiv");
const boxMessage = document.querySelectorAll(".message");
const btn = document.getElementById("btn");
const unread = document.querySelectorAll(".unread")
headerCounting.innerHTML = unread.length

for (let i = 0; i < notifications.length; i++) {
    //red dot
    if (notification[i].classList.contains("unread")) {
        unreadDot[i].style.opacity = "1";
    }

    //empty box delete
    if (boxMessage[i].innerText == "") {
        boxMessage[i].remove();
    };

    //click on the notification remove unread
    notification[i].addEventListener("click", () => {
        notification[i].classList.remove("unread");
        unreadDot[i].style.opacity = "0";
        const unread = document.querySelectorAll(".unread")
        headerCounting.innerHTML = unread.length

        
        if (headerCounting.textContent == "0") {
            btn.innerHTML = "Mark all as unread"
        }
    })



}
//add text margin right
marginDiv.forEach(e => {
    e.classList.add("marginRight");
});

// read/unread button 
btn.addEventListener("click", () => {
    if (btn.textContent === "Mark all as read") {
        for (let i = 0; i < notification.length; i++) {
            notification[i].classList.remove("unread");
            unreadDot[i].style.opacity = "0";
            btn.innerHTML = "Mark all as unread";
            const unread = document.querySelectorAll(".unread")
            headerCounting.innerHTML = unread.length
        }

    } else {
        for (let i = 0; i < notification.length; i++) {
            notification[i].classList.add("unread");
            unreadDot[i].style.opacity = "1";
            btn.innerHTML = "Mark all as read"
            const unread = document.querySelectorAll(".unread")
            headerCounting.innerHTML = unread.length
        }
    }
})
