'use strict';
{
  const btn=document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const results=['29','6','6','34','34','17','17','22','22','24','24','7','7','7','26','26','26','9','9','9','10','10','10','14','14','14','18','18','18','4','4','4','4','8','8','8','8','33','33','33','33','36','36','36','36','39','39','39','39','5','5','5','5','5','31','31','31','31','31','38','38','38','38','38','40','40','40','40','40','42','42','42','42','42','2','2','2','2','2','2','3','3','3','3','3','3','21','21','21','21','21','21','32','32','32','32','32','32','43','43','43','43','43','43','1','1','1','1','1','1','1','12','12','12','12','12','12','12','19','19','19','19','19','19','19','41','41','41','41','41','41','41','11','11','11','11','11','11','11','11','27','27','27','27','27','27','27','27','28','28','28','28','28','28','28','28','13','13','13','13','13','13','13','13','30','30','30','30','30','30','30','30','15','15','15','15','15','15','15','15','15','16','16','16','16','16','16','16','16','16','23','23','23','23','23','23','23','23','23','20','20','20','20','20','20','20','20','20','20','25','25','25','25','25','25','25','25','25','25','35','35','35','35','35','35','35','35','35','35','37','37','37','37','37','37','37','37','37','37','37'
  ];

  btn.textContent=results[Math.floor(Math.random()*results.length)];
  });
}

