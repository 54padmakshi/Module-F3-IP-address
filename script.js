
const btn1= document.getElementsByClassName('button');


   $.getJSON("https://api.ipify.org?format=json", function(data)
    {        
       // Setting text of element P with id gfg
      const msg= $("#gfg").html(data.ip);
            
     })

function ipaddress(ip) {
   $.getJSON("https://api.ipify.org?format=json", function(data)
    {
      const IP=  data.ip ;
      console.log(IP); 

      const url=`https://ipinfo.io/${IP}/geo`;
      console.log(url);

      
      fetch(`https://ipinfo.io/${IP}?token=63d80dbbd6f6c5`)
     .then(response => response.json())
    .then(json => {
      console.log(json);
      document.getElementById('city').innerHTML = `City : ${json.city}`;
      document.getElementById('org').innerHTML = `Organization :  ${json.org}`;
      document.getElementById('Region').innerHTML = `Region : ${json.region}`;   
      document.getElementById('hostn').innerHTML = `Hostname : ${json.hostname}`;
      document.getElementById('p').innerHTML = `Pincode: ${json.postal}`;
      document.getElementById('t').innerHTML = `Time Zone: ${json.timezone}`
      
      document.getElementById('d').innerHTML = `Date and Time: ${json.date}`

      fetch(`https://api.postalpincode.in/pincode/${json.postal}`)
      .then(response => response.json())
      .then(jsondata => {
         console.log(jsondata);
         document.getElementById('m').innerHTML = `Message: ${jsondata[0].Message}`
         document.getElementById('na').innerHTML = `Name:${jsondata[0].PostOffice[0].Name}`
         document.getElementById('bt').innerHTML = `Branch Type: ${jsondata[0].PostOffice[0].BranchType}`
         document.getElementById('ds').innerHTML = `Delivery status : ${jsondata[0].PostOffice[0].DeliveryStatus}`
         document.getElementById('distri').innerHTML = `District :${jsondata[0].PostOffice[0].District}`
         document.getElementById('divi').innerHTML = `Division :${jsondata[0].PostOffice[0].Division}`

         document.getElementById('nam').innerHTML = `Name:${jsondata[0].PostOffice[1].Name}`
         document.getElementById('brt').innerHTML = `Branch Type: ${jsondata[0].PostOffice[1].BranchType}`
         document.getElementById('del').innerHTML = `Delivery status : ${jsondata[0].PostOffice[1].DeliveryStatus}`
         document.getElementById('dis').innerHTML = `District :${jsondata[0].PostOffice[1].District}`
         document.getElementById('div').innerHTML = `Division :${jsondata[0].PostOffice[1].Division}`
      })

   })
   
      

      navigator.geolocation.getCurrentPosition(position);
      function position(pos) {

         const lat =pos.coords.latitude;
         const long=pos.coords.longitude;
         document.getElementById('lat').innerHTML = `Lat : ${lat}`;
         document.getElementById('lon').innerHTML = `Long : ${long}`;
         document.getElementById('map').innerHTML =  `<iframe src="https://maps.google.com/maps?q=${lat},${long}&t=&z=15&ie=UTF8&iwloc=&output=embed"width='600' height='450' style='border:0;' allow='geolocation' loading='lazy' ></iframe>` 
      }  
      
     
       
})
}
ipaddress();  



  
//display


