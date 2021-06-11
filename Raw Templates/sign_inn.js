<!--selector: MasumBhai-->
$(document).ready(function () {
    $(".w_button").on("click", function () {
        $(".s_i_modal").toggleClass("s_i_modal_anim");
        $(".y_s_i_content").toggleClass("y_s_i_content_anim");
        $(".w_s_i_content").toggleClass("w_s_i_content_anim");
        $(".w_s_u_content").toggleClass("w_s_u_content_anim");
        $(".y_s_u_content").toggleClass("y_s_u_content_anim");
        return false;
    });
});

