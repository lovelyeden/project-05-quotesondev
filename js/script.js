(function($) {

  $(function() {
    let lastPage = '';

    //events
    $('#new-quote-button').on('click', getRandomQuote);
    $('#quote-sub').on('submit', postQuote);

    function getRandomQuote(event) {
      event.preventDefault();

      lastPage = document.URL;

      $.ajax({
        method: 'get',
        url:
          api_vars.rest_url +
          'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
      })
        .done(function(data) {
          console.log(data);
          const randomQuote = data[0];
          console.log(randomQuote);

          const $title = data[0].title.rendered;
          const $content = data[0].content.rendered;
          const $quoteSource = data[0]._qod_quote_source;
          const $quoteSourceUrl = data[0]._qod_quote_source_url;

          $('.entry-content').html($content);
          $('.entry-meta .entry-title').html('&mdash; ' + $title + ', ');
          $('.entry-meta .source').html(
            `<a href='${$quoteSourceUrl}'>${$quoteSource}</a>`
          );

          history.pushState(null, null, randomQuote.slug);
        })
        .fail(function(error) {
          console.log(error);
        });
      $(window).on('popstate', function() {
        window.location.replace(lastPage);
      });
    } //end of getRandomQuote
    //To add Post Request
    function postQuote(event) {
      event.preventDefault();
      console.log('form submitted');

      const quoteAuthor = $('#quote-author').val();
      const quotecontent = $('#quote-content').val();
      const quoteSource = $('#quote-source').val();
      const quoteSourceUrl = $('#quote-source-url').val();

      if (quoteAuthor !== '') {
        postAjax();
      }
      function postAjax() {
        $.ajax({
          method: 'post',
          url: api_vars.rest_url + 'wp/v2/posts',
          data: {
            
            title: quoteAuthor,
            content: quotecontent,
            _qod_quote_source: quoteSource,
            _qod_quote_source_url: quoteSourceUrl,
            status: 'pending'
          },
          beforeSend: function(xhr) {
            xhr.setRequestHeader('X-WP-Nonce', api_vars.wpapi_nonce);
          }
        })
          .done(function() {
            console.log('great success');
            $('#quote-sub').slideUp(1000);
          })
          .fail(function() {
            console.log('not great success');
          });
      } //end of Ajax
    } 
  }); //end of doc ready
})(jQuery);
