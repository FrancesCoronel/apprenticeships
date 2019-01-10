const search = instantsearch({
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_ADMIN_KEY,
  indexName: "apprenticeships",
  routing: true,
  searchableAttributes: ["company", "description", "location"],
  searchFunction: function (helper) {
    helper.search();
  }
});

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    hitsPerPage: 12,
    templates: {
      allItems: `
        <div class="flex flex-wrap">
          {{#hits}}
            <a class="w-full sm-w-1-2 md-w-1-3 mb-4 shadow hover-shadow-lg transition" href="{{{link}}}" target="_blank" rel="noopener noreferrer">
              <div class="max-w-sm rounded overflow-hidden">
                <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{{{company}}}</div>
                  <p class="text-grey-darker text-base">{{{description}}}</p>
                </div>
                <div class="px-6 py-4">
                  {{#location}}<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 mb-2">{{ . }}</span>{{/location}}
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