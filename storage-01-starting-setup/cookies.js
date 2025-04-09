const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = {
    name: "Maria",
    age: 22,
  };
  document.cookie = `uid=${userId}; max-age=360`; //it expires in 360 secs
  document.cookie = `user=${JSON.stringify(user)}`;
});
retrBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((i) => {
    return i.trim();
  });
  console.log(data[1].split("=")[1]); //user value
});
