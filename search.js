const search = instantsearch({
  appId: 'latency',
  apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
  indexName: 'movies',
});

search.addWidget({
  init: function(opts) {
    const helper = opts.helper;
    const input = document.querySelector('#searchBox');
    input.addEventListener('input', function(e) {
      helper.setQuery(e.currentTarget.value) // update the parameters
            .search(); // launch the query
    });
  }
});

search.addWidget({
  render: function(opts) {
    const results = opts.results;
    // read the hits from the results and transform them into HTML.
    document.querySelector('#hits').innerHTML = results.hits.map(function(h) {
      return '<p>' + h._highlightResult.title.value + '</p>';
    }).join('');
  }
});

search.start();