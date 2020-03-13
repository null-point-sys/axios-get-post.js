function loadDoc() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        /* x.innerHTML = "Geolocation is not supported by this browser."; */
      }
    }

    users = []; // para garantizar la impresi?n del namaespace sin n repeticiones
    function showPosition(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat);
      console.log(lon);

      /*var url = "https://4gtmq.sse.codesandbox.io/";
      var obj1 = "48";
      var obj2 = "bbb";
      var obj = { obj1: obj1, obj2: obj2 };
      makeRequest("post", url, obj);*/
    }

 const publicationsContainer = document.querySelector(
        "#publication-container"
      );
      const form = document.querySelector("#publication-search");

      // original de: https://medium.com/walmartlabs/writing-a-graphql-client-in-vanilla-js-d2a09aee7c6c
      /*const getBooksQuery = (keyword) => 
      `{ allBooks(filter: { q:"${keyword}"}) { 
          author 
          title 
          url 
        } }`;*/

      const getpublicationsQuery = (keyword, keyword2) =>
        `{ getPosition(lat: "${keyword}", lon: "${keyword2}") {
          lat
          lon
        } }`;

      // obtener team con query getTeam según nickname Ok
      /*const getpublicationsQuery = keyword =>
        `{ getTeam(nickname: "${keyword}") {
          id
          institution
          nickname
          color
          favorite
        } }`;*/

      // obtener todos Ok:
      /*const getpublicationsQuery = () => `{ teams {
          id
          institution
          nickname
          color
          favorite
        } }`;*/

      const renderPublications = ({ data }) => {
        console.log(data);

        const { getAllPublications = [] } = data;

        while (publicationsContainer.firstChild) {
          publicationsContainer.removeChild(publicationsContainer.firstChild);
        }

        const publicationsFragment = document.createDocumentFragment();
        const publicationsList = document.createElement("ul");

        getAllPublications.forEach(publication => {
          const publicationsListItem = document.createElement("li");
          const publicationsListLink = document.createElement("a");
          publicationsListLink.href = publication.url;
          publicationsListLink.textContent = "Click To View";
          publicationsListItem.textContent = `${publication.institution} - ${
            publication.nickname
          }`;
          publicationsListItem.appendChild(publicationsListLink);
          publicationsList.appendChild(publicationsListItem);
        });
        publicationsFragment.appendChild(publicationsList);
        publicationsContainer.appendChild(publicationsFragment);
      };
      const loadPublications = ev => {
        ev.preventDefault();
        //const keyword = form.elements["search"].value;
        loadDoc();
        const keyword = lat;
        const keyword2 = lon;
        const options = {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            //query: getpublicationsQuery(keyword)
            query: getpublicationsQuery(keyword, keyword2)
          })
        };
        fetch(`https://38r91.sse.codesandbox.io/`, options)
          .then(res => res.json())
          .then(renderPublications);
      };
loadPublications();
