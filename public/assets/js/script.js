$('.eatBtn').click((event) => {
    $.ajax({
        type: 'POST',
        url: '/api/eat/' + event.target.dataset.id,
    }).then(() => {
        window.location.href = "/";
    });
});

$('#addBtn').click((event) => {
    $.post('/api/add', { name: $("#burger_name").val() })
    .then(() => {
        window.location.href = "/";
    });
});