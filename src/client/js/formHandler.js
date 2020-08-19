const postData = async ( url = '', data = {})=>{
  const response = await fetch(url, { 
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),       
  });

  try {
      const newData = await response.json();
      return newData;
  } catch(error) {
      console.log("error", error);
  }
};

const getData = async (url='') => { 
  const request = await fetch(url);
  try {
      const allData = await request.json();
      return allData;
  }
  catch(error) {
      console.log("error", error);
  }
};

function handleSubmit(event) {
  event.preventDefault()
  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  Client.checkForName(formText);
  console.log("::: Form Submitted :::");
  getData('http://localhost:8081/test').then((res) => {
    document.getElementById('results').innerHTML = res.message;
  });
}

export { handleSubmit }