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
});
