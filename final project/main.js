
let days = document.getElementById("input")
let result = document.getElementById("result")

function go(){

if( days.value == 3){
 result.innerHTML = `<table id="tb3" class="table" style="width:100% ">
 <tr class="days">
   <th>Day 1</th>
   <th>Day 2</th>
   <th>Day 3</th>
 </tr>
 <tr>
   <td> Breakfast at Aveneus Mall and walk in the mall
    + Go to Abdullah Salem center
     + lunch in freej swaileh restursnt
   </td>
   <td>
    Go to Kuwait towers + Suoq Al-mubarkia + Mais Alhganem resturant
   
   </td>
   <td>
   Assima Mall + Shaheed park
   </td>
 </tr>
 </table>`
}

else if (days.value == 4 ){
    result.innerHTML=   `<table id="tb3" class="table" style="width:100% ">
    <tr class="days">
      <th>Day 1</th>
      <th>Day 2</th>
      <th>Day 3</th>
      <th>Day 4</th>
    </tr>
    <tr>
      <td> Lunch at Avenues Mall 
      + walk in the mall + watch movie
      + dinner in freej swaleh restursnt 
      </td>

      <td>  Lunch at Kuwait towers
             <br> +  visit Assima Mall 
      </td>
      <td> Abdullah Salem center
         + 360 mall + Morouj              
      </td>
      <td>        
       Scientific center + National museum + Grand mosque
      </td>
    </tr>
    </table>`                                        
}

else if (days.value == 5){
    result.innerHTML= `<table id="tb3" class="table" style="width:100% ">
    <tr class="days" >
      <th>Day 1</th>
      <th>Day 2</th>
      <th>Day 3</th>
      <th>Day 4</th>
      <th>Day 5</th>
    </tr>
    <tr>
      <td> 360 Mall + Morouj <br>
          dinner in Dar Hamad resturant
      </td>

      <td> 
      kuwait towers +
      lunch in Mais Alghanem <br>
     + Mubarkia 
      </td>

      <td>
      Lunch at Assima Mall + Abdullah Salem center 
      </td>

      <td> Aveneus Mall + National musuem + shaheed park   </td>
      <td> Scientific center + Olompya Mall  + dinner in Narinj          </td>
    </tr>
    </table>`

}                                                           
else if (days.value == 6){

    result.innerHTML=`<table id="tb3" class="table" style="width:100% ">
    <tr class="days">
      <th>Day 1</th>
      <th>Day 2</th>
      <th>Day 3</th>
      <th>Day 4</th>
      <th>Day 5</th>
      <th>Day 6</th>
    </tr>
    <tr>
      <td>    
      kuwait towers+ Scientific center +  Assima Mall 
            </td>



      <td> 
      Abdullah Salem center +  Shaheed park +
      dinner in Mais Alghanem resturant

           </td>



      <td>
      National museum + Grand mosque . 

            </td>


      <td>
      Lunch at Avenues Mall + Suoq Al-mubarkia + dinner in freej swaleh restursnt
           </td>

      <td>  
      
       Lunch at Mouroj + 360 Mall  
          </td>


      <td>
           Marina Mall +  Dar Hamad resturant
      
           </td>


    </tr>



    </table>`
}                                                                                       
else if (days.value == 7){
    result.innerHTML= `<table id="tb3" class="table" style="width:100% ">
    <tr class="days">
      <th>Day 1</th>
      <th>Day 2</th>
      <th>Day 3</th>
      <th>Day 4</th>
      <th>Day 5</th>
      <th>Day 6</th>
      <th>Day 7</th>
    </tr>
    <tr>
      <td>    breakfast at Aveneus Mall and walk in the mall + Watch a movie and play  </td>
      <td>   Abdullah Salem center + dinner in Mais Alghanem resturant                  </td>
      <td>    Suoq Al-mubarkia + dinner in freej swaleh restursnt                      </td>
      <td>   Lunch at Mouroj + 360 Mall                                                </td>
      <td>    Kuwait towers + Shaheed park                                             </td>
      <td>    Lunch at Assima Mall   & play in skyzone + visit grand mosque          </td>
      <td>                  National museum +360 Mall                                   </td>
    </tr>
    </table>`

}
else if (days.value == 8){

    result.innerHTML= `<table id="tb3" class="table" style="width:100% ">
    <tr class="days">
      <th>Day 1</th>
      <th>Day 2</th>
      <th>Day 3</th>
      <th>Day 4</th>
      <th>Day 5</th>
      <th>Day 6</th>
      <th>Day 7</th>
      <th>Day 8</th>
    </tr>
    <tr>
      <td> National musuem + shaheed park</td>
      <td> Kuwait towers + Shaheed park </td>
      <td>Abdullah Salem center + dinner in Dar Hamad resturant</td>
      <td> Avenues Mall + Suoq Al-mubarkia        </td>
      <td>Grand mosque + 360 Mall </td>
      <td>Assima Mall + Freej swaileh resturant  </td>
      <td>Mourouj + Tea club resturant</td>
      <td> Scientific center + Mais Alghanem resturant    </td>
    </tr>
    </table>`
}

else if (days.value == 9){
    result.innerHTML= `<table id="tb3" class="table" style="width:100% ">
    <tr class="days">
      <th>Day 1</th>
      <th>Day 2</th>
      <th>Day 4</th>
      <th>Day 4</th>
      <th>Day 5</th>
      <th>Day 6</th>
      <th>Day 7</th>
      <th>Day 8</th>
      <th>Day 9</th>
    </tr>
    <tr>
      <td>        Go to Aveneus Mall and walk in the mall + Watch a movie and play        </td>
      <td>   Abdullah Salem center     +                 Mughal Mahal resturant           </td>
      <td> Mourouj                  +              360 Mall                               </td>
      <td> Kuwait towers            +              Mais Alghanem resturant                </td>
      <td>    Grand mosque          +             National Museuem                        </td>
      <td>    Shaeed park          +              Dar Hamad resturant                     </td>
      <td>     Suoq Al-mubarkia    + dinner in freej swaleh restursnt                   </td>
      <td>     Lunch at Assima Mall +  skyzone                                </td>
      <td>                   Sharq Mall  + Scientific center                                </td>
    </tr>             
    </table>`

}                                                   
else if (days.value == 10){
    result.innerHTML= `<table id="tb3" class="table" style="width:100% ">
    <tr class="days">
      <th>Day 1</th>                                               
      <th>Day 2</th>
      <th>Day 3</th>                                   
      <th>Day 4</th>
      <th>Day 5</th>                             
      <th>Day 6</th>             
      <th>Day 7</th>        
      <th>Day 8</th>
      <th>Day 9</th>    
      <th>Day 10</th>
    </tr>
    <tr style="width: 200px;">
      <td> Suoq Al-mubarkia +  Dar Hamad resturant             </td>
      <td>  Shaeed park +     Grand mosque                      </td>
      <td>      Mourouj + 360 Mall                             </td>
      <td>        Aveneus Mall  + Freej swaileh  resturant      </td>
      <td>    Kuwait towers + Mais Alghannim resturant          </td>
      <td>      Mairna Mall + Salmiya Traditional coffee shop   </td>
      <td>      Lunch at Assima Mall +  skyzone                      </td>
      <td>      Morouj + 360 Mall                                      </td>
      <td>       Abdullah Salem cultral center  + Narinj resturant      </td>
      <td>    National Museum + Sharq Mall                </td>
    </tr>
    </table>`

}

else if(days.value==""){
    alert("please write the number of days")
}


else{
    alert("Days should be between 3 and 10")
}


}

