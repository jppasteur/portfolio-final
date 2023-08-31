let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
});

function showImage(buttonNumber) {

    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');

    var title1 = document.getElementById('title1');
    var title2 = document.getElementById('title2');

    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');

    switch (buttonNumber) {
      case 1:
      
        text1.style.display = 'block';
        text2.style.display = 'none';

        title1.style.display = 'block';
        title2.style.display = 'none';

        image1.style.display = 'block';
        image2.style.display = 'none';

        break;

      case 2:
        
        text1.style.display = 'none';
        text2.style.display = 'block';

        title1.style.display = 'none';
        title2.style.display = 'block';

        image1.style.display = 'none';
        image2.style.display = 'block';

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