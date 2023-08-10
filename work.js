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
    var text3 = document.getElementById('text3');

    var title1 = document.getElementById('title1');
    var title2 = document.getElementById('title2');
    var title3 = document.getElementById('title3');

    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');

    switch (buttonNumber) {
      case 1:
      
        text1.style.display = 'block';
        text2.style.display = 'none';
        text3.style.display = 'none';

        title1.style.display = 'block';
        title2.style.display = 'none';
        title3.style.display = 'none';

        image1.style.display = 'block';
        image2.style.display = 'none';
        image3.style.display = 'none';

        break;

      case 2:
        
        text1.style.display = 'none';
        text2.style.display = 'block';
        text3.style.display = 'none';

        title1.style.display = 'none';
        title2.style.display = 'block';
        title3.style.display = 'none';

        image1.style.display = 'none';
        image2.style.display = 'block';
        image3.style.display = 'none';

        break;

      case 3:
        
        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'block';

        title1.style.display = 'none';
        title2.style.display = 'none';
        title3.style.display = 'block';

        image1.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'block';

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