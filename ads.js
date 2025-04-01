              document.getElementById('adWindow').style.display = 'none';
              function popUpTime(){
                document.getElementById('adWindow').style.display = 'inline';
                clearInterval(Test)
              }
              var Test = setInterval(popUpTime,5000);
              function closeAd() {
                  document.getElementById('adWindow').style.display = 'none';
                  Test = setInterval(popUpTime,5000);
                  
              }
              function changeHue() {
                const label = document.querySelector('label[for="50"]');
                let hue = 0;
                setInterval(() => {
                    label.style.color = `hsl(${hue}, 100%, 50%)`;
                    hue = (hue + 1) % 360;
                }, 1);
            }  
            window.onload = changeHue;
