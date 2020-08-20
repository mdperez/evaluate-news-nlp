
const postData = async ( url = '', data = {})=>{
  const response = await fetch(url, { 
      method: 'POST', 
      credentials: 'same-origin', 
      // headers: {
      //     'Content-Type': 'application/json',
      // },
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
  const textarea = document.getElementById('textToAnalyze').value;
  const format = Client.checkFormat(textarea);
  getData('http://localhost:8081/credentials').then((res) => {
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${res.key}&${format}=${textarea}&lang=auto`;
    postData(url).then((res) => {
      Client.cleanErrors();
      Client.cleanResults();
      if (+res.status.code !== 0) {
        Client.sendError(res.status.msg);
      } else {
        Client.updateUI(res);
      }
    });
  });
}

export { handleSubmit }