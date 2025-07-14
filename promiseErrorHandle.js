function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    console.log("Fetching data.........");

    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
}


function runFetch(success) {
  fetchData(success)
    .then((data) => {
      console.log("THEN block runs:");
      console.log(data);
    })
    .catch((error) => {
      console.log("CATCH block runs:");
      console.error(error);
    });
}
