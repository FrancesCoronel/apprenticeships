const search = instantsearch({
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_ADMIN_KEY,
  indexName: "apprenticeships",
  routing: true,
  searchableAttributes: ["company", "description", "location"],
  searchFunction: function(helper) {
    helper.search();
  }
});

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    hitsPerPage: 15,
    templates: {
      allItems: `
        <div class="flex flex-wrap -mx-2 mt-6">
          {{#hits}}
            <a class="my-4 px-2 w-full md-w-1-2 lg-w-1-3" href="{{{link}}}" target="_blank" rel="noopener noreferrer">
              <div class="max-w-sm rounded overflow-hidden shadow-md hover-shadow-lg transition min-h-full">
                <img class="w-full" src="{{{image}}}" alt="{{{company}}} - Logo Image">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{{{company}}}</div>
                  <p class="text-grey-darker text-base">{{{description}}}</p>
                </div>
                <div class="px-6 py-4">
                  {{#location}}
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm text-grey-darker mr-2 mb-2">
                      {{ . }}
                    </span>
                  {{/location}}
                </div>
              </div>
            </a>
          {{/hits}}
        </div>
    `,
      empty: "No results for {{query}}"
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination-container",
    maxPages: 20,
    // default is to scroll to 'body', here we disable this behavior
    scrollTo: false,
    showFirstLast: false
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#search__box",
    placeholder: "Search for apprenticeships",
    autofocus: false
  })
);

search.start();
