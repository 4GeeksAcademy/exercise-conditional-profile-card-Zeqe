import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  const name = variables.name == null ? "Nombre" : variables.name;
  const lastName = variables.lastName == null ? "Apellido" : variables.lastName;
  const role = variables.role == null ? "Tu rol" : variables.role;
  const country = variables.country == null ? "País" : variables.country;
  const city = variables.city == null ? "Ciudad" : variables.city;

  // Uso de las URLs de las redes sociales
  const twitterURL = variables.twitter
    ? `https://twitter.com/${variables.twitter}`
    : "#";
  const githubURL = variables.github
    ? `https://github.com/${variables.github}`
    : "#";
  const linkedinURL = variables.linkedin
    ? `https://linkedin.com/in/${variables.linkedin}`
    : "#";
  const instagramURL = variables.instagram
    ? `https://instagram.com/${variables.instagram}`
    : "#";

  // Actualización del contenido del DOM
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
                ${cover}
              <img src="${variables.avatarURL}" class="photo" />
              <h1>${name} ${lastName}</h1>
              <h2>${role}</h2>
              <h3>${city}, ${country}</h3>
              <ul class=${variables.socialMediaPosition}>
                <li><a href="${twitterURL}"><i class="fab fa-twitter"></i></a></li>
                <li><a href="${githubURL}"><i class="fab fa-github"></i></a></li>
                <li><a href="${linkedinURL}"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="${instagramURL}"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </div>
        `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://scontent.flpg2-1.fna.fbcdn.net/v/t1.18169-9/10399725_1141579402554157_1105293762462881588_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=b895b5&_nc_eui2=AeFZgiiscbo491VUAa3DfnQeSDnCU-iMAChIOcJT6IwAKB9L7sqFcS7YeTuh7mp7NKqL5VgUD4cdWroU3d1MT84n&_nc_ohc=960w95yuH5IQ7kNvgHX7P1W&_nc_ht=scontent.flpg2-1.fna&oh=00_AYDo8qQRSE6GzGrwvd9O14gTxqGlE2MTNt0edB5jsMG-5Q&oe=670079F9",
    // this is the url for the profile avatar
    avatarURL:
      "https://scontent.flpg2-1.fna.fbcdn.net/v/t39.30808-6/397369067_7145939455451425_6731603154971288569_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF6-fGGGa2Z-LHh0KbtKLD05HJZKxOdWQDkclkrE51ZAHJJwWHkHCaEHc-khP3T2btx4AD3a4Q2_Q1LR2lY3DYN&_nc_ohc=bL-lWok0XYkQ7kNvgErtdBE&_nc_ht=scontent.flpg2-1.fna&_nc_gid=AXQIjcYI5OtmLdmWfPw8GkT&oh=00_AYD-jQgrBzsygqugG1NALKUi-xQmStBwz-qLONoDdgplrQ&oe=66DED252",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
