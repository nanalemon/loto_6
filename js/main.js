'use strict';
{
  const btn=document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const results=['2','8','10','13','27','30','1','9','16','20','21','43','1','5','15','31','36','38','16','18','26','27','34','40','9','15','21','23','27','28','6','12','23','25','28','38','7','19','21','23','33','35','11','16','18','20','42','43','11','19','23','38','39','42','1','3','19','21','35','39','12','26','32','37','40','42','14','17','27','28','35','39','13','29','31','37','41','42','2','8','11','35','37','38','4','6','11','20','21','28','5','12','13','29','34','35','14','20','25','34','35','36','6','16','18','27','36','41','4','8','12','30','33','43','7','29','33','35','37','39','5','7','13','19','38','41','8','12','16','19','20','35','7','10','28','32','33','40','15','18','19','30','36','38','11','32','34','37','40','43','3','4','11','12','13','43','4','8','20','30','33','38','6','11','15','20','31','41','8','12','20','35','37','40','4','16','17','19','26','37','7','18','22','25','28','43','3','6','7','23','29','41','8','17','22','25','29','41','2','20','25','30','37','40','3','5','13','30','32','41','1','16','20','23','30','40','3','5','9','17','21','41','2','9','26','27','34','43','10','18','22','25','39','42','5','17','25','34','38','39','18','21','27','33','36','38','4','15','21','24','33','37','1','2','3','15','24','26','3','16','24','31','34','42','7','9','28','32','36','38','11','14','21','24','25','42','3','11','14','25','27','31','2','5','28','30','33','40','2','13','21','31','32','41','5','13','15','25','27','39','7','15','24','37','38','41','1','16','24','25','36','42','2','15','23','37','40','43','14','25','26','31','37','42','11','12','13','14','37','39','10','13','25','31','32','42','2','14','22','27','35','42','4','8','9','13','16','25','9','15','17','30','32','41','20','21','23','28','30','42','4','8','22','25','27','28','2','3','9','12','15','30','11','16','20','28','34','40','2','14','19','22','32','41','2','10','22','23','31','43','7','15','17','30','33','35','1','4','6','11','18','25','16','23','30','35','37','39','1','9','31','35','40','41','6','11','20','23','24','31'];

  btn.textContent=results[Math.floor(Math.random()*results.length)];
  });
}

