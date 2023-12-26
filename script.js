const modal = document.querySelector('.shareModal');

function openmodal(){

    modal.style.transform = 'scale(1.1)';

}

function closeModal(){

    modal.style.transform = 'scale(0)';

}

function shareOnFacebook(){

    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://codehelp-weather-app.netlify.app/'), 'facebook-share-dialog', 'width=626,height=436');
}

function shareOnLinkedIn(){

    window.open('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent('https://codehelp-weather-app.netlify.app/') + '&title=' + encodeURIComponent('Akshat') + '&summary=' + encodeURIComponent('Hello, World!') + '&source=' + encodeURIComponent('Your Source'), 'linkedin-share-dialog', 'width=626,height=436');

}

function shareOnWhatsapp(){

    window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent('Your Message') + '%20' + encodeURIComponent('https://codehelp-weather-app.netlify.app/'));


}

function shareOnDiscord(){

}

function shareOnInsta(){

}