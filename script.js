let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];

let bookmarkFormEL = document.getElementById("bookmarkForm");
let siteName = document.getElementById("siteNameInput");
let urlName = document.getElementById("siteUrlInput");
let submitButton = document.getElementById("submitBtn");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");

let uniqueId = 1;
siteName.addEventListener("change", function(event) {
    if (siteName.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});

urlName.addEventListener("change", function(event) {
    if (urlName.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});


function bookmarkaaaaaaAdd(eachBookmark) {

    let listItemOne = document.createElement("li");
    listItemOne.classList.add("list-style");
    bookmarksListEl.appendChild(listItemOne);

    let listDivContainer = document.createElement("div");
    listDivContainer.classList.add("visit-website-container", "d-flex", "flex-row", "justify-content-between");
    listItemOne.appendChild(listDivContainer);

    let labelItem = document.createElement("label");
    labelItem.textContent = eachBookmark.name;
    labelItem.classList.add("list-label");
    listDivContainer.appendChild(labelItem);

    let ancherElement = document.createElement("a");
    ancherElement.href = eachBookmark.url;
    console.log(eachBookmark.url);
    ancherElement.target = "_blank";
    ancherElement.id = eachBookmark.bookmarkId;
    ancherElement.textContent = "visit";
    ancherElement.classList.add("btn", "btn-primary");
    listDivContainer.appendChild(ancherElement);

}
for (let eachBookmark of bookmarks) {
    bookmarkaaaaaaAdd(eachBookmark);
}

function makeBookmark() {
    uniqueId = uniqueId + 1;
    bookmarkUnId = "bookmark" + uniqueId;
    bookmarks[0].bookmarkId = bookmarkUnId;
    bookmarks[0].name = siteName.value;
    bookmarks[0].url = urlName.value;
    for (let eachBookmark of bookmarks) {
        bookmarkaaaaaaAdd(eachBookmark);
    }

}

function validateInput() {
    if (siteName.value === "" && urlName.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.textContent = "Required*";
    } else if (siteName.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else if (urlName.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        makeBookmark();
    }
}

function newFunction(event) {
    event.preventDefault();
    validateInput();
}

bookmarkFormEL.addEventListener("submit", newFunction);