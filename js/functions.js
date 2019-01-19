const btn_older = document.querySelector('main ul li:nth-of-type(2) button:first-child');
const btn_newest = document.querySelector('main ul li:nth-of-type(2) button:last-child');

btn_older.addEventListener("click", function(){
  document.getElementById('list-stories').scrollIntoView({
    behavior: 'smooth'
  });
 
  this.classList.add('text-active');
  btn_newest.classList.remove('text-active');
});

btn_newest.addEventListener("click", function(){
  document.getElementById('story-preview').scrollIntoView({
    behavior: 'smooth'
  });
 
  this.classList.add('text-active');
  btn_older.classList.remove('text-active');
});

