let title = "Leave Management App";
let template =
`
<!doctype HTML>
<html>
<head>
<title id="title">${title}</title>
</head>
<body>
<h3>${title}</h3>
<script>

function getTitle(){

    var title = document.querySelector("#title");
    console.log(title);
}
</script>
</body>
</html>`;
console.log(template);
