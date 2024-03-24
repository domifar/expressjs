const button1 = (text) => {
    fetch('http://localhost:80/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        text: text
      })
  });
}

const button2 = () => {	
    fetch('http://localhost:80/getsession')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('output').innerHTML = data.text
    })
}
