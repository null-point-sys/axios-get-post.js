var print_get = function(data) {
	  var result = data.result;
	  console.log(result);
	  for (var prop in result) {
		if (result.hasOwnProperty(prop)) {
		  console.log(result[prop]);
		}
	  }
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

	var url   = "";
	var dato1 = "47";
	var dato2 = "aaa";
	var obj = { firstName: dato1, lastName: dato2 };
	  makeRequest("post", url, obj);
	//makeRequest("get",  url, obj);
