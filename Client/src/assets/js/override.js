
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
      /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }
      
      function showSwal(){

      }

      Waves.init();

      

$(document).ready(function(){

  
  $('[data-toggle="project-tooltip"]').tooltip();


  setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 50);
  
  Waves.attach('.menu .list a', ['waves-block']);
  Waves.init();

  $('#content-wyswyg').summernote({
    toolbar: [
        // [groupName, [list of button]]
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['misc',['undo','redo','codeview','help']]
    ]
  });

          //On focus event
          $('.form-control').focus(function () {
            $(this).parent().addClass('focused');
        });
    
        //On focusout event
        $('.form-control').focusout(function () {
            var $this = $(this);
            if ($this.parents('.form-group').hasClass('form-float')) {
                if ($this.val() == '') { $this.parents('.form-line').removeClass('focused'); }
            }
            else {
                $this.parents('.form-line').removeClass('focused');
            }
        });
    
        //On label click
        $('body').on('click', '.form-float .form-line .form-label', function () {
            $(this).parent().find('input').focus();
        });
    
        //Not blank form
        $('.form-control').each(function () {
            if ($(this).val() !== '') {
                $(this).parents('.form-line').addClass('focused');
            }
        });

  
});