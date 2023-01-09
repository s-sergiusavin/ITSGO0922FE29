const accountSettingsBtn = document.getElementById('accountSettingsButton');
const acountSettingsList = document.getElementsByClassName('accountSettingsMenu')[0];

accountSettingsBtn.addEventListener('click', function() {
    if (acountSettingsList.style.display === 'flex') { 
        acountSettingsList.style.display = 'none';
    } else {
        acountSettingsList.style.display = 'flex';
    }  
});