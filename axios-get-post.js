var print_get = function(data) {
	var result = data.result;
	console.log(result);
	/*for (var prop in result) {
		if (result.hasOwnProperty(prop)) {
		  console.log(result[prop]);
		}
	  }*/
};

async function makeRequest(requestType, url, obj) {
	if (requestType === "post") {
		// axios post
		axios
		  .post(url, obj)
		  .then(function(response) {
			console.log(response);
		  })
		  .catch(function(error) {
			console.log(error);
		  });
	  } else {
		// axios get
		let res = await axios.get(url);
		let data = res.data;
		print_get(data);
	  }
}
