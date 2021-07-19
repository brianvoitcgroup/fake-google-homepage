function focusSearchBar() {
  $("#search-bar").css("box-shadow", "0 2px #d3d3d3");
}

function unfocusSearchBar() {
  $("#search-bar").css("box-shadow", "");
}

$("#search-bar > input").on("change textInput input", function () {
  if ($(this).val().length === 0) {
    $(".clear").css("visibility", "hidden");
  } else {
    $(".clear").css("visibility", "visible");
  }
});

$(".clear").click(() => {
  $(".clear").css("visibility", "hidden");
  $("#search-bar > input").val("");
});

$("#search-bar").width($("#logo").width() * 1.2);

$(".lang-select > a").click(function (event) {
  event.preventDefault();
  const lang = $("html").prop("lang");
  if (lang === "en") {
    $("html").prop("lang", "vi");
    $(".lang-select > span").text("Google có các thứ tiếng:");
    $(this).text("Tiếng Anh");
    $("#search-btn > button").eq(0).text("Tìm trên Google");
    $("#search-btn > button").eq(1).text("Xem trang đầu tiên tìm được");
    $(".menu > a").eq(1).text("Hình ảnh");

    $("#country").text("Việt Nam");

    const left = $(".footer-nav #left > a");
    left.eq(0).text("Giới thiệu");
    left.eq(1).text("Quảng cáo");
    left.eq(2).text("Doanh nghiệp");
    left.eq(3).text("Cách hoạt động của Tìm kiếm");

    const right = $(".footer-nav #right > a");
    right.eq(0).text("Bảo mật");
    right.eq(1).text("Điều khoản");
    right.eq(2).text("Cài đặt");
  } else if (lang === "vi") {
    $("html").prop("lang", "en");
    $(".lang-select > span").text("Google offered in:");
    $(this).text("Vietnamese");
    $("#search-btn > button").eq(0).text("Google Search");
    $("#search-btn > button").eq(1).text("I'm feeling lucky");
    $(".menu > a").eq(1).text("Images");

    $("#country").text("Vietnam");

    const left = $(".footer-nav #left > a");
    left.eq(0).text("About");
    left.eq(1).text("Advertising");
    left.eq(2).text("Business");
    left.eq(3).text("How Search works");

    const right = $(".footer-nav #right > a");
    right.eq(0).text("Privacy");
    right.eq(1).text("Terms");
    right.eq(2).text("Settings");
  }
});
