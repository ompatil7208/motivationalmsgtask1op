function show()
	{
		event.preventDefault();
		let q=document.getElementById("q")
		let a=document.getElementById("a")

		let url="https://api.quotable.io/random";
		fetch(url)
		.then(res=>res.json())
		.then(data=>{
				let quote = data.content;
				let author = data.author;
				q.innerHTML=quote;
				a.innerHTML=author;
			})
			.catch(err=>alert("issue"+err));
		}