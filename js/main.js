'use strict';
{
  const btn=document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const results=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','2','8','10','13','27','30','1','9','16','20','21','43','1','5','15','31','36','38','16','18','26','27','34','40','9','15','21','23','27','28','6','12','23','25','28','38','7','19','21','23','33','35','11','16','18','20','42','43','11','19','23','38','39','42','1','3','19','21','35','39','12','26','32','37','40','42','14','17','27','28','35','39','13','29','31','37','41','42','2','8','11','35','37','38','4','6','11','20','21','28','5','12','13','29','34','35','14','20','25','34','35','36','6','16','18','27','36','41','4','8','12','30','33','43','7','29','33','35','37','39','5','7','13','19','38','41','8','12','16','19','20','35','7','10','28','32','33','40','15','18','19','30','36','38','11','32','34','37','40','43','3','4','11','12','13','43','4','8','20','30','33','38','6','11','15','20','31','41','8','12','20','35','37','40','4','16','17','19','26','37'];

  btn.textContent=results[Math.floor(Math.random()*results.length)];
  });
}

// githubには100回までいったらアップロードする