$(document).ready(function() {
    var checkedAmenities = {};

    function updateCheckedAmenities() {
        var amenityList = Object.values(checkedAmenities).join(', ');
        $('.popover h4').text(amenityList);
    }

    $('.popover input[type="checkbox"]').on('change', function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).prop('checked')) {
            checkedAmenities[amenityId] = amenityName;
        } else {
            delete checkedAmenities[amenityId];
        }

        updateCheckedAmenities();
    });

    function updateApiStatusClass() {
        $.get("http://0.0.0.0:5001/api/v1/status/", function(data) {
            if (data.status === "OK") {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        });
    }

    updateApiStatusClass();
});
