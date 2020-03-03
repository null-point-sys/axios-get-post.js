# axios-get-post.js

• CDN Js Deliver: Free open source CDN via Github repo:

https://cdn.jsdelivr.net/gh/null-point-sys/axios-get-post.js@38dcd9b73e3cc17bd3d53e18e33bacdd7da2a231/

• HTML to load axios get post CDN repo example:

<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.js"></script>
<script src="https://cdn.jsdelivr.net/gh/null-point-sys/axios-get-post.js@38dcd9b73e3cc17bd3d53e18e33bacdd7da2a231/axios-get-post.js"></script>
<script>
	var url   ="https://www.jsonstore.io/417509bb4c82cb8d0e1dde6d34e2be4b88c2f8d17a98daa0094973c5517175fa";
	var dato1 = "47";
	var dato2 = "aaa";
	var obj = { firstName: dato1, lastName: dato2 };
	makeRequest("post", url, obj);
	//makeRequest("get", url, obj)
</script>
<body>
</body>



