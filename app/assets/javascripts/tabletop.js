<script type="text/javascript">
  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AuzoakuvwSsNdDIyYXpmM25UNkt6YmhrN1RjanBHWEE&output=html';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    alert("Successfully processed!")
    console.log(data);
  }
</script>