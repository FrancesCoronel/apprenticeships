const search = instantsearch({
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_ADMIN_KEY,
  indexName: 'apprenticeships',
  routing: true,
  searchableAttributes: ["company", "description", "location"],
  searchFunction: function (helper) {
    helper.search();
  }
})

// initialize hits widget
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      allItems: `
        <ul>
          {{#hits}}
            <li>
              <a class="post post-entry" href="{{{link}}}" target="_blank">
                <h2 class="post-header">{{{company}}}</h2>
                <p class="post__location">{{{location}}}</p>
                <p>{{{description}}}</p>
              </a>
            </li>
          {{/hits}}
        </ul>
    `,
      empty: 'No results for {{query}}'
    },
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search__box',
    placeholder: 'Search for apprenticeships'
  })
);

search.start()