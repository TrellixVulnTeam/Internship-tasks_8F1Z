let storeTable;

const storeDataFetch = () => {
    storeTable = $('#storeTable').DataTable({
        ajax: {
            type: "POST",
            url: "/stores/storeDataFetchApi/",
            data: null,
            dataSrc: "",
            dataType: "json"
        },
        columns: [
            { data: "StoreName", name: "StoreName" },
            {
                data: "LogoFilePath",
                render: function (data) {
                    return '<img src="/Login_v15/images/' + data + '" height="50" width="90">';
                }
            },
            { data: "Address", name: "Address" },
            {
                data: "Status", name: "Status",
                render: function (data) {
                    if (data) {
                        return '<span class="badge" style="background-color: #67B644;">Active</span>';
                    }
                    else {
                        return '<span class="badge" style="background-color: #FF6B6B;">InActive</span>';
                    }

                }
            },
            {
                data: {
                    "id": "_id",
                    "storeName": "StoreName",
                    "city": "City",
                    "state": "State",
                    "country": "Country",
                    "postalCode": "PostalCode",
                    "address": "Address",
                    "logo": "LogoFilePath",
                    "status": "Status"
                },
                render: function (full) {
                    console.log(full);
                    return '<div class="d-flex flex-row"><button type="button" class="btn btn-success me-3" data-bs-toggle="modal" data-bs-target="#editModal" data-id="' + full._id + '" data-storename="' + full.StoreName + '" data-city="' + full.City + '" data-state="' + full.State + '" data-country="' + full.Country + '" data-postalcode="' + full.PostalCode + '" data-address="' + full.Address + '"  data-status="' + full.Status + '" data-logo="' + full.LogoFilePath + '">Edit</button> <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-id="' + full._id + '">Delete</button></div>';
                }
            }
        ]
    });
};

$('#editModal').on('show.bs.modal', function (event) {
    let id = $(event.relatedTarget).data('id');
    let storeName = $(event.relatedTarget).data('storename');
    let city = $(event.relatedTarget).data('city');
    let state = $(event.relatedTarget).data('state');
    let country = $(event.relatedTarget).data('country');
    let postalCode = $(event.relatedTarget).data('postalcode');
    let address = $(event.relatedTarget).data('address');
    let logo = $(event.relatedTarget).data('logo');
    let status = $(event.relatedTarget).data('status');
    $('#update').attr('onclick', 'updateStoreBtn("' + id + '");');
    $('#storeName').val(storeName);
    $('#city').val(city);
    $('#state').val(state);
    $('#country').val(country);
    $('#postalCode').val(postalCode);
    $('#address').val(address);
    if (status) {
        $('#status').prop('checked', true);
        $('#status').val("on");
    }
    else {
        $('#status').prop('checked', false);
    }
});

$('#status').change(
    function () {
        if (this.checked) {
            $("#status").val("on");
        }
        else {
            $("#status").val("");
        }
    });

const updateStoreBtn = (id) => {
    let s;
    if($('#status').val()=="on"){
        s=true;
    }
    else{
        s=false;
    }
    let storeUpdate = {
        "id": id,
        "storeName":$('#storeName').val(),
        "city":$('#city').val(),
        "state":$('#state').val(),
        "country":$('#country').val(),
        "postalCode":$('#postalCode').val(),
        "address":$('#address').val(),
        "logo":$('#logo').files,
        "status":s,
    };
    $.ajax({
        type: "POST",
        url: "/stores/updateStoreApi/",
        data: JSON.stringify(
            storeUpdate
        ),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        cache: false,
        success: function (data) {
            if (data) {
                $('#editModal').modal('hide').data('bs.modal', null);
                storeTable.ajax.reload(null, false);
            }
        },
        error: function () {
            alert("error");
        }
    });
};

$('#deleteModal').on('show.bs.modal', function (event) {
    let id = $(event.relatedTarget).data('id');
    $('#delete').attr('onclick', 'deleteStoreBtn("' + id + '");');
});

const deleteStoreBtn = (id) => {
    let idDelete = { "id": id };
    $.ajax({
        type: "POST",
        url: "/stores/deleteStore/",
        data: JSON.stringify(
            idDelete
        ),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        cache: false,
        success: function (data) {
            if (data) {
                $('#deleteModal').modal('hide').data('bs.modal', null);
                storeTable.ajax.reload(null, false);
            }
        },
        error: function () {
            alert("error");
        }
    });
};