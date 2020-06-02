var data = {
    midiaFooter:[
      {
        link:"https://facebook.com.br",
        icon:"fa fa-1x fa-facebook"
      },
      {
        link:"https://instagram.com.br",
        icon:"fa fa-1x fa-instagram"
      },
      {
        link:"https://youtube.com.br",
        icon:"fa fa-1x fa-youtube"
      }
    ],
    menuFooter:[
      {
        Item:"HOME",
        link:"#"
      },
      {
        Item:"CONTATO",
        link:"#"
      }
    ]
    };
    var html = "";
    //Template Engine MIDIA FOOTER
    var tplMidia =  "{{ #midiaFooter }}" +
                    "<li class='border d-flex align-items-center justify-content-center m-1' style='width:2rem; height:2rem; text-decoration:none;'> <a href='{{link}}' class='{{ icon }}' target='_blank'> </a> </li>" +
                    "{{ /midiaFooter }}";
    html = Mustache.render(tplMidia, data);
    if(document.getElementById("midiaFooter")){
      document.getElementById("midiaFooter").innerHTML = html;
    }



    //Template Engine MENU FOOTER
    var tplMenuFooter = "{{ #menuFooter }}"+
                        "<li class='d-flex ml-4 font-weight-bold'> <a href='{{ link }}' style='color:black; text-decoration:none;'> {{ Item }} </a> </li>"+
                        "{{ /menuFooter }}";
    html = Mustache.render(tplMenuFooter, data);
    if(document.getElementById("menuFooter")){
      document.getElementById("menuFooter").innerHTML = html;
    }
    var ano = new Date();
    var p = document.createElement("p");
    p.setAttribute("style", "color:white");
    p.innerHTML = "© " + ano.getFullYear()  + " Anime Data."
    document.getElementById("footerCopyright").appendChild(p);
