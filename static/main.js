function main() {
    console.log("cors-test");

    var urlToTest = $('#url-field').val();

    var request = $.ajax({
        url: urlToTest,
        method: "GET",
        data: null,
        dataType: "json"
    });

    request.done(function (data) {
        console.log(data);
        $('#title').html('Success');
        $('#content').html(JSON.stringify(data, null, 2));
        $('#content').show();
    });
    
    request.fail(function (jqxhr, textStatus, error) {
        console.log(jqxhr);
        $('#title').html('Failure');
        $('#content').html(JSON.stringify(jqxhr, null, 2));
        $('#content').show();
    });
}
