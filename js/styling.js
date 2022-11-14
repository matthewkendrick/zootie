const images = [
  "https://thumbnail.image.rakuten.co.jp/@0_mall/e-zakkamania/cabinet/coordinate/2211/22111010.jpg?_ex=750x750",
  "https://thumbnail.image.rakuten.co.jp/@0_mall/e-zakkamania/cabinet/coordinate/2211/22110921.jpg?_ex=750x750",
  "https://thumbnail.image.rakuten.co.jp/@0_mall/e-zakkamania/cabinet/coordinate/2211/22110918.jpg?_ex=750x750",
  "https://thumbnail.image.rakuten.co.jp/@0_mall/e-zakkamania/cabinet/coordinate/2211/22110917.jpg?_ex=750x750",
  "https://thumbnail.image.rakuten.co.jp/@0_mall/e-zakkamania/cabinet/coordinate/2211/22110911.jpg?_ex=500x500&s=2&r=1",
  "https://thumbnail.image.rakuten.co.jp/@0_mall/e-zakkamania/cabinet/coordinate/2211/22110912.jpg?_ex=500x500&s=2&r=1"
];

$(document).ready(function () {
  let current = 0;
  $("#mirror-content").on("click", function () {
    $(this).css({
      "background-image": `url(${images[++current % images.length]})`
    });
  });
});