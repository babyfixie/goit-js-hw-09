import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const o=document.querySelector("form"),t=document.querySelector("input"),l=document.querySelector("textarea");t.placeholder="";l.placeholder="";const a={email:"",message:""};o.addEventListener("input",()=>{a.email=t.value,a.message=l.value;try{localStorage.setItem("feedback-form-state",JSON.stringify(a))}catch(e){console.log(e)}});o.addEventListener("submit",e=>{if(e.preventDefault(),!a.email||!a.message){alert("Please fill in all fields");return}console.log(a),t.value="",l.value="",a.email="",a.message="",localStorage.clear()});const r=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&e.email&&e.message&&(t.value=e.email,l.value=e.message,a.email=e.email,a.message=e.message)}catch(e){console.log(e)}};r();
//# sourceMappingURL=2-form.js.map
