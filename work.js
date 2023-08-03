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
    var text4 = document.getElementById('text4');
    var text5 = document.getElementById('text5');
    var text6 = document.getElementById('text6');
    var text7 = document.getElementById('text7');
    var text8 = document.getElementById('text8');
    var text9 = document.getElementById('text9');
    var text10 = document.getElementById('text10');
    var text11 = document.getElementById('text11');
    var text12 = document.getElementById('text12');

    var title1 = document.getElementById('title1');
    var title2 = document.getElementById('title2');
    var title3 = document.getElementById('title3');
    var title4 = document.getElementById('title4');
    var title5 = document.getElementById('title5');
    var title6 = document.getElementById('title6');
    var title7 = document.getElementById('title7');
    var title8 = document.getElementById('title8');
    var title9 = document.getElementById('title9');
    var title10 = document.getElementById('title10');
    var title11 = document.getElementById('title11');
    var title12 = document.getElementById('title12');

    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    var image4 = document.getElementById('image4');
    var image5 = document.getElementById('image5');
    var image6 = document.getElementById('image6');
    var image7 = document.getElementById('image7');
    var image8 = document.getElementById('image8');
    var image9 = document.getElementById('image9');
    var image10 = document.getElementById('image10');
    var image11 = document.getElementById('image11');
    var image12 = document.getElementById('image12');

    switch (buttonNumber) {
      case 1:
      
        text1.style.display = 'block';
        text2.style.display = 'block';
        text3.style.display = 'block';
        text4.style.display = 'none';
        text5.style.display = 'none';
        text6.style.display = 'none';
        text7.style.display = 'none';
        text8.style.display = 'none';
        text9.style.display = 'none';
        text10.style.display = 'none';
        text11.style.display = 'none';
        text12.style.display = 'none';

        title1.style.display = 'block';
        title2.style.display = 'block';
        title3.style.display = 'block';
        title4.style.display = 'none';
        title5.style.display = 'none';
        title6.style.display = 'none';
        title7.style.display = 'none';
        title8.style.display = 'none';
        title9.style.display = 'none';
        title10.style.display = 'none';
        title11.style.display = 'none';
        title12.style.display = 'none';

        image1.style.display = 'block';
        image2.style.display = 'block';
        image3.style.display = 'block';
        image4.style.display = 'none';
        image5.style.display = 'none';
        image6.style.display = 'none';
        image7.style.display = 'none';
        image8.style.display = 'none';
        image9.style.display = 'none';
        image10.style.display = 'none';
        image11.style.display = 'none';
        image12.style.display = 'none';

        break;

      case 2:
        
        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'block';
        text5.style.display = 'block';
        text6.style.display = 'block';
        text7.style.display = 'none';
        text8.style.display = 'none';
        text9.style.display = 'none';
        text10.style.display = 'none';
        text11.style.display = 'none';
        text12.style.display = 'none';

        title1.style.display = 'none';
        title2.style.display = 'none';
        title3.style.display = 'none';
        title4.style.display = 'block';
        title5.style.display = 'block';
        title6.style.display = 'block';
        title7.style.display = 'none';
        title8.style.display = 'none';
        title9.style.display = 'none';
        title10.style.display = 'none';
        title11.style.display = 'none';
        title12.style.display = 'none';

        image1.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'none';
        image4.style.display = 'block';
        image5.style.display = 'block';
        image6.style.display = 'block';
        image7.style.display = 'none';
        image8.style.display = 'none';
        image9.style.display = 'none';
        image10.style.display = 'none';
        image11.style.display = 'none';
        image12.style.display = 'none';

        break;

      case 3:
        
        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'none';
        text6.style.display = 'none';
        text7.style.display = 'block';
        text8.style.display = 'block';
        text9.style.display = 'block';
        text10.style.display = 'none';
        text11.style.display = 'none';
        text12.style.display = 'none';

        title1.style.display = 'none';
        title2.style.display = 'none';
        title3.style.display = 'none';
        title4.style.display = 'none';
        title5.style.display = 'none';
        title6.style.display = 'none';
        title7.style.display = 'block';
        title8.style.display = 'block';
        title9.style.display = 'block';
        title10.style.display = 'none';
        title11.style.display = 'none';
        title12.style.display = 'none';

        image1.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'none';
        image4.style.display = 'none';
        image5.style.display = 'none';
        image6.style.display = 'none';
        image7.style.display = 'block';
        image8.style.display = 'block';
        image9.style.display = 'block';
        image10.style.display = 'none';
        image11.style.display = 'none';
        image12.style.display = 'none';


        break;

        case 4:
        
        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'none';
        text6.style.display = 'none';
        text7.style.display = 'none';
        text8.style.display = 'none';
        text9.style.display = 'none';
        text10.style.display = 'block';
        text11.style.display = 'block';
        text12.style.display = 'block';

        title1.style.display = 'none';
        title2.style.display = 'none';
        title3.style.display = 'none';
        title4.style.display = 'none';
        title5.style.display = 'none';
        title6.style.display = 'none';
        title7.style.display = 'none';
        title8.style.display = 'none';
        title9.style.display = 'none';
        title10.style.display = 'block';
        title11.style.display = 'block';
        title12.style.display = 'block';

        image1.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'none';
        image4.style.display = 'none';
        image5.style.display = 'none';
        image6.style.display = 'none';
        image7.style.display = 'none';
        image8.style.display = 'none';
        image9.style.display = 'none';
        image10.style.display = 'block';
        image11.style.display = 'block';
        image12.style.display = 'block';

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