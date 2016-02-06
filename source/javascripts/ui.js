// Twitter Widget
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-70685955-1', 'auto');
ga('send', 'pageview');
// Modals
$('.thumbnail').click(function(){
   $('.modal').hide();
   $('body').addClass('modal--open');
   $('#'+$(this).data('id')).fadeToggle();
});
$('.modal__close-btn').click(function(){
  $(this).closest('.modal').fadeToggle();
  $('body').removeClass('modal--open');
});
$(document).on( 'keydown', function ( e ) {
  if (e.keyCode === 27) {
    $('.modal').hide();
    $('body').removeClass('modal--open');
  }
});
