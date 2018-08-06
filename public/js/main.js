$(function() {

    if ($('textarea#content').length) {
        CKEDITOR.replace('content');
    }
    
    
    $('a.confirmDeletion').on('click', function() {
        if (!confirm('Confirm deletion?')) {
            return false;
        }
        
    });
});