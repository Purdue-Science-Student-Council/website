
// function validEmail(email) { // see:
//     var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//     return re.test(email);
// }

// function handleFormSubmit(event) {  // handles form submit withtout any jquery
//     event.preventDefault();           // we are submitting via xhr below

//     // if( !validEmail(data.email) ) {   // if email is not valid show error
//     //     document.getElementById('email-invalid').style.display = 'block';
//     //     return false;
//     // } else {
        
//         const object = {
//             parameters: {
//                 fullName: event.target.elements.fullName.value,
//                 email: event.target.elements.email.value,
//                 message: event.target.elements.message.value,
//             }
//         }

//         var url = event.target.action;
//         console.log(url);
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type' : 'application/x-www-form-urlencoded'
//             },
//             body: object
//         })
//         .then(res => res.json())
//         .then(res => console.log(res))
//         .catch(e => console.log(e)); 

//         // var xhr = new XMLHttpRequest();
//         // xhr.open('POST', url);
//         // // xhr.withCredentials = true;
//         // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//         // xhr.onreadystatechange = function() {
//         //     console.log( xhr.status, xhr.statusText )
//         //     console.log(xhr.responseText);
//         //     // document.getElementById('gform').style.display = 'none'; // hide form
//         //     // document.getElementById('thankyou_message').style.display = 'block';
//         //     return;
//         // };
//         // // url encode form data for sending as post data
//         // var encoded = Object.keys(data).map(function(k) {
//         //     return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
//         // }).join('&')
//         // console.log(data);
//         // xhr.send(encoded);
//     // }
// }

// function loaded() {
//     console.log('contact form submission handler loaded successfully');
//     // bind to the submit event of our form
//     var form = document.getElementById('gform');
//     form.addEventListener("submit", handleFormSubmit, false);
// };

// document.addEventListener('DOMContentLoaded', loaded, false);