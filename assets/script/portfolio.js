function get_repos(){

    console.log("From get_repos");
    axios
        .get("http://api.github.com/users/Geno1131993/repos")
        .then(function(response){
            console.log(response.data);
        });
}


get_repos();