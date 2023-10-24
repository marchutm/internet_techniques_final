
  const button = document.querySelector(".comment-button");
  const commentsSection = document.getElementById("comments");
  button.addEventListener("click", e => {
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    if (!name || !comment) {
      alert("Błąd: Proszę podać imię i treść komentarza.");
    } else {
      const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth() + 1; // zero indexed
		const day = date.getDate();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		commentsSection.innerHTML += `<p>  <em>(${year}-${month}-${day} ${hours}:${minutes}:${seconds}) </em><span>${name}</span>: ${comment}</p>`;


    }
  });