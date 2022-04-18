let download = document.querySelector('.download');
let table = document.querySelector('#table');

download.onclick = function() {
  this.nextElementSibling.click();
}


// FileReader
download.nextElementSibling.onchange = function(e){
  for(let file of e.target.files) {
    const reader = new FileReader();
    reader.onloadend = function(event) {
      let tr = document.createElement('tr');
      let tdImg = document.createElement('td');
      let tdName = document.createElement('td');
      let tdSize = document.createElement('td');

      let img = document.createElement('img');
      img.setAttribute('src',event.target.result);

      tdImg.appendChild(img);
      tdName.innerText = file.name;
      if(file.size> 1024 * 1024) {
          tdSize.innerText = Math.floor(file.size / 1024 / 1024) + "MB";
       }
       else{
        tdSize.innerText = Math.floor(file.size / 1024) + "KB";
       }

      tr.appendChild(tdImg);
      tr.appendChild(tdName);
      tr.appendChild(tdSize);


      table.appendChild(tr);
    }

    reader.readAsDataURL(file);
  }

  document.querySelector('.table').classList.remove('d-none')

}