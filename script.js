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
    var card7 = document.getElementById('card7');
    var card8 = document.getElementById('card8');
    var card9 = document.getElementById('card9');
    var card10 = document.getElementById('card10');
    var card11 = document.getElementById('card11');
    var card12 = document.getElementById('card12');

    var text1 = document.getElementById('text1');
    var text4 = document.getElementById('text4');
    var text7 = document.getElementById('text7');
    var text10 = document.getElementById('text10');

    switch (buttonNumber) {
      case 1:
    
        card1.style.display = 'block';
        card2.style.display = 'block';
        card3.style.display = 'block';
        card4.style.display = 'none';
        card5.style.display = 'none';
        card6.style.display = 'none';
        card7.style.display = 'none';
        card8.style.display = 'none';
        card9.style.display = 'none';
        card10.style.display = 'none';
        card11.style.display = 'none';
        card12.style.display = 'none';

        text1.style.display = 'block';
        text4.style.display = 'none';
        text7.style.display = 'none';
        text10.style.display = 'none';

        break;

      case 2:

        card1.style.display = 'none';
        card2.style.display = 'none';
        card3.style.display = 'none';
        card4.style.display = 'block';
        card5.style.display = 'block';
        card6.style.display = 'block';
        card7.style.display = 'none';
        card8.style.display = 'none';
        card9.style.display = 'none'; 
        card10.style.display = 'none';
        card11.style.display = 'none';
        card12.style.display = 'none';

        text1.style.display = 'none';
        text4.style.display = 'block';
        text7.style.display = 'none';
        text10.style.display = 'none';

        break;

      case 3:
        
        card1.style.display = 'none';
        card2.style.display = 'none';
        card3.style.display = 'none';       
        card4.style.display = 'none';
        card5.style.display = 'none';
        card6.style.display = 'none';
        card7.style.display = 'block';
        card8.style.display = 'block';
        card9.style.display = 'block';
        card10.style.display = 'none';
        card11.style.display = 'none';
        card12.style.display = 'none';

        text1.style.display = 'none';
        text4.style.display = 'none';
        text7.style.display = 'block';
        text10.style.display = 'none';

        break;

      case 4:
        
        card1.style.display = 'none';
        card2.style.display = 'none';
        card3.style.display = 'none';        
        card4.style.display = 'none';
        card5.style.display = 'none';
        card6.style.display = 'none';       
        card7.style.display = 'none';
        card8.style.display = 'none';
        card9.style.display = 'none';      
        card10.style.display = 'block';
        card11.style.display = 'block';
        card12.style.display = 'block';

        text1.style.display = 'none';
        text4.style.display = 'none';
        text7.style.display = 'none';
        text10.style.display = 'block';

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