// views 폴더 밖의 index.js는 node.js이고,
// 이 파일은 browser에 쓰일 javascript임!!
// 따라서 라이브러리 설치할때도 npm이 아니라 cdn을 써야함
const url = "http://localhost:8080/api/logs"

const inputData = (data, idx) => {
  const sample = `
    <tr>
      <th scope="row">${idx}</th>
      <td>
        <div class="alert alert-primary" role="alert">${data.message}</div>
      </td>
      <td>${data.level}</td>
      <td>${data.timestamp}</td>
    </tr>
  `;
  return sample;
}

const changeAlertColor = () => {
  logTableBody.querySelectorAll(".alert").forEach((element) => {
    if(element.innerHTML.includes("warn")) {
      element.classList.remove("alert-primary");
      element.classList.add("alert-warning");
    }
    else if(element.innerHTML.includes("error")) {
      element.classList.remove("alert-primary");
      element.classList.add("alert-danger");
    }
    else if(element.innerHTML.includes("info")) {
      element.classList.remove("alert-primary");
      element.classList.add("alert-info");
    }
  })
}

const getData = async () => {
  try {
     const response = await axios.get(url);
     if(response.data) {
      let trTags = "";
      response.data.forEach((data, idx)=> {
        let trTag = inputData(data, idx);
        trTags += trTag;
      });
      logTableBody.innerHTML = trTags;
      changeAlertColor();
     }
  } catch (error) {
    console.log(error);
  }
}

getData();

const logTableBody = document.querySelector(".log-table-body");