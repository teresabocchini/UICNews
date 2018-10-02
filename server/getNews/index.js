var axios = require("axios");

module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const calculatedDate = new Date();
  const since = calculatedDate.setMonth(calculatedDate.getMonth() - 6);

  const config = {
    headers: {
      "Ocp-Apim-Subscription-Key": "<API KEY GOES HERE>"
    }
  };

  const promise = axios
    .get(
      `https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=uic&count=100&since=${since}&sortBy=date`,
      config
    )
    .then(response => {
      context.log("Successfully retrieved data.");

      const filteredResults = response.data.value.filter(story => {
        const datePublished = new Date(story.datePublished);
        return datePublished >= calculatedDate;
      });

      context.res = {
        body: filteredResults
      };
    })
    .catch(() => {
      context.log("Failed to retrieve data.");
      context.res = {
        status: 400,
        body: "Something went wrong contacting the Bing News API."
      };
    });

  return promise;
};
