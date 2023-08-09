            // Declaracion de variables

            var dado = document.getElementById('dado');
          
            
            var c = document.getElementById('c');
         
            
            var valor1 = document.getElementById('valor1');
         
            
            var historial1 = document.getElementById('historial1');
          
            
            var h1scroll = document.getElementById('historial1');
       
            
            var estado = 1;
            
            
             
            
            
                        // Numeros aleatorios
            
            
            
            const random = ["rotate(0deg)", "rotateY(-90deg)", "rotateY(90deg)", "rotateX(90deg)", "rotateX(-90deg)", "rotateY(180deg)"];
            
            var randomBt = document.getElementById('randomBt');
            randomBt.addEventListener('click', setRandom);
            
            function setRandom (){
                var valorRandom = Math.floor(Math.random() * 6);
                dado.style.transform = random[valorRandom];
            
                if (estado == 1) {
                    valor1.innerHTML += valorRandom + 1 + "<br>" + "<hr>";
                    h1scroll.scrollTop = h1scroll.scrollHeight;
                }
            
            }
            
            
                        // Reiniciar
            
                        
            
            var reset = document.getElementById('reset');
            reset.addEventListener('click', ()=>{
                window.location.reload();
            })