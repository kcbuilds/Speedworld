
// *** Read More Js for Bike Brand=============================

const readMoreBtn = document.querySelector(".more-btn");
const text = document.querySelector(".more-brand");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "More Brand") {
    readMoreBtn.innerText = "Less Brand";
  } else {
    readMoreBtn.innerText = "More Brand";
  }
});

// *** End Read More Js for Bike Brand=============================



// *** Read More Js for Bike Detail =============================

const moretext = document.querySelector(".btnnn");
const text1 = document.querySelector(".more-about");

moretext.addEventListener("click", (e) => {
  text1.classList.toggle("showtext");
  if (moretext.innerText === "Read More") {
    moretext.innerText = "Less More";
  } else {
    moretext.innerText = "Read More";
  }
});

// *** End Read More Js for Bike Detail =============================



// *** Read More Js for Table 1 =============================

const spec_btn_1 = document.querySelector(".spec-btn-more");
const text2 = document.querySelector(".spec-more-1");

spec_btn_1.addEventListener("click", (e) => {
  text2.classList.toggle("show-spec-1");
  if (spec_btn_1.innerText === "Read More") {
    spec_btn_1.innerText = "Less More";
  } else {
    spec_btn_1.innerText = "Read More";
  }
});

// *** End Read More Js for Table 1 =============================



// *** Read More Js for Table 2 =============================

const spec_btn_2 = document.querySelector(".btn-more-2");
const text3 = document.querySelector(".spec-more-2");

spec_btn_2.addEventListener("click", (e) => {
  text3.classList.toggle("show-spec-2");
  if (spec_btn_2.innerText === "Read More") {
    spec_btn_2.innerText = "Less More";
  } else {
    spec_btn_2.innerText = "Read More";
  }
});

// *** End Read More Js for Table 2 =============================



// *** Read More Js for Table 3 =============================

const spec_btn_3= document.querySelector(".btn-more-3");
const text4 = document.querySelector(".spec-more-3");

spec_btn_3.addEventListener("click", (e) => {
  text4.classList.toggle("show-spec-3");
  if (spec_btn_3.innerText === "Read More") {
    spec_btn_3.innerText = "Less More";
  } else {
    spec_btn_3.innerText = "Read More";
  }
});

// *** End Read More Js for Table 2 =============================