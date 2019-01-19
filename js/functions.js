const btn_older = document.querySelector('main ul li:first-child >div>div button:first-child');
const btn_newest = document.querySelector('main ul li:first-child  >div>div button:last-child');
const btn_group = document.querySelector('main ul li:first-child >div>div');

btn_older.addEventListener("click", function(){
  document.getElementById('list-stories').scrollIntoView({
    behavior: 'smooth'
  });
 
  this.classList.add('text-active');
  btn_newest.classList.remove('text-active');
  btn_group.classList.add('push-down');
});

btn_newest.addEventListener("click", function(){
  document.getElementById('prev_anchor').scrollIntoView({
    behavior: 'smooth'
  });
 
  this.classList.add('text-active');
  btn_older.classList.remove('text-active');
  btn_group.classList.remove('push-down');
});

