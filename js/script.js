// Start Fetch Sponsors
async function GetCards(currentpage = 1) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    var res = await fetch(`https://api.msp-alazhar.tech/sponsorsClient/get?page=${currentpage}&limit=4`, requestOptions);
    var data = await res.json();
    console.log("Sponsors : ", data);
    document.getElementById('sponsor-grid').innerHTML = "";
    for (let i = 0; i < data.results.length; i++) {
        document.getElementById('sponsor-grid').innerHTML += `
        <div class="sectionOne sponsor-card">
            <img src="${data.results[i].image}" alt="image" width='100%'>
        </div>`;
    }
    if (data.next && data.next.page) {
        document.getElementById('next').style.display = 'block';
    } else {
        document.getElementById('next').style.display = 'none';
    }
    if (currentpage > 1) {
        document.getElementById('previous').style.display = 'block';
    } else {
        document.getElementById('previous').style.display = 'none';
    }

    document.getElementById('next').onclick = () => {
        if (data.next && data.next.page) {
            GetCards(data.next.page);
        }
    };
    document.getElementById('previous').onclick = () => {
        if (data.previous && data.previous.page) {
            GetCards(data.previous.page);
        }
    };
}
GetCards();
// End Fetch Sponsors
// -----------------------------------------------------------------------------------------------------------------------------------------
// Start Fetch Team in Page 'Home'
async function getCardsTeamHome(currentpage = 1) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    var response = await fetch(`https://api.msp-alazhar.tech/teamMembersClient/get?page=${currentpage}&limit=4`, requestOptions);
    var data = await response.json();
    console.log("Teams Home : ", data);
    document.getElementById('GridTeam').innerHTML = "";
    for (let i = 0; i < data.results.length; i++) {
        document.getElementById('GridTeam').innerHTML += `
 <div class="sectionOne participant">
            <img src="${data.results[i].image}" alt="">
            <div class="position">
              <p>${data.results[i].track}</p>

            </div>
            <h3>${data.results[i].name}</h3>
            <div class="icons">
              <span><a href="${data.results[i].behanceOrGithub}"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M7.443 5.35001C8.082 5.35001 8.673 5.40001 9.213 5.54801C9.754 5.64701 10.197 5.84501 10.59 6.09201C10.984 6.34001 11.279 6.68601 11.475 7.13101C11.672 7.57601 11.771 8.12101 11.771 8.71401C11.771 9.40701 11.623 10 11.279 10.445C10.984 10.891 10.492 11.286 9.902 11.583C10.738 11.831 11.377 12.276 11.771 12.87C12.164 13.463 12.41 14.205 12.41 15.046C12.41 15.739 12.262 16.332 12.016 16.827C11.771 17.322 11.377 17.767 10.934 18.064C10.4528 18.3823 9.92083 18.6163 9.361 18.756C8.771 18.905 8.181 19.004 7.591 19.004H1V5.35001H7.443ZM7.049 10.89C7.59 10.89 8.033 10.742 8.377 10.495C8.721 10.248 8.869 9.80201 8.869 9.25801C8.869 8.96101 8.819 8.66501 8.721 8.46701C8.623 8.26901 8.475 8.12001 8.279 7.97201C8.082 7.87301 7.885 7.77401 7.639 7.72501C7.393 7.67501 7.148 7.67501 6.852 7.67501H4V10.891H7.05L7.049 10.89ZM7.197 16.728C7.492 16.728 7.787 16.678 8.033 16.629C8.279 16.579 8.525 16.481 8.721 16.332C8.92138 16.1872 9.08903 16.0019 9.213 15.788C9.311 15.541 9.41 15.244 9.41 14.898C9.41 14.205 9.213 13.71 8.82 13.364C8.426 13.067 7.885 12.919 7.246 12.919H4V16.729L7.197 16.728ZM16.689 16.678C17.082 17.074 17.672 17.272 18.459 17.272C19 17.272 19.492 17.124 19.885 16.877C20.279 16.58 20.525 16.283 20.623 15.987H23.033C22.639 17.173 22.049 18.014 21.263 18.559C20.475 19.053 19.541 19.35 18.41 19.35C17.6864 19.3522 16.9688 19.2179 16.295 18.954C15.6887 18.7266 15.148 18.3529 14.721 17.866C14.2643 17.4106 13.9267 16.8498 13.738 16.233C13.492 15.59 13.393 14.898 13.393 14.106C13.393 13.364 13.492 12.672 13.738 12.028C13.9749 11.4084 14.3252 10.8383 14.771 10.347C15.2201 9.88585 15.7543 9.51604 16.344 9.25801C17.0007 8.99407 17.7022 8.8596 18.41 8.86201C19.246 8.86201 19.984 9.01101 20.623 9.35701C21.263 9.70301 21.754 10.099 22.147 10.693C22.541 11.237 22.837 11.88 23.033 12.573C23.131 13.265 23.18 13.958 23.131 14.749H16C16 15.541 16.295 16.283 16.689 16.679V16.678ZM19.787 11.484C19.443 11.138 18.902 10.94 18.262 10.94C17.82 10.94 17.475 11.04 17.18 11.188C16.885 11.336 16.689 11.534 16.492 11.732C16.3107 11.9232 16.1905 12.1641 16.147 12.424C16.098 12.672 16.049 12.87 16.049 13.067H20.475C20.377 12.325 20.131 11.831 19.787 11.484ZM15.459 6.29001H20.967V7.62601H15.46V6.29001H15.459Z" />
                  </svg></a></span>
              <span><a href="${data.results[i].linktree}"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M13.7361 5.853L17.7411 1.736L20.0661 4.116L15.8661 8.121H21.7741V11.426H15.8371L20.0661 15.534L17.7411 17.868L12.0011 12.099L6.26007 17.868L3.93507 15.543L8.16407 11.435H2.22607V8.121H8.13507L3.93507 4.117L6.25907 1.736L10.2641 5.853V0H13.7361V5.853ZM10.2641 16.159H13.7361V24H10.2641V16.159Z" />
                  </svg></a></span>
              <span><a href="${data.results[i].linkedin}"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"
                    fill="none">
                    <g clip-path="url(#clip0_118_1386)">
                      <path
                        d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_118_1386">
                        <rect width="32" height="32"" fill=" white" />
                      </clipPath>
                    </defs>
                  </svg></a>
                </span>
            </div>
          </div>
        `
    }
}
getCardsTeamHome();
// End Fetch Team in Page 'Home'
// -----------------------------------------------------------------------------------------------------------------------------------------
// Start Fetch Team in Page 'Team'
async function getCardsTeamPage(currentpage = 1) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    var response = await fetch(`https://api.msp-alazhar.tech/teamMembersClient/get?page=${currentpage}&limit=6`, requestOptions);
    var data = await response.json();
    console.log("Team Page : ", data);
    document.getElementById("teams").innerHTML = "";

    for (let i = 0; i < data.results.length; i++) {
        let cardHTML;
        if (i % 2 === 0) {
            // Normal structure for even-indexed cards
            cardHTML = `
                <div class="card1">
                    <div class="image">
                        <img src="${data.results[i].image}" alt="image">
                    </div>
                    <div class="texts">
                        <h3>${data.results[i].name}</h3>
                        <p>${data.results[i].track}</p>
                        <p class="paragraph2">${data.results[i].description}</p>
                    </div>
                    <div class="icons">
                        <a href="${data.results[i].facebook}">
                            <i class="fa-brands fa-facebook fa-xl" style="color: #050505;"></i>
                        </a>
                        <a href="${data.results[i].linkedin}">
                            <i class="fa-brands fa-linkedin fa-xl" style="color: #000000;"></i>
                        </a>
                        <a href="${data.results[i].behanceOrGithub}">
                            <i class="fa-brands fa-github fa-xl" style="color: #050505;"></i>
                        </a>
                    </div>
                </div>
            `;
        } else {
            // Reversed structure for odd-indexed cards
            cardHTML = `
                <div class="card1 reverse">
                    <div class="icons">
                        <a href="${data.results[i].facebook}">
                            <i class="fa-brands fa-facebook fa-xl" style="color: #050505;"></i>
                        </a>
                        <a href="${data.results[i].linkedin}">
                            <i class="fa-brands fa-linkedin fa-xl" style="color: #000000;"></i>
                        </a>
                        <a href="${data.results[i].behanceOrGithub}">
                            <i class="fa-brands fa-github fa-xl" style="color: #050505;"></i>
                        </a>
                    </div>
                    <div class="texts">
                        <h3>${data.results[i].name}</h3>
                        <p>${data.results[i].track}</p>
                        <p class="paragraph2">${data.results[i].description}</p>
                    </div>
                    <div class="image">
                        <img src="${data.results[i].image}" alt="image">
                    </div>
                </div>
            `;
        }
        document.getElementById("teams").innerHTML += cardHTML;
    }

    if (data.next && data.next.page) {
        document.getElementById('nextteam').style.display = 'block';
    } else {
        document.getElementById('nextteam').style.display = 'none';
    }

    if (currentpage > 1) {
        document.getElementById('previousteam').style.display = 'block';
    } else {
        document.getElementById('previousteam').style.display = 'none';
    }

    document.getElementById('nextteam').onclick = () => {
        if (data.next && data.next.page) {
            getCardsTeamPage(data.next.page);
        }
    };

    document.getElementById('previousteam').onclick = () => {
        if (data.previous && data.previous.page) {
            getCardsTeamPage(data.previous.page);
        }
    };
}
getCardsTeamPage();
// End Fetch Team in Page 'Team'
// -----------------------------------------------------------------------------------------------------------------------------------------
// Start Fetch Blogs
async function getCardsBlogs(currentpage = 1) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    var res = await fetch(`https://api.msp-alazhar.tech/blogsClient/get?page=${currentpage}&limit=5`, requestOptions);
    var data = await res.json();
    console.log("Blogs : ", data);

    document.getElementById('group1').innerHTML = "";
    document.getElementById('group2').innerHTML = "";

    for (let i = 0; i < data.results.length; i++) {
        let cardHTML = `
            <div class="card mb-3 p-3" style="position:relative;">
                <div class="box">
                    <b>${new Date(data.results[i].createdAt).getDate()}</b>
                    <p>${new Date(data.results[i].createdAt).toLocaleString('en-US', { month: 'short' })}</p>
                </div>
                <img src="${data.results[i].image}" class="card-img-top" alt="Blog image">
                <div class="card-body">
                    <h5 class="card-title">${data.results[i].name}</h5>
                    <p class="card-text">${data.results[i].description.length > 100 ? data.results[i].description.slice(0, 100) + ' ...' : data.results[i].description}</p>
                    <hr class="mt-4">
                    <div style="display:flex;" class="mt-4">
                        <div class="icons" style="display: flex;">
                            <div class="circle">
                                <a href="${data.results[i].linkedin}"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <div class="circle">
                                <a href="${data.results[i].facebook}"><i class="fa-brands fa-facebook-f"></i></a>
                            </div>
                            <div class="circle">
                                <a href="${data.results[i].instagram}"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                            <div class="circle">
                                <a href="${data.results[i].twitter}"><i class="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        if (i % 2 != 0) {
            document.getElementById('group1').innerHTML += cardHTML;
        } else {
            document.getElementById('group2').innerHTML += cardHTML;
        }
    }
    if (data.next && data.next.page) {
        document.getElementById('nextBlog').style.display = 'block';
    }
    else {
        document.getElementById('nextBlog').style.display = 'none';
    }
    if (currentpage > 1) {
        document.getElementById('previousBlog').style.display = 'block';
    }
    else {
        document.getElementById('previousBlog').style.display = 'none';
    }
    document.getElementById('nextBlog').onclick = () => {
        if (data.next && data.next.page) {
            getCardsBlogs(data.next.page)
        }
    }

    document.getElementById('previousBlog').onclick = () => {
        if (data.previous && data.previous.page) {
            getCardsBlogs(data.previous.page)
        }
    }
}
getCardsBlogs();
// End Fetch Blogs


// Form Excel [0]
const scriptURLs = 'https://script.google.com/macros/s/AKfycbxyCpak5TrAoy0Rv4gkD9PYlFvFKlkIZS8zk3HU4sXjQr7DEl0KtYNIxLONimHTFAE/exec';
const formHome = document.forms[0];

formHome.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURLs, { method: 'POST', body: new FormData(formHome) })
        .then(response => showCustomAlertHome("You have successfully sent your question"))
        .catch(error => console.error('Error!', error.message));
    console.log("Submit")
    formHome.reset();

});
function showCustomAlertHome(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alertBox.classList.remove('hidden');

    document.body.style.overflow = 'hidden';

    document.getElementById('close-alert').addEventListener('click', () => {
        alertBox.classList.add('hidden');

        document.body.style.overflow = 'auto';
    });
}
// Form Excel [1]
const scriptURL = 'https://script.google.com/macros/s/AKfycby-3FY0-GaUuzFm_IttKW4pMoFnELeMXpmGYhC-Yp8aU6o064_-5d6kv1PGRifBuww/exec';
const form = document.forms[1];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => showCustomAlert("You have successfully sent your question"))
        .catch(error => console.error('Error!', error.message));
    console.log("Submit")
    form.reset();
});
function showCustomAlert(message) {
    const alertBox = document.getElementById('custom-alert-contact');
    const alertMessage = document.getElementById('alert-message-contact');
    alertMessage.textContent = message;
    alertBox.classList.remove('hidden');

    document.body.style.overflow = 'hidden';

    document.getElementById('close-alert-contact').addEventListener('click', () => {
        alertBox.classList.add('hidden');

        document.body.style.overflow = 'auto';
    });
}

// Button Search Mobile & tablet
const suggestionsMobileData = [
    "Committees", "UX-UI", "Flutter", "python", "Graphic Design", "Back-End",
    "Front-End", "PR", "HR", "Marketing", "Developers", "Techoons",
    "Logistics", "Media", "Team", "Sponsors", "Features"
];

function showSuggestions(query, suggestionsContainer, inputField) {
    suggestionsContainer.innerHTML = '';

    if (query.length > 0) {
        const filteredSuggestions = suggestionsMobileData.filter(item =>
            item.toLowerCase().includes(query)
        );

        filteredSuggestions.forEach(suggestion => {
            const div = document.createElement('div');
            div.textContent = suggestion;
            div.classList.add('suggestion-item');
            div.addEventListener('click', () => {
                inputField.value = suggestion;
                suggestionsContainer.innerHTML = '';
                suggestionsContainer.style.display = 'none';
                performSearch(inputField);
            });
            suggestionsContainer.appendChild(div);
        });
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}
function performSearch(inputField) {
    const searchTerm = inputField.value.toLowerCase();
    highlightItems(searchTerm);
}
function highlightItems(term) {
    const selectors = ['.sections', '.headings', '.allCommittees', '.non_tect'];
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(item => {
            const text = item.querySelector('.text, #bestStudent, .infoTitle, .non-tech-title')?.innerText.toLowerCase() || '';
            if (text.includes(term)) {
                item.classList.add('highlight');
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                item.classList.remove('highlight');
            }
        });
    });
}
const searchInputMobile = document.getElementById('searchBtns');
const suggestionsMobileContainer = document.getElementById('suggestionss');

searchInputMobile.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    showSuggestions(query, suggestionsMobileContainer, searchInputMobile);
});

document.getElementById('searchButtons').addEventListener('click', () => performSearch(searchInputMobile));

searchInputMobile.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        performSearch(searchInputMobile);
    }
});
const searchInputDesktop = document.getElementById('searchBtn');
const suggestionsDesktopContainer = document.getElementById('suggestions');

searchInputDesktop.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    showSuggestions(query, suggestionsDesktopContainer, searchInputDesktop);
});

document.getElementById('searchButton').addEventListener('click', () => performSearch(searchInputDesktop));

searchInputDesktop.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        performSearch(searchInputDesktop);
    }
});

// document.addEventListener("contextmenu", function (event) {
//     event.preventDefault();
// });





















