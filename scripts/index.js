window.onload=function(){
	var dakuai=document.getElementById("dakuai");
	var button1=document.getElementById("button1");
  var button2=document.getElementById("button2");
  var shanpin=document.getElementById("shanpin");
 
  var k=0;
	var xuanze=function(shu){
        if(shu>=65&&shu<=90||shu>=97&&shu<=122){
          return false;
          }else{
           return true;
          }
	};
   for( i=0;i<52;i++){   	          
   	 	 kuai=document.createElement("div");
		 kuai.setAttribute("class","kuai");
     kuai.setAttribute("id","a"+i);
     	 dakuai.appendChild(kuai);	 	
   	 	var shu=Math.floor(Math.random()*123);
   	 	while(xuanze(shu)){
   	 		shu=Math.floor(Math.random()*123);			
		}

		kuai.innerHTML=String.fromCharCode(shu);  	 
   } 
    var kuai=document.getElementsByClassName("kuai"); 

    for(i=0;i<4;i++){
      for(j=0;j<13;j++){
         kuai[k].style.left=j*53;
         // kuai[k].style.top=i*53;
         k++;
      }

    }
   var suiji;
   var suiji1;
   var suiji2;
   var suiji3;
   var shu,shu1,shu2,shu3;
   
   var k=0;
    var fn=function(){
       suiji=Math.floor(Math.random()*52);
       shu=document.getElementById("a"+suiji);
      
       while(shu.className=="kuai ss"){
         suiji=Math.floor(Math.random()*52);
         shu=document.getElementById("a"+suiji);
       } 
           shu.setAttribute("class","kuai ss");
          
      
     
      k++;
      if(k==52){
        clearInterval(timeid3);
        clearInterval(timeid4);
      }
    
    }

     timeid3=setInterval(fn,3000);
  timeid4=setInterval(function(){
       $({aa:0}).animate(
      {aa:-652},{
        duration:3000,
        step:function(){
          $("#a"+suiji).css("top",this.aa+"px");
           
        }
      })
   },3000)
  
  

      
      // var  jisu=document.getElementById("jisu");
   	  // // var  aa=0;
   	  // var  kaiguan=false;
   	  // var clear=document.createElement("div");
   	  //   clear.setAttribute("class","clear");
   	  //    dakuai.appendChild(clear);
   	  //   var timeid=setInterval(function(){
      //        if(kaiguan){
      //        jisu.innerHTML=aa;
      //        aa++;
      //        }
   	  //      },1000);
           // var a=dakuai.firstElementChild;     
   	  document.onkeydown=function(e){
           kaiguan=true;
   	  	   
       	      
   	      if(shu.innerHTML.charCodeAt(0)>90&&shu.style.top!=0&&shu.style.top!=-652){
              if(e.keyCode+32==shu.innerHTML.charCodeAt(0)){
                shu.style.background='rgb(227, 14, 153)';
             } 
              
          }
          if(e.shiftKey&&shu.style.top!=0&&shu.style.top!=-652){
          	   if(e.keyCode==shu.innerHTML.charCodeAt(0)){
              shu.style.background='rgb(227, 14, 153)';
                  
               } 
                 
        

          
          }
          if(kuai.length==0){
            clearInterval(timeid);
          }
           
   	}
      
   	
   	button1.onclick=function(){
          shanpin.style.webkitTransform="translateY(-600px)";
    }
     button1.onmouseover=function(){
      this.style.backgroundImage="url('./img/5.png')";
     }
     button2.onmouseover=function(){
      this.style.background="url('./img/9.png') no-repeat -5px 0px";
     }
     button1.onmouseout=function(){
      this.style.backgroundImage="url('./img/3.png')";
     }
     button2.onmouseout=function(){
      this.style.background="url('./img/4.png') no-repeat 0 0";
     }

}