function main() {
    console.log("cors-test");

    var request = $.ajax({
	url: "https://api.github.com",
        method: "GET",
        data: null,
        dataType: "json"
    });

    request.done(function (data) {
        console.log(data);
        $('#title').html('Success');
        $('#content').html(JSON.stringify(data, null, 2));
    });
    
    request.fail(function (jqxhr, textStatus, error) {
        console.log(jqxhr);
        $('#title').html('Failure');
        $('#content').html(JSON.stringify(jqxhr, null, 2));
    });
}
