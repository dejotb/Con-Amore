// Allowing cookies storage

// const handleCookies = function () {
//     const cookieStorage = {
//       getItem: (key) => {
//         const cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((acc, [key, value]) => ({...acc, [key.trim()]: value }), {});
//         return cookies[key];
//       },
//       setItem: (key, value) => {
//         document.cookie = `${key}=${value}`
//       }


//     }

//     const storageType = cookieStorage;
//     const consentPropertyName = 'jdc_consent';

//     const shouldShowPopup = () => !storageType.getItem(consentPropertyName);

//     const saveToSotrage = () => storageType.setItem(consentPropertyName, true);

//     window.addEventListener('load', function() {

//       const consentPopup = document.querySelector('.consent__popup');
//       const acceptBtn = document.querySelector('.accept');

//      const acceptFn = () => {
//        saveToSotrage(storageType);
//        consentPopup.classList.add('hidden');
//      };

//      acceptBtn.addEventListener('click', acceptFn);


//       if (shouldShowPopup(storageType)) {
//         setTimeout(() => {

//           consentPopup.classList.remove('hidden');
//         }, 2000)
//       }
//     })
//   }

//   handleCookies()