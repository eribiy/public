/**
 * Created by kate on 11.05.17.
 */

var addComment = function() {
    var comment = $("#create-comments-txt").val();
    moment.locale('ru');
    var fullDate = moment().format('D MMMM  YYYY');
    if (comment) {
        $('#new_comment .comment__name').text('Username');
        $('#new_comment .comment__date').text(fullDate);
        $('#new_comment .comment__text').text(comment);
        var new_comment = $('#new_comment').html();
        $("#comments").append(new_comment);
        $("#create-comments-txt").val("");
    }
    return false;
};

$(document).ready(function() {
    $('.create-comments-form').submit(addComment);
    $('#create-comments-txt').keydown(function (e) {
        if (e.ctrlKey && e.keyCode === 13) {
            addComment();
        }
    });
});
