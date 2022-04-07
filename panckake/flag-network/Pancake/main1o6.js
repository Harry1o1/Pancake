let body = document.querySelector('body');
let menu_ic = document.querySelector('#pnt-it1');
let small_sidebar = document.querySelector('#small-sidebar');
let light = document.querySelector('#pnt-it5');
let login_toggler = document.querySelector('#login-toggler');
let login_container = document.querySelector('#login_wrapper');
let overlay = document.querySelector('.overlay');
// let small_sidebar_tg = document.querySelectorAll('.st');
let st1 = document.querySelector('.st1');
let st2 = document.querySelector('.st2');
let st3 = document.querySelector('.st3');
let st4 = document.querySelector('.st4');
let st5 = document.querySelector('.st5');
let st6 = document.querySelector('.st6');

let st = document.querySelectorAll('.st');
let st_tg1 = document.querySelector('#st-m1');
let st_tg2 = document.querySelector('#st-m2');
let st_tg3 = document.querySelector('#st-m3');
let st_tg4 = document.querySelector('#st-m4');
let st_tg5 = document.querySelector('#st-m5');
let st_tg6 = document.querySelector('#st-m6');


let login_close = document.querySelector('#login_header .icon');

/* Moralis init code */
const serverUrl = "https://a2pko6dyqtwq.usemoralis.com:2053/server";
const appId = "D0r1DA19TTZvr6CiWdB3sjDDE0Y71EFasRNLP12a";
Moralis.start({ serverUrl, appId });


// Metamask
// Moralis.authenticate().then(function (user) {
//     console.log(user.get('ethAddress'))
// })


/* Authentication code */
async function login_metamask() {
    let user = Moralis.User.current();
    if (!user) {

        const user = await Moralis.authenticate()
            .then(function(user) {
                console.log("logged in user:", user);
                console.log(user.get("ethAddress"));
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}
async function login_wallet_connect() {
    let user = Moralis.User.current();
    if (!user) {

        const user = await Moralis.authenticate({ provider: "walletconnect" })
            .then(function(user) {
                console.log("logged in user:", user);
                console.log(user.get("ethAddress"));
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}


document.querySelector(".btn_login_metamask").onclick = login_metamask;
document.querySelector(".btn_login_wallet-connect").onclick = login_wallet_connect;








st.forEach((small_sidebarn) => {
    small_sidebarn.addEventListener('click',()=>{
        
        
        // menu_ic.classList.add('active');
        
        if (small_sidebar.classList.contains('close')) {
            
            small_sidebar.classList.remove('close')
            // console.log('All done!')
        }
        
        else {
            small_sidebar.classList.toggle('close')
            // console.log('Yeh baby!')
        }
        if(menu_ic.classList.contains('active')){
            // console.log('hixycutdi5d2761111111')
            small_sidebar.classList.toggle('close')
            small_sidebar.classList.toggle('active');
            
        }
        
        
        
        // small_sidebar.classList.('close')
        // st1.classList.toggle('active1o1');
        small_sidebar.classList.toggle('active');
        
        
    })
})

menu_ic.addEventListener('click', () => {

    menu_ic.classList.toggle('active');
    small_sidebar.classList.toggle('active');
    if (small_sidebar.classList.contains('close')) {
        
        small_sidebar.classList.remove('close')
        // console.log('All done!')
    }
    else {
        small_sidebar.classList.toggle('close')
        // console.log('Yeh baby!')
    }
    
})




st_tg1.addEventListener('click', (e) => {
    // console.log("oppppppp1")
    st1.classList.toggle('active1o1');

})
st_tg2.addEventListener('click', (e) => {
    // console.log("oppppppp2")
    st2.classList.toggle('active1o1');

})
st_tg3.addEventListener('click', (e) => {
    // console.log("oppppppp3")
    st3.classList.toggle('active1o1');

})
st_tg4.addEventListener('click', (e) => {
    // console.log("oppppppp1")
    st4.classList.toggle('active1o1');

})
st_tg5.addEventListener('click', (e) => {
    // console.log("oppppppp2")
    st5.classList.toggle('active1o1');

})
st_tg6.addEventListener('click', (e) => {
    // console.log("oppppppp3")
    st6.classList.toggle('active1o1');

})





light.addEventListener('click', () => {
    // console.log('op');
    light.classList.toggle('active');
    // body.classList.toggle('dark');
    // body.classList.remove('dark');
    body.classList.toggle('light');
    
    // if(body.classList.contains('light')){
        
    //     // body.classList.('dark');
    //     body.classList.replace('light','dark');
        
    // }
    // body.classList.replace('dark','light');
    

})

login_toggler.addEventListener('click', () => {
    // console.log('op');
    login_container.classList.add('active');
    overlay.classList.add('active');

    // if (login_container.classList.contains('active')) {
    //     login_toggler.innerText = 'cancel';
        
    //     console.log('hi')
    // }
    // else {

    //     login_toggler.innerText = 'connect';

    // }
    
    
})



login_close.addEventListener('click',()=>{
    // console.log('kohug');
    login_container.classList.remove('active');
    overlay.classList.remove('active');

    if (login_container.classList.contains('active')) {
        login_toggler.innerText = 'cancel';
        
        // console.log('hi')
    }
    else {

        login_toggler.innerText = 'connect';

    }
    
    
})
