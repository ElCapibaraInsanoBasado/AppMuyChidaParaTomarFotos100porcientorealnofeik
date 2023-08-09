Webcam.set({
    width: 500, height: 290, image_format: "png", png_quality: 90
})
function Pelotin(){
    Webcam.snap(function(data){
        if(Bob=="Fotinin1"){
            document.getElementById("FotinLaFoto").innerHTML="<img src="+data+" id='Fotinin1'>"
        }
        if(Bob=="Fotinin2"){
            document.getElementById("FotoLaFoto").innerHTML="<img src="+data+" id='Fotinin2'>"
        }
        if(Bob=="Fotinin3"){
            document.getElementById("FotonononaLaFoto").innerHTML="<img src="+data+" id='Fotinin3'>"
        }
    })
}
function Balerin(){
    Einstein=document.getElementById("Hipopotomonstrosesquipedaliofobia")
    image=document.getElementById("Fotinin").src
    Einstein.href=image
    Einstein.click()
}
Siri=window.webkitSpeechRecognition
SantaClos=new Siri()
function Iniciacion(){
    document.getElementById("German").innerHTML=""
    SantaClos.start()
}
SantaClos.onresult=function(Trompin){
    console.log(Trompin)
    Clonador=Trompin.results[0][0].transcript
    document.getElementById("German").innerHTML=Clonador
    if(Clonador=="capibara"){
        console.log("SE COMPRAN; COLCHONES, TAMBORES, REFRIGERADORES, ESTUFAS, LAVADORAS, MICROONDAS, O ALGO DE FIERRO VIEJO QUE VENDAAAAAN")
        Traductor()
    }
}
function Traductor(){
    Yoyin=window.speechSynthesis
    Chino="Lanzando bomba nuclear en 5 segundos"
    Alexa=new SpeechSynthesisUtterance(Chino)
    Webcam.attach("#CamarinLaCamara")
    Yoyin.speak(Alexa)
    setTimeout(function(){
        Bob="Fotinin1"
        Pelotin()
        Balerin()
        Chino="Lanzando bomba nuclear en 5 segundos"
        Alexa=new SpeechSynthesisUtterance(Chino)
        Yoyin.speak(Alexa)
    }, 5000)
    setTimeout(function(){
        Bob="Fotinin2"
        Pelotin()
        Balerin()
        Chino="Lanzando bomba nuclear en 10 segundos"
        Alexa=new SpeechSynthesisUtterance(Chino)
        Yoyin.speak(Alexa)
    }, 10000)
    setTimeout(function(){
        Bob="Fotinin3"
        Pelotin()
        Balerin()
        Chino="Lanzando bomba nuclear en 15 segundos"
        Alexa=new SpeechSynthesisUtterance(Chino)
        Yoyin.speak(Alexa)
    }, 15000)
}
