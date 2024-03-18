console.log("loaded");

const sortByNewest = () => {
  const ul = document.getElementById("books");

  Array.from(ul.getElementsByClassName("bookItem"))
    .sort((a, b) => {
      const number = a.id;
      const rating2 = b.id;
      return rating2 - number;
    })
    .forEach((li) => ul.appendChild(li));
};

const sortByRating = (name) => {
  const ul = document.getElementById(name);

  Array.from(ul.getElementsByClassName("bookItem"))
    .sort((a, b) => {
      const rating = Number(
        a
          .getElementsByClassName("rating")[0]
          .textContent.split(" ")[1]
          .split("/")[0]
      );

      const rating2 = Number(
        b
          .getElementsByClassName("rating")[0]
          .textContent.split(" ")[1]
          .split("/")[0]
      );

      return rating2 - rating;
    })
    .forEach((li) => ul.appendChild(li));
};
