let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
  food.onclick = () =>{
    previewContainer.style.display='flex';
    let name = food.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    })
  }
})

previewContainer.querySelector('#close-preview').onclick = () =>{
  previewContainer.style.display = 'none';
  previewBox.forEach(close =>{
     close.classList.remove('active');
  });
};