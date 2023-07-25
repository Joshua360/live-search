const data = [
    { name: 'Edwin', phone: '254798699300' },
    {name:'Ananda', phone: '254713482448'},
    {name:'Kamau', phone:'254718528968'}
  ];

  const search = document.getElementById("search");
  const results = document.getElementById("results");
  let search_term = "";
  
  const showList = () => {
    results.innerHTML = "";
    data
      .filter((item) => {
        return (
          item.phone.toLowerCase().includes(search_term) ||
          item.name.toLowerCase().includes(search_term)
        );
      })
      .forEach((e) => {
        const li = document.createElement("li");
        li.innerHTML = `<i>Name:</i> ${e.name}  || <i>phone:</i> ${e.phone}`;
        results.appendChild(li);
      });
  };
  
  showList();
  
  search.addEventListener("input", (event) => {
    search_term = event.target.value.toLowerCase();
    showList();
  });
  