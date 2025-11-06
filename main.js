$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    
    // Handle form submission
    $('#surveyForm').on('submit', function(e) {
        e.preventDefault();
        
        // Serialize form data
        const formData = $(this).serialize();
        
        // Send data to server
        $.ajax({
            url: '/submit-survey',
            type: 'POST',
            data: formData,
            success: function(response) {
                // Show success message
                $('#responseMessage .alert')
                    .removeClass('alert-danger')
                    .addClass('alert-success')
                    .text(response.message);
                $('#responseMessage').show();
                
                // Reset form
                $('#surveyForm')[0].reset();
                
                // Scroll to message if element exists
                const messageElement = $('#responseMessage');
                if (messageElement.length) {
                    $('html, body').animate({
                        scrollTop: messageElement.offset().top - 100
                    }, 500);
                }
            },
            error: function(xhr, status, error) {
                // Show error message
                $('#responseMessage .alert')
                    .removeClass('alert-success')
                    .addClass('alert-danger')
                    .text('Error al enviar la encuesta. Por favor, intente nuevamente.');
                $('#responseMessage').show();
            }
        });
    });
});