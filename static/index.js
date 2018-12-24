// var instantsearch = require("instantsearch.js");
const search = instantsearch(
  {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_ADMIN_KEY,
    indexName: "apprenticeships",
    routing: true,
    searchableAttributes: ["company", "description", "location"],
    searchFunction: function(helper) {
      helper.search();
    }
  }
  // {
  //   indexName: "apprenticeships",
  //   searchClient: algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76")
  // }
);

// // // initialize hits widget
search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      allItems: `
        <ul class="list-reset flex justify-between flex-wrap -mx-2">
          {{#hits}}
            <li class="w-1-2 px-2 mb-8 flex">
              <a class="bg-white block shadow px-4 pt-2 pb-4 flex flex-col flex-grow" href="{{{link}}}" target="_blank">
                <span class="text-xs italic block self-end">{{{location}}}</span>
                <h2 class="post-header text-base font-bold mb-2">{{{company}}}</h2>
                <p class="leading-normal text-sm">{{{description}}}</p>
                <ul class="list-reset flex mt-4">
                  <li class="bg-pink-lightest text-sm mr-2 py-1 px-2 rounded-lg">#front-end</li>
                  <li class="bg-pink-lightest text-sm mr-2 py-1 px-2 rounded-lg">#back-end</li>
                  <li class="bg-pink-lightest text-sm mr-2 py-1 px-2 rounded-lg">#ux design</li>
                </ul>
              </a>
            </li>
          {{/hits}}
        </ul>
    `,
      empty: "No results for {{query}}"
    }
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#search__box",
    placeholder: "Search for apprenticeships"
  })
);

search.start();
console.log("hi");
