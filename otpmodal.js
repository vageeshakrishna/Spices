const otprequest = document.querySelector("#getOtp");
const otpmodel = document.querySelector(".otp-field");
const closemodal = document.querySelector(".close");
otprequest.addEventListener("click", () => {
  otpmodel.classList.add("open");
});
closemodal.addEventListener("click", () => {
  otpmodel.classList.remove("open");
});
