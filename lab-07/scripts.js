async function loadObject(id) {
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  response = await fetch(url);
  return response.json();
}

function buildArticleFromData(obj) {
  const article = document.createElement("article");
  const title = document.createElement("h2");
  const primaryImageSmall = document.createElement("img");
  const objectInfo = document.createElement("p");
  const objectName = document.createElement("span");
  const objectDate = document.createElement("span");
  const medium = document.createElement("p");

  title.textContent = obj.title;
  primaryImageSmall.src = obj.primaryImageSmall;
  primaryImageSmall.alt = obj.title;
  objectName.textContent = obj.objectName;
  objectDate.textContent = `, ${obj.objectDate}`;
  medium.textContent = obj.medium;

  article.appendChild(title);
  article.appendChild(primaryImageSmall);
  article.appendChild(objectInfo);
  article.appendChild(medium);

  objectInfo.appendChild(objectName);
  if(obj.objectDate) {
    objectInfo.appendChild(objectDate);
  }

  return article;
}

async function insertArticle(id) {
  obj = await loadObject(id);
  article = buildArticleFromData(obj);
  results.appendChild(article);
}

async function loadSearch(query) {
  let baseURL = `https://collectionapi.metmuseum.org/public/collection/v1/search`;
  response = await fetch(`${baseURL}?hasImages=true&q=${query}`);
  return response.json();
}

async function doSearch() {
  const result = await loadSearch(query.value);
  result.objectIDs.forEach(insertArticle);
}
