let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
});

function showImage(buttonNumber) {

    var image = document.getElementById('image1');

    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');
    var card4 = document.getElementById('card4');
    var card5 = document.getElementById('card5');
    var card6 = document.getElementById('card6');

    var text1 = document.getElementById('text1');
    var text4 = document.getElementById('text4');

    switch (buttonNumber) {
      case 1:
    
        card1.style.display = 'block';
        card2.style.display = 'block';
        card3.style.display = 'none';
        card4.style.display = 'none';

        text1.style.display = 'block';
        text4.style.display = 'none';


        break;

      case 2:

        card1.style.display = 'none';
        card2.style.display = 'none';
        card3.style.display = 'block';
        card4.style.display = 'block';

        text1.style.display = 'none';
        text4.style.display = 'block';

        break;
        
        default:
            
            showImage(1);
            
            break;
        }
      }
      
      function initializePage() {
        
        showImage(1);
      }
      
      
      window.addEventListener('load', initializePage);